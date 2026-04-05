"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMini() {
	return (
		<section className="relative  bg-gradient-to-r from-[#000040] to-[#000020] py-20 overflow-hidden">
			{/* ✨ Background Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#E0A000]/10 blur-[120px] rounded-full" />
				<div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-[#E0A000]/10 blur-[100px] rounded-full" />
			</div>

			<div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
				{/* Left Content */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7 }}>
					<h2 className="text-3xl md:text-4xl font-bold text-white">
						About{" "}
						<span className="bg-gradient-to-r from-[#E0A000] to-[#F2C94C] bg-clip-text text-transparent">
							BRK Traders
						</span>
					</h2>

					<p className="mt-6 text-gray-300 leading-relaxed">
						BRK Traders is a Hyderabad-based partnership firm delivering{" "}
						<span className="font-semibold text-white">
							strategic trading and brokerage solutions
						</span>{" "}
						across diverse industries.
					</p>

					<p className="mt-4 text-gray-300 leading-relaxed">
						We connect buyers and sellers through{" "}
						<span className="font-semibold text-white">
							efficient sourcing, procurement, and facilitation
						</span>
						, ensuring every transaction is smooth and transparent.
					</p>

					<p className="mt-4 text-gray-300 leading-relaxed">
						Our approach is built on{" "}
						<span className="font-semibold text-white">
							trust, market expertise, and long-term partnerships
						</span>
						.
					</p>

					{/* Highlights */}
					<div className="mt-6 grid grid-cols-2 gap-4 text-sm">
						{[
							"Strategic Trade Facilitation",
							"Strong Industry Network",
							"End-to-End Support",
							"Transparent Dealings",
						].map((item, i) => (
							<div key={i} className="flex items-center gap-2">
								<span className="text-[#E0A000]">✔</span>
								<span className="text-gray-300">{item}</span>
							</div>
						))}
					</div>
				</motion.div>

				{/* Right Visual */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7 }}
					className="relative">
					{/* Image Card */}
					<div className="rounded-2xl overflow-hidden border border-[#E0A000]/20 shadow-[0_0_40px_rgba(224,160,0,0.1)]">
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto,f_auto/v1775212804/imports-and-exports_sp1v56.jpg"
							alt="About BRK Traders"
							width={800}
							height={600}
							className="w-full h-full object-cover"
						/>
					</div>

					{/* 🔥 Floating Premium Card */}
					<div className="absolute -bottom-6 -left-6 bg-[#0A1A24]/90 backdrop-blur-md border border-[#E0A000]/20 shadow-lg rounded-xl p-5">
						<p className="text-sm text-gray-400">Trusted by</p>
						<p className="text-xl font-bold text-white">Multiple Industries</p>

						{/* Glow line */}
						<div className="mt-2 w-12 h-[2px] bg-[#E0A000] shadow-[0_0_10px_#E0A000]" />
					</div>
				</motion.div>
			</div>
		</section>
	);
}
