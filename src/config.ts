// Central place for content that changes often (contact info, pricing, nav).
// Update values here and they propagate across the whole site.

export const CONTACT = {
  // TODO: WhatsApp number was left blank in the requirements — swap this in.
  // International format, digits only (no "+", spaces, or dashes).
  whatsapp: "6282298188946",
  whatsappDisplay: "+62 822-9818-8946",
} as const;

export const BANK = {
  name: "Mandiri",
  accountNumber: "1260013634968",
  accountHolder: "GARA Smart Services",
} as const;

export const SOCIAL = {
  tiktok: "https://www.tiktok.com/@bimbelgara",
  instagram: "https://www.instagram.com/bimbelgara",
} as const;

// Anchor navigation shared by the header and footer.
export const SECTION_NAV = [
  { href: "#alur", label: "Alur Pendaftaran" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#pendaftaran", label: "Pendaftaran" },
  { href: "#informasi", label: "Informasi" },
] as const;

export const SELEKSI_OPTIONS = [
  "UNHAN",
  "Akademi (TNI-Polri)",
  "Bintara-Tamtama TNI-Polri",
  "Sekolah Kedinasan",
] as const;

export type Program = {
  id: string;
  label: string;
  detail?: string;
  price: number;
};

// Program satuan (individual tests).
export const INDIVIDUAL_PROGRAMS: Program[] = [
  { id: "tpa", label: "TPA", detail: "Tes Potensi Akademi", price: 3_000_000 },
  { id: "skd", label: "SKD", detail: "TWK, TIU, WKP", price: 4_000_000 },
  { id: "psikotes", label: "Psikotes", price: 4_000_000 },
  { id: "jasmani", label: "Jasmani", price: 3_500_000 },
  { id: "mi", label: "Mental Ideologi (MI)", price: 2_500_000 },
];

// Paket bundles.
export const PACKAGE_PROGRAMS: Program[] = [
  {
    id: "paket-1",
    label: "Paket 1",
    detail: "SKD + TPA + Psikotes + Jasmani + MI",
    price: 15_000_000,
  },
  {
    id: "paket-2",
    label: "Paket 2",
    detail: "SKD + TPA + Psikotes",
    price: 10_000_000,
  },
  {
    id: "paket-3",
    label: "Paket 3",
    detail: "SKD + Psikotes",
    price: 7_000_000,
  },
  {
    id: "paket-4",
    label: "Paket 4",
    detail: "SKD + Psikotes + Jasmani",
    price: 10_000_000,
  },
  {
    id: "paket-5",
    label: "Paket 5",
    detail: "SKD + Jasmani",
    price: 6_500_000,
  },
  {
    id: "paket-6",
    label: "Paket 6",
    detail: "Psikotes + Jasmani",
    price: 6_500_000,
  },
];

export const ALL_PROGRAMS: Program[] = [
  ...INDIVIDUAL_PROGRAMS,
  ...PACKAGE_PROGRAMS,
];

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}
