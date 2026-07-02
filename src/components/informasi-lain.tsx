import { BANK, CONTACT } from "@/config";

export default function InformasiLain() {
	return (
		<section id="informasi" className="bg-navy-950 relative">
			<div className="max-w-[1000px] mx-auto py-20 px-6 text-center">
				<span className="inline-flex items-center gap-2 px-4 py-1.5 text-[0.8125rem] font-semibold tracking-wide uppercase bg-white/8 text-silver-200 border border-gold-400/20 rounded-full mb-4">
					ℹ️ Informasi Lain
				</span>
				<h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-white font-headline leading-tight mb-4 max-w-[640px] mx-auto">
					Rekening &amp; Kontak Resmi
				</h2>
				<p className="text-[clamp(1rem,2vw,1.125rem)] text-silver-400 leading-relaxed max-w-[600px] mx-auto mb-12">
					Gunakan rekening resmi di bawah untuk pembayaran, lalu konfirmasi ke
					admin melalui WhatsApp.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
					{/* Bank */}
					<div className="card-chrome rounded-2xl p-8 transition-all duration-250 flex flex-col gap-4">
						<div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center text-gold-400">
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
								<line x1="3" y1="22" x2="21" y2="22" />
								<line x1="6" y1="18" x2="6" y2="11" />
								<line x1="10" y1="18" x2="10" y2="11" />
								<line x1="14" y1="18" x2="14" y2="11" />
								<line x1="18" y1="18" x2="18" y2="11" />
								<polygon points="12 2 20 7 4 7" />
							</svg>
						</div>
						<div>
							<div className="text-sm font-semibold text-silver-400 mb-1">
								Bank {BANK.name}
							</div>
							<div className="text-2xl font-extrabold tracking-wide text-white mb-1 [overflow-wrap:anywhere]">
								{BANK.accountNumber}
							</div>
							<div className="text-sm text-silver-400">
								a.n. {BANK.accountHolder}
							</div>
						</div>
					</div>

					{/* WhatsApp */}
					<div className="card-chrome rounded-2xl p-8 transition-all duration-250 flex flex-col gap-4">
						<div className="w-12 h-12 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.16c-.24.68-1.42 1.31-1.96 1.36-.5.05-.96.23-3.24-.68-2.74-1.08-4.48-3.86-4.62-4.04-.13-.18-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.28.24-.27.53-.34.71-.34.18 0 .35 0 .5.01.16.01.38-.06.59.45.24.55.81 1.9.88 2.04.07.14.12.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.61-.14.24.09 1.57.74 1.84.87.27.14.45.2.51.32.07.11.07.64-.17 1.32z" />
							</svg>
						</div>
						<div>
							<div className="text-sm font-semibold text-silver-400 mb-1">
								WhatsApp Admin
							</div>
							<div className="text-2xl font-extrabold tracking-wide text-white mb-1">
								{CONTACT.whatsappDisplay}
							</div>
							<div className="text-sm text-silver-400">
								Kirim bukti pembayaran &amp; minta passcode
							</div>
						</div>
						<a
							href={`https://wa.me/${CONTACT.whatsapp}`}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 min-h-11 font-bold text-sm rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors duration-150 no-underline"
						>
							Chat via WhatsApp
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
