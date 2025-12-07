import React from "react";
import { InteractiveList } from "../ui/InteractiveList";
import { companyContent } from "../../data/companyContent";
import { aboutTexts } from "../../constants/company";

export function ValueProposition() {
  const items = companyContent.valueProps.map((item, idx) => ({
    id: `0${idx + 1}`,
    title: item.text,
    description: item.description,
    image: item.image
  }));

  return (
    <InteractiveList
      items={items}
      className="bg-transparent py-24"
      title={aboutTexts.valueProposition.title}
      label={aboutTexts.valueProposition.label}
    />
  );
}