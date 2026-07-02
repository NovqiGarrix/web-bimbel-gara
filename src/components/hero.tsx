export default function Hero() {
	return (
		<section
			id="hero"
			className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-[var(--header-height)] bg-linear-to-br from-primary-950 via-primary-800 via-70% to-[#1a4a7a]"
		>
			{/* Decorative floating shapes */}
			<div
				className="absolute inset-0 overflow-hidden pointer-events-none"
				aria-hidden="true"
			>
				<div className="animate-float absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15),transparent_70%)]" />
				<div className="animate-float-delayed absolute bottom-[15%] left-[5%] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.1),transparent_70%)]" />
				<div className="animate-pulse-soft absolute top-1/2 left-[60%] w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-[40%_60%_55%_45%/60%_40%_60%_40%] bg-[radial-gradient(circle,rgba(249,115,22,0.08),transparent_60%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />
			</div>

			{/* Content */}
			<div className="animate-slide-up relative z-10 text-center max-w-[820px] py-16 px-6">
				{/* Badge */}
				<div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/8 border border-white/12 text-primary-200 text-sm font-semibold mb-8 backdrop-blur-lg">
					<span className="w-2 h-2 rounded-full bg-secondary-400 inline-block animate-pulse-soft" />
					Bimbingan Persiapan Seleksi TNI, Polri &amp; Sekolah Kedinasan
				</div>

				{/* Headline */}
				<h1 className="text-[clamp(2.25rem,5.5vw,3.75rem)] font-extrabold leading-[1.1] text-white mb-6 tracking-tight">
					Wujudkan Lolos Seleksi{" "}
					<span className="bg-linear-to-br from-accent-coral to-accent-400 bg-clip-text text-transparent">
						Bersama Bimbel Gara
					</span>
				</h1>

				{/* Sub-headline */}
				<p className="text-[clamp(1.0625rem,2.2vw,1.25rem)] text-primary-200 leading-relaxed max-w-[640px] mx-auto mb-10">
					Persiapan matang untuk UNHAN, Akademik TNI-Polri, Bintara-Tamtama,
					hingga Sekolah Kedinasan. Pilih program satuan atau paket lengkap
					sesuai kebutuhanmu.
				</p>

				{/* CTA Group */}
				<div className="flex flex-col items-center gap-4">
					<a
						href="#pendaftaran"
						className="btn-cta relative overflow-hidden inline-flex items-center justify-center gap-2 px-10 py-4.5 min-h-11 font-bold text-[1.1875rem] rounded-full bg-linear-to-br from-accent-500 to-accent-coral text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)] hover:translate-y-[-2px] hover:shadow-[0_6px_28px_rgba(249,115,22,0.45)] active:translate-y-0 transition-all duration-250 no-underline"
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
						Daftar Sekarang
					</a>

					{/* Friction-reducing proximity copy */}
					<div className="flex flex-wrap justify-center gap-5 text-[0.8125rem] text-primary-300">
						<span className="flex items-center gap-1.5">
							<svg
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								aria-hidden="true"
							>
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
								<polyline points="22 4 12 14.01 9 11.01" />
							</svg>
							Program satuan &amp; paket lengkap
						</span>
						<span className="flex items-center gap-1.5">
							<svg
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								aria-hidden="true"
							>
								<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
							</svg>
							Pendampingan sampai seleksi
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
