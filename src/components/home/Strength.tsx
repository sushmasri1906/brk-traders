"use client";

import { motion } from "framer-motion";
import { FiUsers, FiCheckCircle, FiShield, FiLayers } from "react-icons/fi";

const STRENGTHS = [
	{
		title: "Strong Business Network",
		desc: "Established connections across multiple industries and markets.",
		icon: FiUsers,
	},
	{
		title: "Reliable Execution",
		desc: "Ensuring timely and smooth completion of every transaction.",
		icon: FiCheckCircle,
	},
	{
		title: "Transparent Operations",
		desc: "Clear communication and ethical business practices.",
		icon: FiShield,
	},
	{
		title: "Multi-Industry Expertise",
		desc: "Experience working across diverse sectors and business models.",
		icon: FiLayers,
	},
];

export default function Strength() {
	return (
		<section className="bg-[#F8FAFC] py-24">
			<div className="max-w-6xl mx-auto px-6 text-center">
				{/* Title */}
				<h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
					Our <span className="text-[#D4AF37]">Strengths</span>
				</h2>

				<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
					Built on trust, experience, and strong industry connections.
				</p>

				{/* Grid */}
				<div className="mt-14 grid md:grid-cols-2 gap-8">
					{STRENGTHS.map((item, i) => {
						const Icon = item.icon;

						return (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
								className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-left">
								{/* Icon */}
								<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#0F172A] text-[#D4AF37] mb-5 group-hover:scale-110 transition">
									<Icon size={22} />
								</div>

								{/* Title */}
								<h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#D4AF37] transition">
									{item.title}
								</h3>

								{/* Description */}
								<p className="mt-3 text-gray-600 text-sm leading-relaxed">
									{item.desc}
								</p>

								{/* Accent Line */}
								<div className="mt-5 w-10 h-[2px] bg-[#D4AF37] group-hover:w-16 transition-all duration-300" />
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
