"use server";
import { headers } from "next/headers";
import { auth } from "../auth";

const { token } = await auth.api.getToken({ headers: await headers() });
const session = await auth.api.getSession({ headers: await headers() });

export const GetIdeasAction = async (searchQuery) => {
  const getData = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas?search=${searchQuery || ""}`);
  const data = await getData.json();
  return data;
};

export const AddIdeasPostAction = async (formData) => {
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
