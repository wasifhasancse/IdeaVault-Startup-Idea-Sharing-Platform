"use server";
import { headers } from "next/headers";
import { auth } from "../auth";



export const GetIdeasAction = async (searchQuery, categoryQuery) => {
  const getData = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas?search=${searchQuery || ""}&category=${categoryQuery || ""}`,
  );
  const data = await getData.json();
  return data;
};

export const AddIdeasPostAction = async (formData) => {
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
    // revalidatePath("/");
    // redirect("/");
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

  const updateData = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${ideasId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(ideasData),
  });
  const data = await updateData.json();
  if (data.modifiedCount > 0) {
    // revalidatePath("/");
    // redirect("/");
  }
};

export const DeleteIdeasAction = async (ideasId) => {
  "use server";
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${ideasId}`, {
    method: "DELETE",
  });
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
      }
    }
  );
  const data = await getData.json();
  return data;
};
