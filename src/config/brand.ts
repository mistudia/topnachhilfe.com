export type BrandId = "mistudia" | "topnachhilfe" | "vocabboss" | "vokabelspiel";

export type BrandColorName =
  | "primary"
  | "primaryForeground"
  | "primaryGlow"
  | "secondary"
  | "secondaryForeground"
  | "accentWarm"
  | "accent"
  | "accentForeground"
  | "background"
  | "foreground"
  | "muted"
  | "mutedForeground"
  | "card"
  | "cardForeground"
  | "border"
  | "input"
  | "ring";

export type BrandColors = Record<BrandColorName, string>;

export interface BrandConfig {
  id: BrandId;
  name: string;
  legalName: string;
  domain: string;
  domains: string[];
  slogan: string;
  description: string;
  logo: {
    src: string;
    alt: string;
  };
  favicon: string;
  colors: BrandColors;
  phone: string;
  email: string;
  whatsapp: string;
  socialMedia: {
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
    tiktok: string;
  };
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
    label: string;
  };
  imprint: {
    providerName: string;
    responsiblePerson: string;
    disclaimer: string;
  };
  privacy: {
    controller: string;
    contactEmail: string;
  };
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
    ogImage: string;
    twitterHandle: string;
  };
}
