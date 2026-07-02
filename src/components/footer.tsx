import { SECTION_NAV, SOCIAL } from "@/config";

export default function Footer() {
	return (
		<footer className="bg-primary-950 text-primary-300">
			<div className="max-w-[1200px] mx-auto pt-14 pb-6 px-6">
				{/* Top grid */}
				<div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 mb-12">
					{/* Brand */}
					<div>
						<div className="flex items-center gap-2.5 mb-5">
							<div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-extrabold text-lg">
								G
							</div>
							<div>
								<div className="font-extrabold text-lg text-white">
									Bimbel Gara
								</div>
								<div className="text-[0.6875rem] text-primary-400">
									Persiapan Seleksi TNI, Polri &amp; Kedinasan
								</div>
							</div>
						</div>
						<p className="text-sm leading-relaxed text-primary-400 max-w-[320px]">
							Bimbingan persiapan seleksi UNHAN, Akademik TNI-Polri,
							Bintara-Tamtama, dan Sekolah Kedinasan dengan program satuan
							maupun paket lengkap.
						</p>
					</div>

					{/* Section navigation */}
					<div>
						<h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
							Navigasi
						</h3>
						<ul className="list-none p-0 m-0 flex flex-col gap-2.5">
							{SECTION_NAV.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="text-primary-400 no-underline text-sm hover:text-white transition-colors duration-150"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Social media */}
					<div>
						<h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
							Ikuti Kami
						</h3>
						<div className="flex items-center gap-3">
							<a
								href={SOCIAL.tiktok}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="TikTok Bimbel Gara"
								className="w-11 h-11 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-primary-300 hover:text-white hover:bg-white/12 transition-colors duration-150"
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
								</svg>
								<span className="sr-only">TikTok</span>
							</a>
							<a
								href={SOCIAL.instagram}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram Bimbel Gara"
								className="w-11 h-11 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-primary-300 hover:text-white hover:bg-white/12 transition-colors duration-150"
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
									<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
								</svg>
								<span className="sr-only">Instagram</span>
							</a>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div
					className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-6"
					aria-hidden="true"
				/>

				{/* Bottom */}
				<div className="text-[0.8125rem] text-primary-500">
					<p>
						© {new Date().getFullYear()} Bimbel Gara. Seluruh hak cipta
						dilindungi.
					</p>
				</div>
			</div>
		</footer>
	);
}
