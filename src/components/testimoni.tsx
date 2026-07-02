const testimonies = [
  {
    id: "alumni-1",
    name: "Maulana Syarif Hidayat",
    image: "/testimony/testimony-1.webp",
  },
  {
    id: "alumni-2",
    name: "Grace R. N. Gultom",
    image: "/testimony/testimony-2.webp",
  },
  {
    id: "alumni-3",
    name: "Rania Gendis Paramesti",
    image: "/testimony/testimony-3.webp",
  },
];

export default function Testimoni() {
  return (
    <section id="testimoni" className="bg-navy-900 relative">
      <div className="max-w-[1200px] mx-auto py-20 px-6 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[0.8125rem] font-semibold tracking-wide uppercase text-silver-200 bg-white/8 border border-gold-400/20 rounded-full mb-4">
          💬 Testimoni
        </span>
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-white font-headline leading-tight mb-4 max-w-[650px] mx-auto">
          Mereka yang Sudah Bergabung
        </h2>
        <p className="text-[clamp(1rem,2vw,1.125rem)] text-silver-400 leading-relaxed max-w-[640px] mx-auto mb-12">
          Cerita dan pengalaman para alumni Bimbel Gara akan segera hadir di
          sini.
        </p>

        <div className="stagger-children grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonies.map((person) => (
            <div
              key={person.id}
              className="card-chrome rounded-2xl overflow-hidden flex flex-col transition-all duration-250 hover:translate-y-[-4px]"
            >
              {/* Portrait photo */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <div className="px-5 py-4">
                <div className="font-bold text-[0.9375rem] text-silver-200">
                  {person.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
