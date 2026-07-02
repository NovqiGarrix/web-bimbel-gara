import { createFileRoute } from "@tanstack/react-router";
import AlurPendaftaran from "@/components/alur-pendaftaran";
import Hero from "@/components/hero";
import InformasiLain from "@/components/informasi-lain";
import RegistrationForm from "@/components/registration-form";
import Testimoni from "@/components/testimoni";

const description =
  "Bimbel GASS — bimbingan persiapan seleksi UNHAN, Akademi TNI-Polri, Bintara-Tamtama, dan Sekolah Kedinasan. Program satuan (TPA, SKD, Psikotes, Jasmani, MI) maupun paket lengkap.";

const ogDescription =
  "Bimbingan persiapan seleksi TNI, Polri, dan Sekolah Kedinasan. Pilih program satuan atau paket lengkap sesuai kebutuhanmu.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bimbel GASS — Persiapan Seleksi TNI, Polri & Kedinasan" },
      { name: "description", content: description },
      {
        name: "keywords",
        content: [
          "bimbel GASS",
          "bimbel TNI",
          "bimbel Polri",
          "persiapan seleksi TNI Polri",
          "bimbel UNHAN",
          "bimbel sekolah kedinasan",
          "bimbel SKD",
          "bimbel psikotes",
          "bintara tamtama",
          "tes potensi akademi",
        ].join(", "),
      },
      {
        property: "og:title",
        content: "Bimbel GASS — Persiapan Seleksi TNI, Polri & Kedinasan",
      },
      { property: "og:description", content: ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "id_ID" },
      { property: "og:site_name", content: "Bimbel GASS" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "twitter:title",
        content: "Bimbel GASS — Persiapan Seleksi TNI, Polri & Kedinasan",
      },
      {
        name: "twitter:description",
        content: ogDescription,
      },
    ],
  }),
  component: App,
});

function App() {
  return (
    <main>
      <Hero />
      <AlurPendaftaran />
      <Testimoni />
      <RegistrationForm />
      <InformasiLain />
    </main>
  );
}
