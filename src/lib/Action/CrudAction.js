"use server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../auth";
import { id } from "date-fns/locale";

export const GetIdeasAction = async (searchQuery, categoryQuery) => {
  const getData = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas?search=${searchQuery || ""}&category=${categoryQuery || ""}`,
  );
  const data = await getData.json();
  return data;
};

export const GetIdeasById = async (id) => {
  const { token } = await auth.api.getToken({ headers: await headers() });
  const getData = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await getData.json();
  return data;
};

export const AddIdeasPostAction = async (prevState, formData) => {
  // ── Server-side validation ──
  const title = formData.get("title")?.trim();
  const shortDescription = formData.get("shortDescription")?.trim();
  const category = formData.get("category");
  const tags = formData.getAll("tags");
  const imageUrl = formData.get("imageUrl")?.trim();
  const estimatedBudget = formData.get("estimatedBudget")?.trim();
  const targetAudience = formData.getAll("targetAudience");
  const detailedDescription = formData.get("detailedDescription")?.trim();
  const problemStatement = formData.get("problemStatement")?.trim();
  const proposedSolution = formData.get("proposedSolution")?.trim();

  const errors = {};
  if (!title) errors.title = "Idea title is required.";
  if (!shortDescription)
    errors.shortDescription = "Short description is required.";
  if (!category) errors.category = "Please select a category.";
  if (tags.length === 0) errors.tags = "Please select at least one tag.";
  if (!imageUrl) errors.imageUrl = "Image URL is required.";
  if (!estimatedBudget)
    errors.estimatedBudget = "Estimated budget is required.";
  if (targetAudience.length === 0)
    errors.targetAudience = "Please select at least one target audience.";
  if (!detailedDescription)
    errors.detailedDescription = "Detailed description is required.";
  if (!problemStatement)
    errors.problemStatement = "Problem statement is required.";
  if (!proposedSolution)
    errors.proposedSolution = "Proposed solution is required.";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const { token } = await auth.api.getToken({ headers: await headers() });
  const session = await auth.api.getSession({ headers: await headers() });
  const ideasData = Object.fromEntries(formData.entries());
  ideasData.tags = tags;
  ideasData.targetAudience = targetAudience;
  ideasData.createTime = new Date().toLocaleString("us-EN", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  ideasData.userInfo = session.user;
  ideasData.likes = 0;
  ideasData.comments = [];

  const postData = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(ideasData),
  });
  const data = await postData.json();
  if (data.insertedId) {
    return { success: true, message: "Idea submitted successfully!" };
  } else {
    return { success: false, message: "Failed to submit Idea!" };
  }
};

export const UpdateIdeasAction = async (formData, ideasId) => {
  const { token } = await auth.api.getToken({ headers: await headers() });
  const session = await auth.api.getSession({ headers: await headers() });
  const ideasData = Object.fromEntries(formData.entries());
  ideasData.tags = formData.getAll("tags");
  ideasData.targetAudience = formData.getAll("targetAudience");
  ideasData.createTime = new Date().toLocaleString("us-EN", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  ideasData.userInfo = session.user;

  const updateData = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${ideasId}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(ideasData),
    },
  );
  const data = await updateData.json();
  if (data.insertedId) {
    return { success: true, message: "Idea submitted successfully!" };
  } else {
    return { success: false, message: "Failed to submit Idea!" };
  }
};

export const DeleteIdeasAction = async (ideasId) => {
  "use server";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${ideasId}`,
    {
      method: "DELETE",
    },
  );
  const data = await res.json();
  // revalidation
  // if (data.deletedCount > 0) {
  //   revalidatePath("/users");
  // }
  return data;
};

export const GetMyIdeas = async (id) => {
  const { token } = await auth.api.getToken({ headers: await headers() });
  const session = await auth.api.getSession({ headers: await headers() });
  const getData = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await getData.json();
  return data;
};
