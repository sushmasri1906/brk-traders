"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const INDUSTRIES = [
	{
		title: "Manufacturing",
		desc: "Supporting production, supply chains, and industrial operations.",
		img: "https://res.cloudinary.com/drhzztyoc/image/upload/v1778164976/QQOW-4ie3dE825wL5Hw8ufcsAqJbNG01FuRAVpbM0rANe-hEy7LONJOAdqSeqbRFOxlqJEt7YlEowIavYK-IbELOcHGmhMm5FDNRXw7PqrxlUtkz-_vlxpDIE3-TTWPsgXYZFIUUm3q2I63LUwy2qvwZdXcVUFke97gx7KrXeh0wZYdue-MqrXGdNqct8L5o_gt1hxi.jpg",
		featured: true,
	},
	{
		title: "Retail",
		desc: "Enhancing sourcing and distribution for retail businesses.",
		img: "https://res.cloudinary.com/drhzztyoc/image/upload/v1778165029/MSMCZItnxW5sqaBDUsFLS-T6QYI9KmHYvOC9746mfPBL1ACX3BhLXU_Sv7CxdugcEh8emvfuX_gjR1CGkYrpBhxdCk_hBxmqsVXx1--SOWf_Xff_agNTqE9yG7XXCAotKLipzlAkEruCe7Bzl0sONgu53wBEuKspqDycJ0DVey_GoWH2gC6pKf9eVEze3fsi_rjlrqv.jpg",
	},
	{
		title: "Construction",
		desc: "Reliable material sourcing and project support.",
		img: "https://res.cloudinary.com/drhzztyoc/image/upload/v1778165172/r0wmrOJCGP-QQkFiwFpyzE-_MMA0FMdUb76EH9U4T0YL3AZwnQqWa8PaH0vaut5TC0X4RRvVdGnKAyNySKIVstoN5jVl6l8egWMQ4-d43i_uUtXvUSxnP2K0MSvB9j6oSF5O30RYwzU143GOMnxCcMRAcaJeDENsNzHQPH9ERUHkec9ONwMlN-NZORAuTxJ8_yqofr9.jpg",
	},
	{
		title: "Import / Export",
		desc: "Seamless global trade and logistics coordination.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775212804/imports-and-exports_sp1v56.jpg",
	},
	{
		title: "Wholesale Markets",
		desc: "Efficient bulk trading and distribution networks.",
		img: "https://res.cloudinary.com/drhzztyoc/image/upload/v1778165239/M6kzu39qazj7vI3tx0FaXzWzHmTClxsmYLlU1Dxf-rTRDU2AoX42yYIA_8FeobmiBATAuqGpojvR9rRXTDSuKPHQMIiPgVgB3TaqqHW9GibZnQ-yQ-xpKhCcNeb3p9LDVs3MNyVkqKQwwTEC4FCPjj0J6_g7qfHvE7pyQikXS11FmJ3AYdhiaGkmUSygB_hk_r0g20a.jpg",
	},
];

export default function Industries() {
	const featured = INDUSTRIES.find((i) => i.featured);
	const others = INDUSTRIES.filter((i) => !i.featured);

	return (
		<section className="relative bg-gradient-to-r from-[#000040] to-[#000020] py-24 overflow-hidden">
			{/* Glow Background */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#E0A000]/10 blur-[140px] rounded-full" />
				<div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#E08000]/10 blur-[140px] rounded-full" />
			</div>

			<div className="relative max-w-7xl mx-auto px-6">
				{/* Title */}
				<div className="text-center">
					<h2 className="text-3xl md:text-5xl font-bold text-white">
						Industries We{" "}
						<span className="bg-gradient-to-r from-[#E0A000] via-[#E0C000] to-[#E08000] bg-clip-text text-transparent">
							Serve
						</span>
					</h2>
					<p className="mt-4 text-gray-400 max-w-2xl mx-auto">
						Delivering tailored solutions across diverse industries with
						expertise and precision.
					</p>
				</div>

				{/* Featured */}
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
					<div className="absolute inset-0 bg-gradient-to-r from-[#000020]/95 via-[#000020]/70 to-transparent" />

					{/* Glow */}
					<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#E0A000]/10 to-[#E08000]/10 blur-2xl transition duration-500" />

					{/* Content */}
					<div className="absolute bottom-0 p-8 text-white max-w-xl">
						<h3 className="text-3xl font-bold">{featured!.title}</h3>
						<p className="mt-3 text-gray-300">{featured!.desc}</p>

						{/* Accent */}
						<div className="mt-4 w-12 h-[2px] bg-gradient-to-r from-[#E0A000] to-[#E08000]" />
					</div>
				</motion.div>

				{/* Grid */}
				<div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
								className="object-cover group-hover:scale-110 transition duration-700"
							/>

							{/* Overlay */}
							<div className="absolute inset-0 bg-[#000020]/70 group-hover:bg-[#000020]/60 transition" />

							{/* Glow */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#E0A000]/10 to-[#E08000]/10 blur-xl transition" />

							{/* Border */}
							<div className="absolute inset-0 border border-transparent group-hover:border-[#E0A000]/40 rounded-xl transition" />

							{/* Content */}
							<div className="absolute bottom-0 p-5 text-white">
								<h4 className="font-semibold text-lg group-hover:text-[#E0A000] transition">
									{item.title}
								</h4>
								<p className="text-sm text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition">
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
