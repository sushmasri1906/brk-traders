"use client";

import { motion } from "framer-motion";
import {
	FiUsers,
	FiShield,
	FiLayers,
	FiCheckCircle,
	FiHeart,
	FiRefreshCcw,
} from "react-icons/fi";

const FEATURES = [
	{ title: "Strong Industry Network", icon: FiUsers },
	{ title: "Transparent Dealings", icon: FiShield },
	{ title: "Multi-Industry Expertise", icon: FiLayers },
	{ title: "Reliable Execution", icon: FiCheckCircle },
	{ title: "Client-Centric Approach", icon: FiHeart },
	{ title: "Flexible Business Model", icon: FiRefreshCcw },
];

export default function WhyChooseUs() {
	return (
		<section className="relative bg-gradient-to-r from-[#000040] to-[#000020] py-24 overflow-hidden">
			{/* ✨ Background Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#E0A000]/10 blur-[140px] rounded-full" />
				<div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#E08000]/10 blur-[140px] rounded-full" />
			</div>

			<div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
				{/* Left Content */}
				<div>
					<h2 className="text-3xl md:text-4xl font-bold text-white">
						Why{" "}
						<span className="bg-gradient-to-r from-[#E0A000] via-[#E0C000] to-[#E08000] bg-clip-text text-transparent">
							BRK Traders?
						</span>
					</h2>

					<p className="mt-6 text-gray-400 leading-relaxed">
						We combine industry expertise, strong networks, and a client-first
						approach to deliver reliable and transparent business solutions
						across sectors.
					</p>

					{/* Accent */}
					<div className="mt-6 w-16 h-[3px] bg-gradient-to-r from-[#E0A000] to-[#E08000] rounded-full" />
				</div>

				{/* Right Grid */}
				<div className="grid sm:grid-cols-2 gap-6">
					{FEATURES.map((item, i) => {
						const Icon = item.icon;

						return (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
								className="group relative p-[1px] rounded-xl">
								{/* Glow */}
								<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E0A000]/20 to-[#E08000]/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

								{/* Card */}
								<div
									className="relative bg-white/5 backdrop-blur-md rounded-xl p-6 
								flex items-start gap-4 
								border border-white/10 
								transition duration-300 
								hover:border-[#E0A000]/40 hover:scale-105">
									{/* Icon */}
									<div
										className="w-12 h-12 flex items-center justify-center rounded-lg 
									bg-[#000040] text-[#E0A000] 
									border border-[#E0A000]/30
									group-hover:bg-[#E0A000] group-hover:text-[#000020]
									transition duration-300">
										<Icon size={22} />
									</div>

									{/* Text */}
									<h3 className="text-white font-medium group-hover:text-[#E0A000] transition">
										{item.title}
									</h3>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
