import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Mistudia" },
      { name: "description", content: "Datenschutzerklärung von Mistudia." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/datenschutz" },
    ],
  }),
  component: () => (
    <LegalPage title="Datenschutzerklärung" description="Platzhalter – wird durch juristisch geprüften Text ersetzt.">
      <p>Diese Datenschutzerklärung ist ein Platzhalter. Sie wird zu einem späteren Zeitpunkt durch eine vollständige, rechtssichere Version ersetzt.</p>
      <h2>1. Verantwortlicher</h2>
      <p>Mistudia, Musterstraße 1, 12345 Musterstadt, kontakt@mistudia.de.</p>
      <h2>2. Erhebung personenbezogener Daten</h2>
      <p>Platzhalter-Text.</p>
      <h2>3. Ihre Rechte</h2>
      <p>Platzhalter-Text.</p>
    </LegalPage>
  ),
});