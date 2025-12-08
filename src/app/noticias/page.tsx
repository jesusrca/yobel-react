"use client";

import { Suspense } from "react";
import { Noticias } from "../../page-content/Noticias";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Noticias />
    </Suspense>
  );
}
