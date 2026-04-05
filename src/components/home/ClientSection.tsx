"use client";

import { motion } from "framer-motion";

const CLIENT_TYPES = [
	"Manufacturing Firms",
	"Retail Businesses",
	"Construction Companies",
	"Import/Export Enterprises",
	"Wholesale Traders",
];

export default function ClientsSection() {
	return (
		<section className="relative  bg-gradient-to-r from-[#000040] to-[#000020] py-24 overflow-hidden">
			{/* ✨ Background Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-10 w-[250px] h-[250px] bg-[#E0A000]/10 blur-[120px] rounded-full" />
				<div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-[#E0A000]/10 blur-[120px] rounded-full" />
			</div>

			<div className="relative max-w-7xl mx-auto px-6 text-center">
				{/* Title */}
				<h2 className="text-3xl md:text-4xl font-bold text-white">
					Trusted by{" "}
					<span className="bg-gradient-to-r from-[#E0A000] to-[#F2C94C] bg-clip-text text-transparent">
						Businesses Across Industries
					</span>
				</h2>

				{/* Subtext */}
				<p className="mt-4 text-gray-400 max-w-2xl mx-auto">
					We collaborate with companies of all sizes, helping them streamline
					sourcing, trading, and business facilitation with efficiency and
					reliability.
				</p>

				{/* Client Types Grid */}
				<div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
					{CLIENT_TYPES.map((item, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
							className="group relative flex items-center justify-center">
							{/* Card */}
							<div className="relative px-6 py-4 rounded-lg border border-white/10 bg-[#0A1A24]/40 backdrop-blur-md text-sm font-medium text-gray-300 transition hover:border-[#E0A000]/40 hover:text-white">
								{/* ✨ Glow on Hover */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
									<div className="absolute inset-0 bg-[#E0A000]/10 blur-[60px] rounded-lg" />
								</div>

								<span className="relative z-10">{item}</span>
							</div>
						</motion.div>
					))}
				</div>

				{/* Bottom Line */}
				<p className="mt-12 text-gray-500 text-sm">
					From small enterprises to growing businesses, we build{" "}
					<span className="text-[#E0A000] font-medium">
						long-term partnerships
					</span>
					.
				</p>
			</div>
		</section>
	);
}
