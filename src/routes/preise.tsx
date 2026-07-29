import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise – Mistudia Nachhilfe" },
      { name: "description", content: "Faire Preise für Einzelstunden und Nachhilfe-Pakete. Kostenlose Erstberatung inklusive." },
      { property: "og:title", content: "Preise – Mistudia" },
      { property: "og:description", content: "Transparente Preise für Nachhilfe bei Mistudia." },
      { property: "og:url", content: "/preise" },
    ],
  }),
  component: Page,
});

const plans = [
  {
    name: "Einzelstunde",
    price: "35 €",
    unit: "/ 60 Minuten",
    features: ["Flexible Buchung", "1:1 Online-Unterricht", "Materialien inklusive", "Keine Mindestlaufzeit"],
    variant: "outline" as const,
    highlight: false,
  },
  {
    name: "5er-Paket",
    price: "159 €",
    unit: "5 × 60 Minuten",
    features: ["Ersparnis von 16 €", "Termine flexibel wählbar", "6 Monate gültig", "Materialien inklusive"],
    variant: "hero" as const,
    highlight: true,
  },
  {
    name: "Abo Monat",
    price: "129 €",
    unit: "/ Monat, 4 Stunden",
    features: ["4 Stunden pro Monat", "Fester Wochentermin", "Priorisierte Terminwahl", "Monatlich kündbar"],
    variant: "outline" as const,
    highlight: false,
  },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Preise"
        title="Transparente Preise, kein Kleingedrucktes"
        description="Ob einzelne Stunde oder langfristige Begleitung – wähle das Paket, das zu deinen Zielen passt."
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-sm font-medium text-primary">
          <Sparkles className="h-4 w-4" /> Kostenlose Erstberatung inklusive
        </span>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border p-8 shadow-[var(--shadow-card)] ${
                p.highlight ? "border-primary bg-card ring-2 ring-primary/20" : "border-border bg-card"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[image:var(--gradient-primary)] px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Beliebt
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.unit}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant={p.variant} className="mt-8 w-full" size="lg">
                <Link to="/termin-buchen">Termin buchen</Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Alle Preise inkl. MwSt. Individuelle Pakete auf Anfrage möglich.
        </p>
      </section>
    </SiteLayout>
  );
}