import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useBrand } from "@/components/brand-provider";

export function CookieBanner() {
  const brand = useBrand();
  const [visible, setVisible] = useState(false);
  const storageKey = `${brand.id}-cookie-consent`;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(storageKey)) {
      setVisible(true);
    }
  }, [storageKey]);

  const decide = (value: "accepted" | "declined") => {
    localStorage.setItem(storageKey, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:inset-x-6 sm:bottom-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-foreground">
          <p className="font-semibold">Wir nutzen Cookies</p>
          <p className="mt-1 text-muted-foreground">
            Wir setzen Cookies ein, um dir das bestmögliche Nutzungserlebnis zu bieten. Du kannst deine Auswahl jederzeit ändern.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={() => decide("declined")}>Ablehnen</Button>
          <Button variant="hero" size="sm" onClick={() => decide("accepted")}>Akzeptieren</Button>
        </div>
      </div>
    </div>
  );
}
