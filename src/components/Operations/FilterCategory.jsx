"use client";
import { ListBox, Select } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
const CategoryData = [
  "Tech",
  "Health",
  "AI",
  "Education",
  "Finance",
  "Environment",
  "Social",
  "Entertainment",
  "Retail",
  "Other",
];
const FilterCategory = () => {


  const [categoryQuery, setCategoryQuery] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter()
  const manageFilter = (category) => {
      setCategoryQuery(category);
      const params = new URLSearchParams(searchParams.toString());
      if (categoryQuery) {
        params.set("category", categoryQuery);
      } else {
        params.delete("category");
      }
      router.push(`/ideas?${params.toString()}`);
  };


  return (
     <Select className="w-[256px]" placeholder="Select one">
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          {CategoryData.map((category) => (
            <ListBox.Item key={category} onClick={()=>manageFilter(category)} id={category} textValue={category}>
              {category}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}

        </ListBox>
      </Select.Popover>
    </Select>
  );
};

export default FilterCategory;
