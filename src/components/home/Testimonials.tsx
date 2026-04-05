"use client";

import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";

const TESTIMONIALS = [
	{
		text: "BRK Traders helped us source quality materials at competitive pricing. Their process was smooth and highly professional.",
		author: "Procurement Manager",
		company: "Manufacturing Company",
	},
	{
		text: "Their brokerage and facilitation services saved us time and ensured a hassle-free transaction.",
		author: "Business Owner",
		company: "Wholesale Trade",
	},
	{
		text: "Reliable, transparent, and efficient — BRK Traders is a trusted partner for our business operations.",
		author: "Director",
		company: "Retail Firm",
	},
];

export default function Testimonials() {
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
					What Our{" "}
					<span className="bg-gradient-to-r from-[#E0A000] to-[#F2C94C] bg-clip-text text-transparent">
						Clients Say
					</span>
				</h2>

				{/* Glow Line */}
				<div className="mt-4 w-16 h-[3px] bg-[#E0A000] mx-auto rounded-full shadow-[0_0_10px_#E0A000]" />

				{/* Cards */}
				<div className="mt-14 grid md:grid-cols-3 gap-8">
					{TESTIMONIALS.map((item, i) => (
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

							{/* Quote Icon */}
							<div className="absolute top-6 right-6 text-[#E0A000]/40">
								<FiMessageSquare size={28} />
							</div>

							{/* Text */}
							<p className="text-gray-300 leading-relaxed italic relative z-10">
								“{item.text}”
							</p>

							{/* Divider */}
							<div className="mt-6 w-10 h-[2px] bg-[#E0A000] group-hover:w-16 transition-all duration-300 shadow-[0_0_10px_#E0A000]" />

							{/* Author */}
							<div className="mt-4 relative z-10">
								<p className="text-white font-semibold">— {item.author}</p>
								<p className="text-sm text-gray-400">{item.company}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
