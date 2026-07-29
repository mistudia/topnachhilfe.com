import { Calculator, Atom, Languages, BookOpen, Globe2, Sparkles, type LucideIcon } from "lucide-react";

export type SubjectSlug = "mathematik" | "physik" | "spanisch" | "deutsch" | "englisch" | "sonstiges";

export interface Subject {
  slug: SubjectSlug;
  name: string;
  icon: LucideIcon;
  short: string;
  grades: string;
  topics: string[];
  colorClass: string;
}

export const subjects: Subject[] = [
  {
    slug: "mathematik",
    name: "Mathematik",
    icon: Calculator,
    short: "Von Grundrechnen bis Analysis – Schritt für Schritt zum Aha-Erlebnis.",
    grades: "Klasse 1 bis Abitur",
    topics: ["Grundrechenarten & Bruchrechnen", "Geometrie & Trigonometrie", "Gleichungen & Funktionen", "Analysis, Vektoren & Stochastik", "Abiturvorbereitung"],
    colorClass: "bg-[oklch(0.94_0.05_240)] text-[oklch(0.4_0.14_240)]",
  },
  {
    slug: "physik",
    name: "Physik",
    icon: Atom,
    short: "Physikalische Zusammenhänge anschaulich erklärt und verstanden.",
    grades: "Klasse 5 bis Abitur",
    topics: ["Mechanik & Bewegung", "Elektrizitätslehre", "Optik & Wellen", "Thermodynamik", "Abiturvorbereitung"],
    colorClass: "bg-[oklch(0.94_0.05_180)] text-[oklch(0.4_0.12_180)]",
  },
  {
    slug: "spanisch",
    name: "Spanisch",
    icon: Languages,
    short: "Spanisch sprechen, verstehen und Freude an der Sprache entwickeln.",
    grades: "Anfänger bis Oberstufe",
    topics: ["Grammatik & Zeiten", "Vokabelaufbau", "Sprech- und Hörverständnis", "Textproduktion", "Prüfungsvorbereitung"],
    colorClass: "bg-[oklch(0.94_0.06_55)] text-[oklch(0.45_0.14_55)]",
  },
  {
    slug: "deutsch",
    name: "Deutsch",
    icon: BookOpen,
    short: "Sicher im Ausdruck – von Rechtschreibung bis Textanalyse.",
    grades: "Klasse 1 bis Abitur",
    topics: ["Rechtschreibung & Grammatik", "Lesekompetenz", "Textanalyse & Interpretation", "Aufsatz & Erörterung", "Abitur & Präsentationen"],
    colorClass: "bg-[oklch(0.94_0.05_25)] text-[oklch(0.45_0.14_25)]",
  },
  {
    slug: "englisch",
    name: "Englisch",
    icon: Globe2,
    short: "Englisch mit Sicherheit sprechen, schreiben und verstehen.",
    grades: "Klasse 1 bis Abitur",
    topics: ["Grammatik & Tenses", "Vocabulary & Speaking", "Reading & Listening", "Writing & Essays", "Abitur & Cambridge-Vorbereitung"],
    colorClass: "bg-[oklch(0.94_0.06_150)] text-[oklch(0.4_0.14_150)]",
  },
  {
    slug: "sonstiges",
    name: "Sonstiges",
    icon: Sparkles,
    short: "Weitere Fächer und individuelle Lernbegleitung auf Anfrage.",
    grades: "Alle Altersgruppen",
    topics: ["Lerncoaching", "Prüfungsvorbereitung", "Bewerbungscoaching", "Konzentration & Lernmethoden", "Weitere Fächer auf Anfrage"],
    colorClass: "bg-[oklch(0.94_0.05_300)] text-[oklch(0.45_0.14_300)]",
  },
];

export function getSubject(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}