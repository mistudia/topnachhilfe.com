import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { useBrand } from "@/components/brand-provider";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Mistudia" },
      { name: "description", content: "Datenschutzerklärung von Mistudia." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/datenschutz" },
    ],
  }),
  component: Page,
});

function Page() {
  const brand = useBrand();
  return (
    <LegalPage title="Datenschutzerklärung" description="Informationen zur Verarbeitung personenbezogener Daten.">
      <h2>1. Verantwortlicher</h2>
      <p>{brand.privacy.controller}</p>
      <h2>Kontakt</h2>
      <p>E-Mail: {brand.privacy.contactEmail}</p>
    </LegalPage>
  );
}
