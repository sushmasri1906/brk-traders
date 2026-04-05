"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SERVICES = [
	{
		title: "Trading Services",
		desc: "Wide-ranging trade of goods, commodities, and merchandise across multiple industries.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775213293/b06c7056-12c2-4dc7-9417-697f3d66e09b_fkmyx4.png",
		featured: true,
	},
	{
		title: "Brokerage & Commission Agency",
		desc: "Connecting buyers and sellers with seamless and transparent transactions.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775213293/b06c7056-12c2-4dc7-9417-697f3d66e09b_fkmyx4.png",
	},
	{
		title: "Sourcing & Procurement",
		desc: "Helping businesses find reliable suppliers and competitive pricing.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775213293/b06c7056-12c2-4dc7-9417-697f3d66e09b_fkmyx4.png",
	},
	{
		title: "Import & Export Support",
		desc: "Efficient coordination for international trade operations.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775213293/b06c7056-12c2-4dc7-9417-697f3d66e09b_fkmyx4.png",
	},
	{
		title: "Distribution & Dealership",
		desc: "Expanding market reach through strong distribution networks.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775213293/b06c7056-12c2-4dc7-9417-697f3d66e09b_fkmyx4.png",
	},
	{
		title: "Business Facilitation",
		desc: "End-to-end support including negotiation and execution.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775213293/b06c7056-12c2-4dc7-9417-697f3d66e09b_fkmyx4.png",
	},
];

export default function ServicesShowcase() {
	const featured = SERVICES.find((s) => s.featured);
	const rest = SERVICES.filter((s) => !s.featured);

	return (
		<section className="relative bg-gradient-to-r from-[#000040] to-[#000020] py-24 overflow-hidden">
			{/* Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#E0A000]/10 blur-[140px] rounded-full" />
				<div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#E08000]/10 blur-[140px] rounded-full" />
			</div>

			<div className="relative max-w-7xl mx-auto px-6">
				{/* Title */}
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white">
						What We{" "}
						<span className="bg-gradient-to-r from-[#E0A000] via-[#E0C000] to-[#E08000] bg-clip-text text-transparent">
							Do
						</span>
					</h2>
					<p className="mt-4 text-gray-400 max-w-2xl mx-auto">
						Delivering comprehensive solutions across trading, sourcing, and
						business facilitation.
					</p>
				</div>

				{/* Layout */}
				<div className="mt-16 grid lg:grid-cols-3 gap-8">
					{/* Featured */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						className="lg:col-span-2 relative h-[420px] rounded-2xl overflow-hidden group">
						<Image
							src={featured!.img}
							alt={featured!.title}
							fill
							className="object-cover group-hover:scale-105 transition duration-700"
						/>

						{/* Overlay */}
						<div className="absolute inset-0 bg-gradient-to-t from-[#000020]/95 via-[#000020]/60 to-transparent" />

						{/* Content */}
						<div className="absolute bottom-0 p-8 text-white">
							<h3 className="text-2xl font-bold">{featured!.title}</h3>
							<p className="mt-2 text-gray-300 max-w-lg">{featured!.desc}</p>

							{/* Accent */}
							<div className="mt-4 w-12 h-[2px] bg-gradient-to-r from-[#E0A000] to-[#E08000]" />
						</div>
					</motion.div>

					{/* Side Cards */}
					<div className="flex flex-col gap-8">
						{rest.slice(0, 2).map((service, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: 40 }}
								whileInView={{ opacity: 1, x: 0 }}
								className="relative h-[200px] rounded-xl overflow-hidden group">
								<Image
									src={service.img}
									alt={service.title}
									fill
									className="object-cover group-hover:scale-105 transition duration-500"
								/>

								<div className="absolute inset-0 bg-[#000020]/70 group-hover:bg-[#000020]/60 transition" />

								<div className="absolute bottom-0 p-4 text-white">
									<h4 className="font-semibold">{service.title}</h4>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Bottom Grid */}
				<div className="mt-12 grid md:grid-cols-3 gap-6">
					{rest.slice(2).map((service, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="group relative rounded-xl p-[1px]">
							{/* Glow */}
							<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E0A000]/20 to-[#E08000]/20 opacity-0 group-hover:opacity-100 blur-xl transition" />

							{/* Card */}
							<div className="relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-[#E0A000]/40 transition">
								<div className="relative h-[180px] overflow-hidden">
									<Image
										src={service.img}
										alt={service.title}
										fill
										className="object-cover group-hover:scale-110 transition duration-700"
									/>
								</div>

								<div className="p-5">
									<h4 className="font-semibold text-white group-hover:text-[#E0A000] transition">
										{service.title}
									</h4>
									<p className="mt-2 text-sm text-gray-400">{service.desc}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
