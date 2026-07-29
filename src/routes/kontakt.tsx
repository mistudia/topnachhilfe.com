import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Mistudia" },
      { name: "description", content: "Kontaktiere Mistudia für Nachhilfe-Anfragen, Kooperationen oder Rückfragen." },
      { property: "og:title", content: "Kontakt – Mistudia" },
      { property: "og:description", content: "So erreichst du das Team von Mistudia." },
      { property: "og:url", content: "/kontakt" },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Kontakt"
        title="Wir freuen uns auf deine Nachricht"
        description="Ob Frage zu unserem Angebot, Kooperationen oder Feedback – schreib uns einfach über das Formular oder direkt per E-Mail."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground"><Mail className="h-5 w-5" /></span>
              <div>
                <p className="text-sm font-semibold">E-Mail</p>
                <a href="mailto:kontakt@mistudia.de" className="text-primary hover:underline">kontakt@mistudia.de</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground"><Phone className="h-5 w-5" /></span>
              <div>
                <p className="text-sm font-semibold">Telefon</p>
                <p className="text-muted-foreground">+49 (0) 000 000 000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground"><MapPin className="h-5 w-5" /></span>
              <div>
                <p className="text-sm font-semibold">Standort</p>
                <p className="text-muted-foreground">100 % online – deutschlandweit</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-muted/40 p-6">
              <p className="text-sm text-muted-foreground">
                Antwortzeit: In der Regel innerhalb von 24 Stunden an Werktagen.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            {sent ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-secondary" />
                <h2 className="mt-4 text-2xl font-bold">Danke für deine Nachricht!</h2>
                <p className="mt-2 max-w-md text-muted-foreground">Wir melden uns schnellstmöglich bei dir.</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="msg">Nachricht</Label>
                  <Textarea id="msg" rows={5} required />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">Nachricht senden</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}