// Placeholder testimonials — only the person's photo and name are shown for now.
// Real testimonial content will be filled in later.
const placeholders = [
	{ id: "alumni-1", name: "Nama Alumni" },
	{ id: "alumni-2", name: "Nama Alumni" },
	{ id: "alumni-3", name: "Nama Alumni" },
	{ id: "alumni-4", name: "Nama Alumni" },
];

function AvatarPlaceholder() {
	return (
		<div className="w-24 h-24 rounded-full bg-primary-100 border border-primary-200 flex items-center justify-center text-primary-300">
			<svg
				width="44"
				height="44"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				aria-hidden="true"
			>
				<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
				<circle cx="12" cy="7" r="4" />
			</svg>
		</div>
	);
}

export default function Testimoni() {
	return (
		<section id="testimoni" className="bg-neutral-50 relative">
			<div className="max-w-[1200px] mx-auto py-20 px-6 text-center">
				<span className="inline-flex items-center gap-2 px-4 py-1.5 text-[0.8125rem] font-semibold tracking-wide uppercase text-primary-600 bg-primary-50 border border-primary-200 rounded-full mb-4">
					💬 Testimoni
				</span>
				<h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-primary-900 leading-tight mb-4 max-w-[650px] mx-auto">
					Mereka yang Sudah Bergabung
				</h2>
				<p className="text-[clamp(1rem,2vw,1.125rem)] text-neutral-500 leading-relaxed max-w-[640px] mx-auto mb-12">
					Cerita dan pengalaman para alumni Bimbel Gara akan segera hadir di
					sini.
				</p>

				<div className="stagger-children grid grid-cols-2 lg:grid-cols-4 gap-5">
					{placeholders.map((person) => (
						<div
							key={person.id}
							className="bg-white rounded-2xl p-7 flex flex-col items-center gap-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-neutral-100 transition-all duration-250 hover:translate-y-[-4px] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
						>
							<AvatarPlaceholder />
							<div className="font-bold text-[0.9375rem] text-primary-900">
								{person.name}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
