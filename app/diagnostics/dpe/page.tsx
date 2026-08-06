import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicePageContent from "@/components/ServicePageContent";
import { notFound } from "next/navigation";

const service = getServiceBySlug("dpe")!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.metaDescription,
};

export default function Page() {
  if (!service) return notFound();
  return <ServicePageContent service={service} />;
}
