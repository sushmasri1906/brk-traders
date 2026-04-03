"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMini() {
	return (
		<section className="bg-[#F8FAFC] py-20">
			<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
				{/* Left Content */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7 }}>
					<h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
						About <span className="text-[#D4AF37]">BRK Traders</span>
					</h2>

					<p className="mt-6 text-gray-600 leading-relaxed">
						BRK Traders is a Hyderabad-based partnership firm delivering{" "}
						<span className="font-semibold text-[#0F172A]">
							strategic trading and brokerage solutions
						</span>{" "}
						across diverse industries.
					</p>

					<p className="mt-4 text-gray-600 leading-relaxed">
						We connect buyers and sellers through{" "}
						<span className="font-semibold text-[#0F172A]">
							efficient sourcing, procurement, and facilitation
						</span>
						, ensuring every transaction is smooth and transparent.
					</p>

					<p className="mt-4 text-gray-600 leading-relaxed">
						Our approach is built on{" "}
						<span className="font-semibold text-[#0F172A]">
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
								<span className="text-[#D4AF37]">✔</span>
								<span className="text-[#0F172A]">{item}</span>
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
					<div className="rounded-2xl overflow-hidden shadow-lg">
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto,f_auto/v1775212804/imports-and-exports_sp1v56.jpg"
							alt="About BRK Traders"
							width={800}
							height={600}
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Floating Card */}
					<div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-4">
						<p className="text-sm text-gray-500">Trusted by</p>
						<p className="text-xl font-bold text-[#0F172A]">
							Multiple Industries
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
