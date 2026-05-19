"use server";

export const PostAction = async (formData) => {
  const data = {
    title: formData.get("title"),
    shortDescription: formData.get("shortDescription"),
    detailedDescription: formData.get("detailedDescription"),
    category: formData.get("category"),
    tags: formData.getAll("tags"),
    imageUrl: formData.get("imageUrl"),
    estimatedBudget: formData.get("estimatedBudget"),
    targetAudience: formData.getAll("targetAudience"),
    problemStatement: formData.get("problemStatement"),
    proposedSolution: formData.get("proposedSolution"),
  };
  console.log(data);
};
