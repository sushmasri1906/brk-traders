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
		<section className="relative  bg-gradient-to-r from-[#000040] to-[#000020] py-20 overflow-hidden">
			{/* ✨ Background Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-20 w-[300px] h-[300px] bg-[#E0A000]/10 blur-[120px] rounded-full" />
				<div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-[#E0A000]/10 blur-[120px] rounded-full" />
			</div>

			<div className="relative max-w-7xl mx-auto px-6">
				{/* Title */}
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white">
						What We{" "}
						<span className="bg-gradient-to-r from-[#E0A000] to-[#F2C94C] bg-clip-text text-transparent">
							Do
						</span>
					</h2>
					<p className="mt-4 text-gray-400">
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
							className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer border border-white/10">
							{/* Image */}
							<img
								src={service.img}
								alt={service.title}
								className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
							/>

							{/* Dark Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-[#08131B]/95 via-[#08131B]/50 to-transparent" />

							{/* ✨ Gold Glow on Hover */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
								<div className="absolute inset-0 bg-[#E0A000]/10 blur-[80px]" />
							</div>

							{/* Content */}
							<div className="absolute bottom-0 p-6 text-white">
								<h3 className="text-xl font-semibold">{service.title}</h3>

								<p className="mt-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition duration-300">
									{service.desc}
								</p>

								{/* Gold underline */}
								<div className="mt-3 w-10 h-[2px] bg-[#E0A000] group-hover:w-20 transition-all duration-300 shadow-[0_0_10px_#E0A000]" />
							</div>

							{/* 🔥 Border Glow */}
							<div className="absolute inset-0 rounded-2xl border border-[#E0A000]/0 group-hover:border-[#E0A000]/40 transition" />
						</motion.div>
					))}
				</div>

				{/* CTA */}
				<div className="mt-12 text-center">
					<Link href="/services">
						<button className="relative px-8 py-3 rounded-md font-semibold text-black bg-[#E0A000] overflow-hidden hover:scale-105 transition">
							<span className="relative z-10">View All Services</span>
							<div className="absolute inset-0 bg-[#E0A000] blur-md opacity-40" />
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
