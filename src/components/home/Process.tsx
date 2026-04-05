"use client";

import { motion } from "framer-motion";

const STEPS = [
	{
		title: "Client Requirement Understanding",
		desc: "We begin by understanding your business needs, goals, and expectations.",
	},
	{
		title: "Market Research & Sourcing",
		desc: "Identifying the best suppliers, products, and market opportunities.",
	},
	{
		title: "Negotiation & Facilitation",
		desc: "Ensuring fair deals, smooth communication, and transparent processes.",
	},
	{
		title: "Execution & Delivery Support",
		desc: "Managing operations and ensuring timely execution of transactions.",
	},
	{
		title: "Post-Transaction Support",
		desc: "Continuous support to maintain long-term partnerships and value.",
	},
];

export default function Process() {
	return (
		<section className="relative bg-gradient-to-r from-[#000040] to-[#000020] py-24 overflow-hidden">
			{/* ✨ Background Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#E0A000]/10 blur-[140px] rounded-full" />
				<div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#E08000]/10 blur-[140px] rounded-full" />
			</div>

			<div className="relative max-w-7xl mx-auto px-6 text-center">
				{/* Title */}
				<h2 className="text-3xl md:text-4xl font-bold text-white">
					Our{" "}
					<span className="bg-gradient-to-r from-[#E0A000] via-[#E0C000] to-[#E08000] bg-clip-text text-transparent">
						Process
					</span>
				</h2>

				<p className="mt-4 text-gray-400 max-w-2xl mx-auto">
					A structured and transparent approach to deliver consistent results
					and long-term value.
				</p>

				{/* Timeline */}
				<div className="mt-16 relative">
					{/* Line */}
					<div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E0A000] to-transparent" />

					<div className="grid md:grid-cols-5 gap-10">
						{STEPS.map((step, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
								className="group relative flex flex-col items-center text-center">
								{/* Step Circle */}
								<div
									className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full 
									bg-[#000040] text-[#E0A000] font-bold text-lg 
									border border-[#E0A000]/30 shadow-lg
									group-hover:bg-[#E0A000] group-hover:text-[#000020]
									transition duration-300">
									{i + 1}
								</div>

								{/* Glow */}
								<div className="absolute top-0 w-16 h-16 rounded-full bg-[#E0C000]/30 blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />

								{/* Card */}
								<div
									className="mt-6 px-4 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 
								group-hover:border-[#E0A000]/40 transition duration-300">
									<h3 className="font-semibold text-white group-hover:text-[#E0A000] transition">
										{step.title}
									</h3>

									<p className="mt-2 text-sm text-gray-400">{step.desc}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
