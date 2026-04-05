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
		<section className="bg-[#F8FAFC] py-24">
			<div className="max-w-7xl mx-auto px-6 text-center">
				{/* Title */}
				<h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
					Our <span className="text-[#D4AF37]">Process</span>
				</h2>

				<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
					A structured and transparent approach to deliver consistent results
					and long-term value.
				</p>

				{/* Timeline */}
				<div className="mt-16 relative">
					{/* Line */}
					<div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

					<div className="grid md:grid-cols-5 gap-10">
						{STEPS.map((step, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
								className="relative flex flex-col items-center text-center">
								{/* Circle */}
								<div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-[#0F172A] text-[#D4AF37] font-bold text-lg shadow-md">
									{i + 1}
								</div>

								{/* Glow */}
								<div className="absolute top-0 w-16 h-16 rounded-full bg-[#D4AF37]/20 blur-xl opacity-0 group-hover:opacity-100" />

								{/* Title */}
								<h3 className="mt-6 font-semibold text-[#0F172A]">
									{step.title}
								</h3>

								{/* Description */}
								<p className="mt-2 text-sm text-gray-600">{step.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
