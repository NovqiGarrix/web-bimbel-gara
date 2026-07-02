import { useMemo, useState } from "react";
import {
	ALL_PROGRAMS,
	BANK,
	CONTACT,
	formatRupiah,
	INDIVIDUAL_PROGRAMS,
	PACKAGE_PROGRAMS,
	type Program,
	SELEKSI_OPTIONS,
} from "@/config";

const inputClass =
	"w-full px-4 py-3 rounded-xl border border-silver-300/20 bg-navy-950/60 text-silver-100 text-sm outline-none min-h-11 placeholder:text-silver-500 focus:border-gold-400 focus:bg-navy-900 transition-colors duration-150";

const labelClass = "block text-sm font-semibold text-silver-200 mb-1.5";

function buildWhatsappMessage(fields: {
	nama: string;
	tempatLahir: string;
	tanggalLahir: string;
	alamat: string;
	domisili: string;
	asalSekolah: string;
	seleksi: string;
	program: Program;
}) {
	const { program } = fields;
	const programLine = program.detail
		? `${program.label} (${program.detail}) — ${formatRupiah(program.price)}`
		: `${program.label} — ${formatRupiah(program.price)}`;

	return [
		"Halo Admin Bimbel Gara, saya ingin mendaftar.",
		"",
		`Nama: ${fields.nama}`,
		`Tempat, Tanggal Lahir: ${fields.tempatLahir}, ${fields.tanggalLahir}`,
		`Alamat: ${fields.alamat}`,
		`Domisili: ${fields.domisili}`,
		`Asal Sekolah: ${fields.asalSekolah}`,
		`Seleksi: ${fields.seleksi}`,
		`Bimbel untuk: ${programLine}`,
		"",
		"Saya akan melakukan pembayaran dan mengirim bukti transfer.",
	].join("\n");
}

export default function RegistrationForm() {
	const [nama, setNama] = useState("");
	const [tempatLahir, setTempatLahir] = useState("");
	const [tanggalLahir, setTanggalLahir] = useState("");
	const [alamat, setAlamat] = useState("");
	const [domisili, setDomisili] = useState("");
	const [asalSekolah, setAsalSekolah] = useState("");
	const [seleksi, setSeleksi] = useState("");
	const [programId, setProgramId] = useState("");

	const selectedProgram = useMemo(
		() => ALL_PROGRAMS.find((p) => p.id === programId),
		[programId],
	);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!selectedProgram) return;

		const message = buildWhatsappMessage({
			nama,
			tempatLahir,
			tanggalLahir,
			alamat,
			domisili,
			asalSekolah,
			seleksi,
			program: selectedProgram,
		});

		const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
		window.open(url, "_blank", "noopener,noreferrer");
	}

	return (
		<section id="pendaftaran" className="bg-navy-950 relative">
			{/* Top decorative line */}
			<div
				className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-400/30 to-transparent"
				aria-hidden="true"
			/>

			<div className="max-w-[1200px] mx-auto py-20 px-6">
				<div className="text-center mb-12">
					<span className="inline-flex items-center gap-2 px-4 py-1.5 text-[0.8125rem] font-semibold tracking-wide uppercase bg-white/8 text-silver-200 border border-gold-400/20 rounded-full mb-4">
						📝 Form Pendaftaran
					</span>
					<h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-white font-headline leading-tight mb-4 max-w-[640px] mx-auto">
						Daftar Program Bimbel Gara
					</h2>
					<p className="text-[clamp(1rem,2vw,1.125rem)] text-silver-400 leading-relaxed max-w-[640px] mx-auto">
						Isi data diri dan pilih program yang kamu inginkan. Setelah submit,
						kamu akan diarahkan ke WhatsApp admin dengan data yang sudah terisi.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
					{/* Form */}
					<form
						onSubmit={handleSubmit}
						className="bg-navy-900/50 rounded-2xl p-6 md:p-8 border border-silver-300/15 shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
							<div className="md:col-span-2">
								<label htmlFor="nama" className={labelClass}>
									Nama Lengkap
								</label>
								<input
									id="nama"
									type="text"
									required
									value={nama}
									onChange={(e) => setNama(e.target.value)}
									placeholder="Nama sesuai KTP"
									className={inputClass}
								/>
							</div>

							<div>
								<label htmlFor="tempatLahir" className={labelClass}>
									Tempat Lahir
								</label>
								<input
									id="tempatLahir"
									type="text"
									required
									value={tempatLahir}
									onChange={(e) => setTempatLahir(e.target.value)}
									placeholder="Kota kelahiran"
									className={inputClass}
								/>
							</div>

							<div>
								<label htmlFor="tanggalLahir" className={labelClass}>
									Tanggal Lahir
								</label>
								<input
									id="tanggalLahir"
									type="date"
									required
									value={tanggalLahir}
									onChange={(e) => setTanggalLahir(e.target.value)}
									className={inputClass}
								/>
							</div>

							<div className="md:col-span-2">
								<label htmlFor="alamat" className={labelClass}>
									Alamat
								</label>
								<input
									id="alamat"
									type="text"
									required
									value={alamat}
									onChange={(e) => setAlamat(e.target.value)}
									placeholder="Alamat sesuai KTP"
									className={inputClass}
								/>
							</div>

							<div>
								<label htmlFor="domisili" className={labelClass}>
									Domisili
								</label>
								<input
									id="domisili"
									type="text"
									required
									value={domisili}
									onChange={(e) => setDomisili(e.target.value)}
									placeholder="Tempat tinggal saat ini"
									className={inputClass}
								/>
							</div>

							<div>
								<label htmlFor="asalSekolah" className={labelClass}>
									Asal Sekolah
								</label>
								<input
									id="asalSekolah"
									type="text"
									required
									value={asalSekolah}
									onChange={(e) => setAsalSekolah(e.target.value)}
									placeholder="Nama sekolah/instansi"
									className={inputClass}
								/>
							</div>

							<div className="md:col-span-2">
								<label htmlFor="seleksi" className={labelClass}>
									Seleksi
								</label>
								<select
									id="seleksi"
									required
									value={seleksi}
									onChange={(e) => setSeleksi(e.target.value)}
									className={inputClass}
								>
									<option value="" disabled>
										Pilih jenis seleksi
									</option>
									{SELEKSI_OPTIONS.map((option) => (
										<option key={option} value={option}>
											{option}
										</option>
									))}
								</select>
							</div>

							<div className="md:col-span-2">
								<label htmlFor="program" className={labelClass}>
									Bimbel untuk
								</label>
								<select
									id="program"
									required
									value={programId}
									onChange={(e) => setProgramId(e.target.value)}
									className={inputClass}
								>
									<option value="" disabled>
										Pilih program atau paket
									</option>
									<optgroup label="Program Satuan">
										{INDIVIDUAL_PROGRAMS.map((program) => (
											<option key={program.id} value={program.id}>
												{program.label}
												{program.detail ? ` (${program.detail})` : ""} —{" "}
												{formatRupiah(program.price)}
											</option>
										))}
									</optgroup>
									<optgroup label="Paket">
										{PACKAGE_PROGRAMS.map((program) => (
											<option key={program.id} value={program.id}>
												{program.label} ({program.detail}) —{" "}
												{formatRupiah(program.price)}
											</option>
										))}
									</optgroup>
								</select>
							</div>
						</div>

						{/* Selected total */}
						<div className="mt-6 flex items-center justify-between gap-4 px-5 py-4 rounded-xl bg-gold-400/10 border border-gold-400/20">
							<span className="text-sm font-semibold text-silver-200">
								Total Biaya
							</span>
							<span className="text-xl font-extrabold text-gold-400">
								{selectedProgram ? formatRupiah(selectedProgram.price) : "—"}
							</span>
						</div>

						<button
							type="submit"
							className="btn-gold btn-cta mt-6 w-full inline-flex items-center justify-center gap-2 px-8 py-4 min-h-11 font-bold text-[1.0625rem] rounded-full transition-all duration-250 no-underline"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.16c-.24.68-1.42 1.31-1.96 1.36-.5.05-.96.23-3.24-.68-2.74-1.08-4.48-3.86-4.62-4.04-.13-.18-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.28.24-.27.53-.34.71-.34.18 0 .35 0 .5.01.16.01.38-.06.59.45.24.55.81 1.9.88 2.04.07.14.12.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.61-.14.24.09 1.57.74 1.84.87.27.14.45.2.51.32.07.11.07.64-.17 1.32z" />
							</svg>
							Kirim &amp; Lanjut ke WhatsApp
						</button>
						<p className="mt-3 text-xs text-silver-500 text-center">
							Data kamu akan dikirim ke admin melalui WhatsApp untuk diproses.
						</p>
					</form>

					{/* Payment sidebar */}
					<aside className="lg:sticky lg:top-24 bg-linear-to-br from-navy-900 to-navy-800 rounded-2xl p-6 md:p-8 text-white">
						<h3 className="text-lg font-bold mb-1">Setelah Mengisi Formulir</h3>
						<p className="text-sm text-silver-300 leading-relaxed mb-6">
							Lakukan pembayaran ke rekening resmi berikut, lalu hubungi admin
							untuk kirim bukti dan minta passcode.
						</p>

						<div className="rounded-xl bg-white/6 border border-gold-400/15 p-5 mb-4">
							<div className="text-xs uppercase tracking-wider text-silver-400 font-semibold mb-1">
								Bank {BANK.name}
							</div>
							<div className="text-2xl font-extrabold tracking-wide text-white mb-1">
								{BANK.accountNumber}
							</div>
							<div className="text-sm text-silver-300">
								a.n. {BANK.accountHolder}
							</div>
						</div>

						<a
							href={`https://wa.me/${CONTACT.whatsapp}`}
							target="_blank"
							rel="noopener noreferrer"
							className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-11 font-bold text-sm rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors duration-150 no-underline"
						>
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.16c-.24.68-1.42 1.31-1.96 1.36-.5.05-.96.23-3.24-.68-2.74-1.08-4.48-3.86-4.62-4.04-.13-.18-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.28.24-.27.53-.34.71-.34.18 0 .35 0 .5.01.16.01.38-.06.59.45.24.55.81 1.9.88 2.04.07.14.12.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.61-.14.24.09 1.57.74 1.84.87.27.14.45.2.51.32.07.11.07.64-.17 1.32z" />
							</svg>
							Hubungi Admin
						</a>
					</aside>
				</div>
			</div>
		</section>
	);
}
