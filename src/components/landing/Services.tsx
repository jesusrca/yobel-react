import React, { useState } from "react";
import { InteractiveList } from "../ui/InteractiveList";
import { services } from "../../data/services";

interface ServicesProps {
  items?: typeof services;
  title?: string;
  label?: string;
}

export function Services({ items = services, title, label }: ServicesProps) {
  return (
    <InteractiveList items={items} defaultImage={items[0].image} title={title} label={label} />
  );
}
