"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const INDUSTRIES = [
	{
		title: "Manufacturing",
		desc: "Supporting production, supply chains, and industrial operations.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775212804/imports-and-exports_sp1v56.jpg",
		featured: true,
	},
	{
		title: "Retail",
		desc: "Enhancing sourcing and distribution for retail businesses.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775212804/imports-and-exports_sp1v56.jpg",
	},
	{
		title: "Construction",
		desc: "Reliable material sourcing and project support.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775212804/imports-and-exports_sp1v56.jpg",
	},
	{
		title: "Import / Export",
		desc: "Seamless global trade and logistics coordination.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775212804/imports-and-exports_sp1v56.jpg",
	},
	{
		title: "Wholesale Markets",
		desc: "Efficient bulk trading and distribution networks.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775212804/imports-and-exports_sp1v56.jpg",
	},
];

export default function Industries() {
	const featured = INDUSTRIES.find((i) => i.featured);
	const others = INDUSTRIES.filter((i) => !i.featured);

	return (
		<section className="bg-[#0F172A] py-24">
			<div className="max-w-7xl mx-auto px-6">
				{/* Title */}
				<div className="text-center">
					<h2 className="text-3xl md:text-5xl font-bold text-white">
						Industries We <span className="text-[#D4AF37]">Serve</span>
					</h2>
					<p className="mt-4 text-gray-400 max-w-2xl mx-auto">
						Delivering tailored solutions across diverse industries with
						expertise and precision.
					</p>
				</div>

				{/* Featured Card */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="mt-16 relative h-[400px] rounded-2xl overflow-hidden group">
					<Image
						src={featured!.img}
						alt={featured!.title}
						fill
						className="object-cover group-hover:scale-105 transition duration-700"
					/>

					{/* Overlay */}
					<div className="absolute inset-0 bg-gradient-to-r from-[#0B1D26]/90 via-[#0B1D26]/60 to-transparent" />

					{/* Glow */}
					<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#D4AF37]/10 blur-2xl transition duration-500" />

					{/* Content */}
					<div className="absolute bottom-0 p-8 text-white max-w-xl">
						<h3 className="text-3xl font-bold">{featured!.title}</h3>
						<p className="mt-3 text-gray-200">{featured!.desc}</p>
					</div>
				</motion.div>

				{/* Grid */}
				<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{others.map((item, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
							className="group relative h-[260px] rounded-xl overflow-hidden">
							<Image
								src={item.img}
								alt={item.title}
								fill
								className="object-cover group-hover:scale-110 transition duration-500"
							/>

							{/* Dark Overlay */}
							<div className="absolute inset-0 bg-[#0B1D26]/70 group-hover:bg-[#0B1D26]/60 transition" />

							{/* Glow Border */}
							<div className="absolute inset-0 border border-transparent group-hover:border-[#D4AF37]/40 rounded-xl transition" />

							{/* Content */}
							<div className="absolute bottom-0 p-5 text-white">
								<h4 className="font-semibold text-lg group-hover:text-[#D4AF37] transition">
									{item.title}
								</h4>
								<p className="text-sm text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition">
									{item.desc}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
