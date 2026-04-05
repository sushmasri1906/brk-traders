"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const STATS = [
	{
		value: 50,
		suffix: "+",
		label: "Successful Business Transactions",
	},
	{
		value: 25,
		suffix: "+",
		label: "Trusted Business Partners",
	},
	{
		value: 10,
		suffix: "+",
		label: "Industries Served",
	},
	{
		value: 100,
		suffix: "%",
		label: "Commitment to Client Satisfaction",
	},
	{
		value: 10,
		prefix: "₹",
		suffix: "Cr+",
		label: "Trade Value Facilitated",
	},
];

export default function StatsSection() {
	return (
		<section className="bg-[#0F172A] py-24">
			<div className="max-w-7xl mx-auto px-6 text-center">
				{/* Title */}
				<h2 className="text-3xl md:text-4xl font-bold text-white">
					Our Impact in <span className="text-[#D4AF37]">Numbers</span>
				</h2>

				<p className="mt-4 text-gray-400">
					Delivering measurable results through reliable partnerships and
					execution.
				</p>

				{/* Stats Grid */}
				<div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
					{STATS.map((stat, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
							className="group relative">
							{/* Glow */}
							<div className="absolute inset-0 bg-[#D4AF37]/10 blur-xl opacity-0 group-hover:opacity-100 transition" />

							{/* Number */}
							<h3 className="text-4xl md:text-5xl font-bold text-[#D4AF37] relative">
								{stat.prefix}
								<CountUp end={stat.value} duration={2} />
								{stat.suffix}
							</h3>

							{/* Label */}
							<p className="mt-3 text-gray-400 text-sm">{stat.label}</p>

							{/* Underline */}
							<div className="mt-4 w-10 h-[2px] bg-[#D4AF37] mx-auto group-hover:w-16 transition-all duration-300" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
