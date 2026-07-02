const steps = [
  {
    number: "01",
    title: "Isi Formulir Pendaftaran",
    description:
      "Lengkapi data diri dan pilih program bimbel atau paket yang kamu inginkan pada formulir pendaftaran.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Lakukan Pembayaran",
    description:
      "Transfer biaya program yang dipilih ke rekening resmi Bimbel GASS sesuai nominal pada formulir.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Hubungi Admin",
    description:
      "Kirim bukti pembayaran ke admin melalui WhatsApp untuk mendapatkan passcode dan mulai bimbelmu.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function AlurPendaftaran() {
  return (
    <section
      id="alur"
      className="bg-linear-to-br from-navy-950 to-navy-800 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto py-20 px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[0.8125rem] font-semibold tracking-wide uppercase bg-white/8 text-silver-200 border border-gold-400/20 rounded-full mb-4">
            ⚡ Alur Pendaftaran
          </span>
          <h2 className="font-headline text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-white leading-tight mb-3 max-w-[600px] mx-auto">
            Tiga Langkah Mudah untuk Mulai
          </h2>
          <p className="text-[clamp(1rem,2vw,1.125rem)] text-silver-300 leading-relaxed max-w-[560px] mx-auto">
            Proses pendaftaran yang simpel dan cepat, dari mengisi formulir
            hingga mendapatkan passcode bimbel.
          </p>
        </div>

        {/* Steps */}
        <div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="card-chrome rounded-2xl p-8 relative overflow-hidden transition-all duration-250 hover:translate-y-[-4px]"
            >
              {/* Step number background */}
              <div
                className="absolute -top-2.5 -right-1.5 text-[5rem] font-extrabold text-gold-400/5 leading-none pointer-events-none"
                aria-hidden="true"
              >
                {step.number}
              </div>

              <div className="w-12 h-12 rounded-lg bg-linear-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white mb-5">
                {step.icon}
              </div>

              <div className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-2">
                Langkah {step.number}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>

              <p className="text-[0.9375rem] text-silver-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
