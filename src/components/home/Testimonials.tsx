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
		<section className="bg-[#F8FAFC] py-24">
			<div className="max-w-7xl mx-auto px-6 text-center">
				{/* Title */}
				<h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
					What Our <span className="text-[#D4AF37]">Clients Say</span>
				</h2>

				{/* Subtle line */}
				<div className="mt-4 w-16 h-[3px] bg-[#D4AF37] mx-auto rounded-full" />

				{/* Cards */}
				<div className="mt-14 grid md:grid-cols-3 gap-8">
					{TESTIMONIALS.map((item, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
							className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-left relative">
							{/* Quote Icon */}
							<div className="absolute top-6 right-6 text-[#D4AF37]/30">
								<FiMessageSquare size={28} />
							</div>

							{/* Text */}
							<p className="text-gray-600 leading-relaxed italic">
								“{item.text}”
							</p>

							{/* Divider */}
							<div className="mt-6 w-10 h-[2px] bg-[#D4AF37] group-hover:w-16 transition-all duration-300" />

							{/* Author */}
							<div className="mt-4">
								<p className="text-[#0F172A] font-semibold">— {item.author}</p>
								<p className="text-sm text-gray-500">{item.company}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
