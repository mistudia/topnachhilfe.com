import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Mistudia" },
      { name: "description", content: "Impressum von Mistudia gemäß § 5 TMG." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/impressum" },
    ],
  }),
  component: () => (
    <LegalPage title="Impressum" description="Angaben gemäß § 5 TMG.">
      <p>Dies ist ein Platzhalter-Impressum. Bitte ersetzen durch die tatsächlichen Angaben.</p>
      <h2>Anbieter</h2>
      <p>Mistudia<br />Musterstraße 1<br />12345 Musterstadt</p>
      <h2>Kontakt</h2>
      <p>E-Mail: kontakt@mistudia.de</p>
      <h2>Verantwortlich für den Inhalt</h2>
      <p>Max Mustermann, Anschrift wie oben.</p>
      <h2>Haftungsausschluss</h2>
      <p>Platzhalter-Text. Wird durch juristisch geprüfte Inhalte ersetzt.</p>
    </LegalPage>
  ),
});