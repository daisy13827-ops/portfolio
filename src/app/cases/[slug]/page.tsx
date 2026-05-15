import { notFound } from "next/navigation";

import {
  cases,
  getCaseBySlug,
} from "@/data/cases";

import CaseClient from "./CaseClient";

export function generateStaticParams() {
  return cases.map((item) => ({
    slug: item.slug,
  }));
}

export default function CasePage({
  params,
}: {
  params: { slug: string };
}) {
  const currentCase = getCaseBySlug(params.slug);

  if (!currentCase) {
    return notFound();
  }

  return <CaseClient currentCase={currentCase} />;
}