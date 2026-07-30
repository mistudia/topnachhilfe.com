import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBrand } from "@/components/brand-provider";

const subjects = [
  { name: "Mathematik", to: "/faecher/mathematik" },
  { name: "Physik", to: "/faecher/physik" },
  { name: "Spanisch", to: "/faecher/spanisch" },
  { name: "Deutsch", to: "/faecher/deutsch" },
  { name: "Englisch", to: "/faecher/englisch" },
  { name: "Sonstiges", to: "/faecher/sonstiges" },
];

const links = [
  { to: "/", label: "Start" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/preise", label: "Preise" },
  { to: "/apps", label: "Apps" },
  { to: "/animechs", label: "Animechs" },
  { to: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const brand = useBrand();
  const [open, setOpen] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          {brand.logo.src ? (
            <img src={brand.logo.src} alt={brand.logo.alt} className="h-10 w-auto sm:h-11" width="200" height="60" />
          ) : (
            <span className="text-lg font-semibold text-foreground">{brand.name}</span>
          )}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>Start</Link>
          <Link to="/ueber-uns" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary" }}>Über uns</Link>
          <div
            className="relative"
            onMouseEnter={() => setSubjectsOpen(true)}
            onMouseLeave={() => setSubjectsOpen(false)}
          >
            <Link to="/faecher" className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary" }}>
              Fächer <ChevronDown className="h-4 w-4" />
            </Link>
            {subjectsOpen && (
              <div className="absolute left-0 top-full min-w-56 rounded-xl border border-border bg-popover p-2 shadow-[var(--shadow-card)]">
                <Link to="/faecher" className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent">Übersicht</Link>
                <div className="my-1 h-px bg-border" />
                {subjects.map((s) => (
                  <Link key={s.to} to={s.to} className="block rounded-lg px-3 py-2 text-sm hover:bg-accent">{s.name}</Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/preise" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary" }}>Preise</Link>
          <Link to="/apps" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary" }}>Apps</Link>
          <Link to="/animechs" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary" }}>Animechs</Link>
          <Link to="/kontakt" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary" }}>Kontakt</Link>
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="lg">
            <Link to="/termin-buchen">Termin buchen</Link>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.slice(0, 2).map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent">{l.label}</Link>
            ))}
            <Link to="/faecher" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent">Fächer</Link>
            <div className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
              {subjects.map((s) => (
                <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent">{s.name}</Link>
              ))}
            </div>
            {links.slice(2).map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent">{l.label}</Link>
            ))}
            <Button asChild variant="hero" className="mt-2 w-full">
              <Link to="/termin-buchen" onClick={() => setOpen(false)}>Termin buchen</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
