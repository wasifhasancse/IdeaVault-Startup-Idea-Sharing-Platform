export const GetIdeasById = async (id) => {

  const getData = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`,
  );
  const data = await getData.json();
  return data;
};
