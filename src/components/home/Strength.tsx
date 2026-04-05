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
		<section className="relative  bg-gradient-to-r from-[#000040] to-[#000020] py-24 overflow-hidden">
			{/* ✨ Background Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-10 w-[250px] h-[250px] bg-[#E0A000]/10 blur-[120px] rounded-full" />
				<div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-[#E0A000]/10 blur-[120px] rounded-full" />
			</div>

			<div className="relative max-w-6xl mx-auto px-6 text-center">
				{/* Title */}
				<h2 className="text-3xl md:text-4xl font-bold text-white">
					Our{" "}
					<span className="bg-gradient-to-r from-[#E0A000] to-[#F2C94C] bg-clip-text text-transparent">
						Strengths
					</span>
				</h2>

				<p className="mt-4 text-gray-400 max-w-2xl mx-auto">
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
								className="group relative p-8 rounded-2xl border border-white/10 bg-[#0A1A24]/40 backdrop-blur-md text-left transition hover:border-[#E0A000]/30">
								{/* ✨ Hover Glow */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
									<div className="absolute inset-0 bg-[#E0A000]/10 blur-[80px] rounded-2xl" />
								</div>

								{/* Icon */}
								<div className="relative w-12 h-12 flex items-center justify-center rounded-lg bg-[#0A1A24] text-[#E0A000] mb-5 group-hover:scale-110 transition shadow-[0_0_15px_rgba(224,160,0,0.3)]">
									<Icon size={22} />
								</div>

								{/* Title */}
								<h3 className="text-lg font-semibold text-white group-hover:text-[#E0A000] transition">
									{item.title}
								</h3>

								{/* Description */}
								<p className="mt-3 text-gray-400 text-sm leading-relaxed">
									{item.desc}
								</p>

								{/* Accent Line */}
								<div className="mt-5 w-10 h-[2px] bg-[#E0A000] group-hover:w-16 transition-all duration-300 shadow-[0_0_10px_#E0A000]" />
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
