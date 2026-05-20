export const GetIdeasById = async (id) => {
  const getData = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`,
  );
  const data = await getData.json();
  return data;
};

export const GetMyIdeas = async (id) => {
  const getData = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${id}`,
  );
  const data = await getData.json();
  return data;
};
