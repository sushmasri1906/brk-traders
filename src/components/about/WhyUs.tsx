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
		<section className="bg-[#F8FAFC] py-24">
			<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
				{/* Left Content */}
				<div>
					<h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
						Why <span className="text-[#D4AF37]">BRK Traders?</span>
					</h2>

					<p className="mt-6 text-gray-600 leading-relaxed">
						We combine industry expertise, strong networks, and a client-first
						approach to deliver reliable and transparent business solutions
						across sectors.
					</p>

					{/* Accent */}
					<div className="mt-6 w-16 h-[3px] bg-[#D4AF37] rounded-full" />
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
								<div className="absolute inset-0 rounded-xl bg-[#D4AF37]/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

								{/* Card */}
								<div className="relative bg-white rounded-xl p-6 flex items-start gap-4 shadow-md hover:shadow-xl border border-gray-100 transition">
									{/* Icon */}
									<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#0F172A] text-[#D4AF37] group-hover:scale-110 transition">
										<Icon size={22} />
									</div>

									{/* Text */}
									<h3 className="text-[#0F172A] font-medium group-hover:text-[#D4AF37] transition">
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
