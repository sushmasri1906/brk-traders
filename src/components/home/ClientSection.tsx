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
		<section className="bg-white py-24">
			<div className="max-w-7xl mx-auto px-6 text-center">
				{/* Title */}
				<h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
					Trusted by{" "}
					<span className="text-[#D4AF37]">Businesses Across Industries</span>
				</h2>

				{/* Subtext */}
				<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
					We collaborate with companies of all sizes, helping them streamline
					sourcing, trading, and business facilitation with efficiency and
					reliability.
				</p>

				{/* Logos / Placeholder Grid */}
				<div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
					{CLIENT_TYPES.map((item, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
							className="group flex items-center justify-center">
							<div className="px-6 py-4 rounded-lg border border-gray-200 bg-[#F8FAFC] text-sm font-medium text-[#0F172A] opacity-80 group-hover:opacity-100 group-hover:border-[#D4AF37]/40 group-hover:shadow-md transition">
								{item}
							</div>
						</motion.div>
					))}
				</div>

				{/* Bottom Line */}
				<p className="mt-12 text-gray-500 text-sm">
					From small enterprises to growing businesses, we build{" "}
					<span className="text-[#D4AF37] font-medium">
						long-term partnerships
					</span>
					.
				</p>
			</div>
		</section>
	);
}
