"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SERVICES = [
	{
		title: "Trading Services",
		desc: "Wide-ranging trade of goods and commodities across industries.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775213266/1745573173_3119d9018925501f07d4_xaybij.png",
	},
	{
		title: "Sourcing & Procurement",
		desc: "Finding reliable suppliers and securing competitive pricing.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775213293/b06c7056-12c2-4dc7-9417-697f3d66e09b_fkmyx4.png",
	},
	{
		title: "Import & Export",
		desc: "Seamless coordination for international trade operations.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775212804/imports-and-exports_sp1v56.jpg",
	},
];

export default function ServicesHighlight() {
	return (
		<section className="bg-[#F8FAFC] py-20">
			<div className="max-w-7xl mx-auto px-6">
				{/* Title */}
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
						What We <span className="text-[#D4AF37]">Do</span>
					</h2>
					<p className="mt-4 text-gray-600">
						Delivering reliable trade solutions across industries
					</p>
				</div>

				{/* Cards */}
				<div className="mt-12 grid md:grid-cols-3 gap-8">
					{SERVICES.map((service, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.15 }}
							className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
							{/* Image */}
							<img
								src={service.img}
								alt={service.title}
								className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
							/>

							{/* Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-[#0B1D26]/90 via-[#0B1D26]/40 to-transparent" />

							{/* Content */}
							<div className="absolute bottom-0 p-6 text-white">
								<h3 className="text-xl font-semibold">{service.title}</h3>
								<p className="mt-2 text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition duration-300">
									{service.desc}
								</p>

								{/* Underline */}
								<div className="mt-3 w-10 h-[2px] bg-[#D4AF37] group-hover:w-20 transition-all duration-300" />
							</div>
						</motion.div>
					))}
				</div>

				{/* CTA */}
				<div className="mt-12 text-center">
					<Link href="/services">
						<button className="bg-[#0B1D26] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#1F3A5F] transition">
							View All Services
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
