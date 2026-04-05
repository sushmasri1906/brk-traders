"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FooterInfoPremium() {
	return (
		<section className="bg-[#F8FAFC] py-16">
			<div className="max-w-5xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="relative rounded-2xl p-[1px]">
					{/* Glow Border */}
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D4AF37]/40 via-transparent to-[#D4AF37]/40 blur-md opacity-60" />

					{/* Card */}
					<div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10">
						{/* Top Row */}
						<div className="flex flex-col md:flex-row items-start md:items-center gap-6">
							{/* Badge */}
							<div className="flex-shrink-0">
								<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#0F172A] text-[#D4AF37] text-xl font-bold shadow-md">
									BRK
								</div>
							</div>

							{/* Content */}
							<div>
								<h3 className="text-lg md:text-xl font-semibold text-[#0F172A]">
									About <span className="text-[#D4AF37]">BRK Traders</span>
								</h3>

								<p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">
									<span className="font-semibold text-[#0F172A]">
										BRK Traders
									</span>{" "}
									is a partnership firm established on{" "}
									<span className="font-medium">12th March 2026</span> under the{" "}
									<span className="font-medium">
										Indian Partnership Act, 1932
									</span>
									.
								</p>

								<p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">
									The firm operates as a{" "}
									<span className="font-semibold text-[#D4AF37]">
										trading, brokerage, and facilitation entity
									</span>{" "}
									across multiple sectors including{" "}
									<span className="font-medium">
										import and export activities
									</span>
									.
								</p>
							</div>
						</div>

						{/* Bottom Row */}
						<div className="mt-6 flex items-center justify-between flex-wrap gap-4">
							{/* Left Text */}
							<div className="text-xs text-gray-400">
								Registered & Operated in India
							</div>

							{/* Right Actions */}
							<div className="flex items-center gap-4">
								{/* Accent */}
								<div className="flex items-center gap-2">
									<div className="w-8 h-[2px] bg-[#D4AF37]" />
									<div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
								</div>

								{/* CTA Button */}
								<Link href="/contact">
									<button className="px-5 py-2.5 rounded-lg bg-[#0F172A] text-white text-sm font-semibold hover:bg-[#1F3A5F] transition hover:scale-105">
										Contact Us
									</button>
								</Link>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
