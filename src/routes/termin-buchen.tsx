import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, CalendarCheck } from "lucide-react";

export const Route = createFileRoute("/termin-buchen")({
  head: () => ({
    meta: [
      { title: "Termin buchen – Mistudia" },
      { name: "description", content: "Buche jetzt deinen Nachhilfe-Termin bei Mistudia oder vereinbare ein kostenloses Erstgespräch." },
      { property: "og:title", content: "Termin buchen – Mistudia" },
      { property: "og:description", content: "Kostenloses Erstgespräch buchen und Nachhilfe starten." },
      { property: "og:url", content: "/termin-buchen" },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Termin buchen"
        title="Starte deine Nachhilfe bei Mistudia"
        description="Fülle das Formular aus – wir melden uns innerhalb von 24 Stunden mit einem Terminvorschlag."
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            {sent ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-secondary" />
                <h2 className="mt-4 text-2xl font-bold">Vielen Dank!</h2>
                <p className="mt-2 max-w-md text-muted-foreground">
                  Wir haben deine Anfrage erhalten und melden uns in Kürze per E-Mail.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required placeholder="Vor- und Nachname" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input id="email" type="email" required placeholder="deine@email.de" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Gewünschtes Fach</Label>
                    <select id="subject" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                      <option value="">Bitte wählen</option>
                      <option>Mathematik</option>
                      <option>Physik</option>
                      <option>Spanisch</option>
                      <option>Deutsch</option>
                      <option>Englisch</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Wunschtermin</Label>
                    <Input id="date" type="datetime-local" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="msg">Nachricht (optional)</Label>
                  <Textarea id="msg" rows={4} placeholder="Was möchtest du uns mitteilen?" />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <CalendarCheck className="h-4 w-4" /> Termin anfragen
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Mit dem Absenden akzeptierst du unsere Datenschutzerklärung.
                </p>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-muted/40 p-6">
              <h3 className="font-semibold">Kostenlose Erstberatung</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Das erste Kennenlerngespräch (ca. 20 Minuten) ist immer kostenlos und unverbindlich.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-muted/40 p-6">
              <h3 className="font-semibold">Flexibel & online</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Alle Stunden finden bequem online statt – ohne Anfahrt, mit modernen Tools.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-muted/40 p-6">
              <h3 className="font-semibold">Direkter Kontakt</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Lieber schreiben? Erreiche uns unter <a href="mailto:kontakt@mistudia.de" className="text-primary hover:underline">kontakt@mistudia.de</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}