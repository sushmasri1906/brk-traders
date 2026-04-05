"use client";

import { motion } from "framer-motion";

const LEADERS = [
	{
		name: "Mr. Thalluri Venkatasatya Rajesh",
		role: "Managing Partner",
		desc: "Leads strategic operations, partnerships, and financial management of the firm.",
		img: "/images/leader1.jpg",
	},
	{
		name: "Mr. Katta Karthik",
		role: "Managing Partner",
		desc: "Oversees business development, client relations, and operational execution.",
		img: "/images/leader2.jpg",
	},
];

export default function Leadership() {
	return (
		<section className="bg-[#0F172A] py-24">
			<div className="max-w-6xl mx-auto px-6 text-center">
				{/* Title */}
				<h2 className="text-3xl md:text-4xl font-bold text-white">
					Our <span className="text-[#D4AF37]">Leadership</span>
				</h2>

				<p className="mt-4 text-gray-400 max-w-2xl mx-auto">
					Experienced leadership driving growth, strategy, and long-term
					partnerships.
				</p>

				{/* Cards */}
				<div className="mt-16 grid md:grid-cols-2 gap-10">
					{LEADERS.map((person, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.2 }}
							className="group relative rounded-2xl p-[1px]">
							{/* Glow Border */}
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition duration-500" />

							{/* Card */}
							<div className="relative bg-[#0B1D26] rounded-2xl p-8 text-left border border-white/10 hover:border-[#D4AF37]/40 transition">
								{/* Profile Image */}
								<div className="w-20 h-20 rounded-full overflow-hidden mb-5 border-2 border-[#D4AF37]/40">
									<img
										src={person.img}
										alt={person.name}
										className="w-full h-full object-cover"
									/>
								</div>

								{/* Name */}
								<h3 className="text-xl font-semibold text-white">
									{person.name}
								</h3>

								{/* Role */}
								<p className="text-[#D4AF37] text-sm font-medium mt-1">
									{person.role}
								</p>

								{/* Description */}
								<p className="mt-4 text-gray-400 text-sm leading-relaxed">
									{person.desc}
								</p>

								{/* Accent Line */}
								<div className="mt-5 w-10 h-[2px] bg-[#D4AF37] group-hover:w-16 transition-all duration-300" />
							</div>
						</motion.div>
					))}
				</div>

				{/* Bottom Statement */}
				<div className="mt-16 max-w-3xl mx-auto">
					<p className="text-gray-400 leading-relaxed">
						Both partners actively manage day-to-day operations and represent
						the firm across
						<span className="text-white font-medium">
							{" "}
							government, banking, and business institutions
						</span>
						, ensuring strong relationships and consistent growth.
					</p>
				</div>
			</div>
		</section>
	);
}
