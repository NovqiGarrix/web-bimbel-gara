import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SECTION_NAV } from "@/config";

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	// The top bar (excluding the mobile drawer) is what visually overlaps the
	// page. Publish its measured height as --header-height so sections like the
	// hero can offset by exactly the navbar height.
	const topBarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = topBarRef.current;
		if (!el) return;

		const updateHeight = () => {
			document.documentElement.style.setProperty(
				"--header-height",
				`${el.offsetHeight}px`,
			);
		};

		updateHeight();
		const observer = new ResizeObserver(updateHeight);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-primary-950/80 backdrop-blur-xl border-b border-white/10 transition-all duration-250">
			<div
				ref={topBarRef}
				className="max-w-300 mx-auto px-6 py-3 flex items-center justify-between"
			>
				{/* Logo */}
				<Link
					to="/"
					className="flex items-center gap-2.5 no-underline shrink-0"
					aria-label="Bimbel Gara - Beranda"
				>
					<div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-extrabold text-lg shadow-[0_0_40px_rgba(59,130,246,0.15)]">
						G
					</div>
					<div>
						<div className="font-extrabold text-lg text-white leading-tight">
							Bimbel Gara
						</div>
						<div className="text-[0.6875rem] text-primary-300 font-medium tracking-wide">
							Persiapan Seleksi TNI, Polri &amp; Kedinasan
						</div>
					</div>
				</Link>

				{/* Desktop Navigation */}
				<nav
					className="hidden md:flex items-center gap-1"
					aria-label="Navigasi utama"
				>
					{SECTION_NAV.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 no-underline text-primary-300 hover:text-white hover:bg-white/8"
						>
							{link.label}
						</a>
					))}
				</nav>

				{/* CTA + Mobile Toggle */}
				<div className="flex items-center gap-3">
					<a
						href="#pendaftaran"
						className="relative overflow-hidden hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-11 font-bold text-sm rounded-full bg-linear-to-br from-accent-500 to-accent-coral text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(249,115,22,0.45)] active:translate-y-0 transition-all duration-250 no-underline btn-cta"
					>
						Daftar Sekarang
					</a>

					{/* Mobile hamburger */}
					<button
						type="button"
						onClick={() => setMobileOpen(!mobileOpen)}
						className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-primary-300 hover:text-white hover:bg-white/8 transition-colors duration-150"
						aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
						aria-expanded={mobileOpen}
					>
						<svg
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							{mobileOpen ? (
								<path d="M18 6L6 18M6 6l12 12" />
							) : (
								<path d="M3 12h18M3 6h18M3 18h18" />
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Navigation Drawer */}
			{mobileOpen && (
				<nav
					className="md:hidden border-t border-white/8 bg-primary-950/95 backdrop-blur-xl"
					aria-label="Navigasi mobile"
				>
					<div className="max-w-300 mx-auto px-6 py-4 flex flex-col gap-1">
						{SECTION_NAV.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setMobileOpen(false)}
								className="px-4 py-3 rounded-lg text-sm font-semibold transition-colors duration-150 no-underline text-primary-300 hover:text-white hover:bg-white/8"
							>
								{link.label}
							</a>
						))}
						{/* biome-ignore lint/a11y/useValidAnchor: anchor navigates to the #pendaftaran section; onClick only closes the mobile drawer */}
						<a
							href="#pendaftaran"
							onClick={() => setMobileOpen(false)}
							className="sm:hidden mt-2 relative overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-3 min-h-11 font-bold text-sm rounded-full bg-linear-to-br from-accent-500 to-accent-coral text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)] transition-all duration-250 no-underline btn-cta"
						>
							Daftar Sekarang
						</a>
					</div>
				</nav>
			)}
		</header>
	);
}
