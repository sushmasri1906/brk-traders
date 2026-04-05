"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const STATS = [
	{ value: 50, suffix: "+", label: "Successful Business Transactions" },
	{ value: 25, suffix: "+", label: "Trusted Business Partners" },
	{ value: 10, suffix: "+", label: "Industries Served" },
	{ value: 100, suffix: "%", label: "Commitment to Client Satisfaction" },
	{ value: 10, prefix: "₹", suffix: "Cr+", label: "Trade Value Facilitated" },
];

export default function StatsSection() {
	return (
		<section className="relative  bg-gradient-to-r from-[#000040] to-[#000020] py-24 overflow-hidden">
			{/* ✨ Background Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-20 w-[300px] h-[300px] bg-[#E0A000]/10 blur-[120px] rounded-full" />
				<div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-[#E0A000]/10 blur-[120px] rounded-full" />
			</div>

			<div className="relative max-w-7xl mx-auto px-6 text-center">
				{/* Title */}
				<h2 className="text-3xl md:text-4xl font-bold text-white">
					Our Impact in{" "}
					<span className="bg-gradient-to-r from-[#E0A000] to-[#F2C94C] bg-clip-text text-transparent">
						Numbers
					</span>
				</h2>

				<p className="mt-4 text-gray-400 max-w-2xl mx-auto">
					Delivering measurable results through reliable partnerships and
					execution.
				</p>

				{/* Stats Grid */}
				<div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{STATS.map((stat, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
							className="group relative p-6 rounded-xl border border-white/10 bg-[#0A1A24]/40 backdrop-blur-md hover:border-[#E0A000]/30 transition">
							{/* ✨ Hover Glow */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
								<div className="absolute inset-0 bg-[#E0A000]/10 blur-[80px] rounded-xl" />
							</div>

							{/* Number */}
							<h3 className="text-4xl md:text-5xl font-bold text-[#E0A000] relative">
								{stat.prefix}
								<CountUp end={stat.value} duration={2} />
								{stat.suffix}
							</h3>

							{/* Label */}
							<p className="mt-3 text-gray-400 text-sm leading-relaxed">
								{stat.label}
							</p>

							{/* Underline Glow */}
							<div className="mt-4 w-10 h-[2px] bg-[#E0A000] mx-auto group-hover:w-16 transition-all duration-300 shadow-[0_0_10px_#E0A000]" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
