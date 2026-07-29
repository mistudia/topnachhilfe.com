import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB – Mistudia" },
      { name: "description", content: "Allgemeine Geschäftsbedingungen von Mistudia." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/agb" },
    ],
  }),
  component: () => (
    <LegalPage title="Allgemeine Geschäftsbedingungen" description="Platzhalter – wird durch juristisch geprüften Text ersetzt.">
      <p>Diese AGB sind ein Platzhalter. Sie werden zu einem späteren Zeitpunkt durch eine vollständige, rechtssichere Version ersetzt.</p>
      <h2>§1 Geltungsbereich</h2>
      <p>Platzhalter-Text.</p>
      <h2>§2 Vertragsschluss</h2>
      <p>Platzhalter-Text.</p>
      <h2>§3 Preise & Zahlung</h2>
      <p>Platzhalter-Text.</p>
    </LegalPage>
  ),
});