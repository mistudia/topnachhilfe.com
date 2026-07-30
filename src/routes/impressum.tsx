import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { useBrand } from "@/components/brand-provider";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Mistudia" },
      { name: "description", content: "Impressum von Mistudia gemäß § 5 TMG." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/impressum" },
    ],
  }),
  component: Page,
});

function Page() {
  const brand = useBrand();
  return (
    <LegalPage title="Impressum" description="Angaben gemäß § 5 TMG.">
      <h2>Anbieter</h2>
      <p>{brand.imprint.providerName}<br />{brand.address.street}<br />{brand.address.postalCode} {brand.address.city}</p>
      <h2>Kontakt</h2>
      <p>E-Mail: {brand.email}</p>
      <h2>Verantwortlich für den Inhalt</h2>
      <p>{brand.imprint.responsiblePerson}, Anschrift wie oben.</p>
      {brand.imprint.disclaimer && (
        <>
          <h2>Haftungsausschluss</h2>
          <p>{brand.imprint.disclaimer}</p>
        </>
      )}
    </LegalPage>
  );
}
