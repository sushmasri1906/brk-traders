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
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775213293/brokerage-commission-agency_z9qz9q.png",
	},
	{
		title: "Sourcing & Procurement",
		desc: "Helping businesses find reliable suppliers and competitive pricing.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775213293/sourcing-procurement_vjxvqz.png",
	},
	{
		title: "Import & Export Support",
		desc: "Efficient coordination for international trade operations.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775213293/import-export-support_xvqz9q.png",
	},
	{
		title: "Distribution & Dealership",
		desc: "Expanding market reach through strong distribution networks.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775213293/distribution-dealership_vjxvqz.png",
	},
	{
		title: "Business Facilitation",
		desc: "End-to-end support including negotiation and execution.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775213293/business-facilitation_vjxvqz.png",
	},
];

export default function ServicesShowcase() {
	const featured = SERVICES.find((s) => s.featured);
	const rest = SERVICES.filter((s) => !s.featured);

	return (
		<section className="bg-[#F8FAFC] py-20">
			<div className="max-w-7xl mx-auto px-6">
				{/* Title */}
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
						What We <span className="text-[#D4AF37]">Do</span>
					</h2>
					<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
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
						className="lg:col-span-2 relative h-[420px] rounded-2xl overflow-hidden">
						<Image
							src={featured!.img}
							alt={featured!.title}
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-[#0B1D26]/90 to-transparent" />

						<div className="absolute bottom-0 p-6 text-white">
							<h3 className="text-2xl font-bold">{featured!.title}</h3>
							<p className="mt-2 text-gray-200">{featured!.desc}</p>
						</div>
					</motion.div>

					{/* Side Cards */}
					<div className="flex flex-col gap-8">
						{rest.slice(0, 2).map((service, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: 40 }}
								whileInView={{ opacity: 1, x: 0 }}
								className="relative h-[200px] rounded-xl overflow-hidden">
								<Image
									src={service.img}
									alt={service.title}
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-[#0B1D26]/70" />

								<div className="absolute bottom-0 p-4 text-white">
									<h4 className="font-semibold">{service.title}</h4>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Bottom Grid */}
				<div className="mt-10 grid md:grid-cols-3 gap-6">
					{rest.slice(2).map((service, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="bg-white rounded-xl shadow-md overflow-hidden group">
							<div className="relative h-[180px]">
								<Image
									src={service.img}
									alt={service.title}
									fill
									className="object-cover group-hover:scale-110 transition duration-500"
								/>
							</div>

							<div className="p-5">
								<h4 className="font-semibold text-[#0F172A]">
									{service.title}
								</h4>
								<p className="mt-2 text-sm text-gray-600">{service.desc}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
