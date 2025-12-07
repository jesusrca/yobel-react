import React, { useState } from "react";
import { InteractiveList } from "../ui/InteractiveList";
import { services } from "../../data/services";

export function Services() {
  return (
    <InteractiveList items={services} defaultImage={services[0].image} />
  );
}
