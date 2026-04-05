"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FooterInfoPremium() {
	return (
		<section className="relative  bg-gradient-to-r from-[#000040] to-[#000020] py-16 overflow-hidden">
			{/* ✨ Background Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-10 w-[250px] h-[250px] bg-[#E0A000]/10 blur-[120px] rounded-full" />
				<div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-[#E0A000]/10 blur-[120px] rounded-full" />
			</div>

			<div className="relative max-w-5xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="relative rounded-2xl p-[1px]">
					{/* ✨ Gold Glow Border */}
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E0A000]/40 via-transparent to-[#E0A000]/40 blur-md opacity-70" />

					{/* Card */}
					<div className="relative  bg-gradient-to-b from-[#000040] to-[#000020] backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-8 md:p-10">
						{/* Top Row */}
						<div className="flex flex-col md:flex-row items-start md:items-center gap-6">
							{/* Logo Badge */}
							<div className="flex-shrink-0">
								<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#08131B] text-[#E0A000] text-xl font-bold shadow-[0_0_20px_rgba(224,160,0,0.3)]">
									BRK
								</div>
							</div>

							{/* Content */}
							<div>
								<h3 className="text-lg md:text-xl font-semibold text-white">
									About{" "}
									<span className="bg-gradient-to-r from-[#E0A000] to-[#F2C94C] bg-clip-text text-transparent">
										BRK Traders
									</span>
								</h3>

								<p className="mt-2 text-gray-400 text-sm md:text-base leading-relaxed">
									<span className="font-semibold text-white">BRK Traders</span>{" "}
									is a partnership firm established on{" "}
									<span className="font-medium text-white">
										12th March 2026
									</span>{" "}
									under the{" "}
									<span className="font-medium text-white">
										Indian Partnership Act, 1932
									</span>
									.
								</p>

								<p className="mt-2 text-gray-400 text-sm md:text-base leading-relaxed">
									The firm operates as a{" "}
									<span className="font-semibold text-[#E0A000]">
										trading, brokerage, and facilitation entity
									</span>{" "}
									across multiple sectors including{" "}
									<span className="font-medium text-white">
										import and export activities
									</span>
									.
								</p>
							</div>
						</div>

						{/* Bottom Row */}
						<div className="mt-6 flex items-center justify-between flex-wrap gap-4">
							{/* Left Text */}
							<div className="text-xs text-gray-500">
								Registered & Operated in India
							</div>

							{/* Right Actions */}
							<div className="flex items-center gap-4">
								{/* Accent Line */}
								<div className="flex items-center gap-2">
									<div className="w-8 h-[2px] bg-[#E0A000] shadow-[0_0_10px_#E0A000]" />
									<div className="w-3 h-3 rounded-full bg-[#E0A000] shadow-[0_0_10px_#E0A000]" />
								</div>

								{/* CTA Button */}
								<Link href="/contact">
									<button className="relative px-5 py-2.5 rounded-lg bg-[#E0A000] text-black text-sm font-semibold overflow-hidden hover:scale-105 transition">
										<span className="relative z-10">Contact Us</span>
										<div className="absolute inset-0 bg-[#E0A000] blur-md opacity-40" />
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
