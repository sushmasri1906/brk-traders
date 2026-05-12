"use client";

import Link from "next/link";
import Image from "next/image";
import {
	FiMapPin,
	FiMail,
	FiPhone,
	FiGlobe,
	FiArrowUpRight,
} from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="relative bg-[#000014] text-gray-300 overflow-hidden">
			{/* Premium Background */}
			<div className="absolute inset-0">
				{/* Gradient Mesh */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(224,160,0,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,180,0,0.08),transparent_28%)]" />

				{/* Floating Glow */}
				<motion.div
					animate={{
						x: [0, 40, 0],
						y: [0, -30, 0],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute top-0 left-0 w-[320px] h-[320px] bg-[#E0A000]/10 blur-[140px] rounded-full"
				/>

				<motion.div
					animate={{
						x: [0, -30, 0],
						y: [0, 30, 0],
					}}
					transition={{
						duration: 12,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-[#ffb300]/10 blur-[140px] rounded-full"
				/>

				{/* Grid Overlay */}
				<div
					className="
						absolute inset-0 opacity-[0.03]
						[background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
						[background-size:60px_60px]
					"
				/>
			</div>

			{/* Main Content */}
			<div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">
				<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">
					{/* Brand */}
					<div>
						{/* Logo */}
						<div className="flex items-center gap-4">
							<div className="relative">
								<div className="absolute inset-0 bg-[#E0A000]/30 blur-2xl rounded-full" />

								<div
									className="
										relative
										w-[82px] h-[82px]
										rounded-[26px]
										bg-white/5
										backdrop-blur-xl
										border border-[#E0A000]/20
										flex items-center justify-center
										overflow-hidden
										shadow-[0_10px_40px_rgba(0,0,0,0.45)]
									">
									<Image
										src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1778573249/BRK_PNG_1_bpalno.png"
										alt="BRK Traders"
										width={68}
										height={68}
										className="
											object-contain
											brightness-[2.5]
											contrast-125
											drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]
										"
									/>
								</div>
							</div>

							<div>
								<h2
									className="
										text-white
										font-black
										tracking-[0.22em]
										text-lg
									">
									BRK TRADERS
								</h2>

								<p
									className="
										text-[#E0A000]
										text-[10px]
										tracking-[0.32em]
										mt-1
									">
									GLOBAL TRADE • TRUST • GROWTH
								</p>
							</div>
						</div>

						<p className="mt-7 text-sm leading-8 text-gray-400">
							BRK Traders is a modern global trading and sourcing partner
							delivering brokerage, procurement, logistics coordination, and
							business facilitation solutions across multiple industries.
						</p>

						{/* Socials */}
						<div className="flex gap-4 mt-8">
							{[FaLinkedinIn, FaFacebookF, FaInstagram].map((Icon, i) => (
								<motion.div
									whileHover={{ y: -4, scale: 1.05 }}
									key={i}
									className="
										w-11 h-11
										rounded-2xl
										bg-white/5
										border border-white/10
										backdrop-blur-xl
										flex items-center justify-center
										text-gray-300
										hover:bg-[#E0A000]
										hover:text-[#000020]
										transition-all duration-300
										cursor-pointer
										shadow-[0_10px_30px_rgba(0,0,0,0.25)]
									">
									<Icon size={16} />
								</motion.div>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3
							className="
								text-white
								font-semibold
								text-lg
								mb-6
								relative
								inline-block
							">
							Quick Links
							<span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-[#E0A000]" />
						</h3>

						<ul className="space-y-4 text-sm">
							{["Home", "About Us", "Services", "Industries", "Contact"].map(
								(item, i) => (
									<li key={i}>
										<Link
											href={`/${item.toLowerCase().replace(" ", "")}`}
											className="
											group flex items-center gap-2
											text-gray-400
											hover:text-white
											transition duration-300
										">
											<FiArrowUpRight
												className="
												text-[#E0A000]
												opacity-0
												-group-hover:opacity-100
												transition
											"
											/>

											<span className="group-hover:translate-x-1 transition duration-300">
												{item}
											</span>
										</Link>
									</li>
								),
							)}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3
							className="
								text-white
								font-semibold
								text-lg
								mb-6
								relative
								inline-block
							">
							Services
							<span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-[#E0A000]" />
						</h3>

						<ul className="space-y-4 text-sm">
							{[
								"Trading Services",
								"Brokerage & Agency",
								"Sourcing & Procurement",
								"Import & Export",
								"Distribution & Dealership",
								"Business Facilitation",
							].map((item, i) => (
								<li
									key={i}
									className="
										text-gray-400
										hover:text-white
										transition duration-300
										cursor-default
									">
									{item}
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3
							className="
								text-white
								font-semibold
								text-lg
								mb-6
								relative
								inline-block
							">
							Contact
							<span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-[#E0A000]" />
						</h3>

						<ul className="space-y-6 text-sm text-gray-400">
							{/* Address */}
							<li className="flex items-start gap-4">
								<div
									className="
										w-10 h-10 rounded-xl
										bg-white/5
										border border-white/10
										flex items-center justify-center
										text-[#E0A000]
										shrink-0
									">
									<FiMapPin />
								</div>

								<span className="leading-7">
									H.No 7-1-414/20-21, F.No. 203
									<br />
									Koushik Sai Rama Residency,
									<br />
									Srinivas Colony-East,
									<br />
									Sanjeev Reddy Nagar,
									<br />
									Hyderabad 500038, Telangana.
								</span>
							</li>

							{/* Phone */}
							<li className="flex items-start gap-4">
								<div
									className="
										w-10 h-10 rounded-xl
										bg-white/5
										border border-white/10
										flex items-center justify-center
										text-[#E0A000]
										shrink-0
									">
									<FiPhone />
								</div>

								<div>
									<a
										href="tel:9985201444"
										className="block hover:text-white transition">
										+91 9985201444
									</a>

									<a
										href="tel:9052143888"
										className="block hover:text-white transition mt-1">
										+91 9052143888
									</a>
								</div>
							</li>

							{/* Email */}
							<li className="flex items-start gap-4">
								<div
									className="
										w-10 h-10 rounded-xl
										bg-white/5
										border border-white/10
										flex items-center justify-center
										text-[#E0A000]
										shrink-0
									">
									<FiMail />
								</div>

								<div>
									<a
										href="mailto:info@brktraders.com"
										className="block hover:text-white transition">
										info@brktraders.com
									</a>

									<a
										href="mailto:rajesh@brktraders.com"
										className="block hover:text-white transition mt-1">
										rajesh@brktraders.com
									</a>
								</div>
							</li>

							{/* Website */}
							<li className="flex items-start gap-4">
								<div
									className="
										w-10 h-10 rounded-xl
										bg-white/5
										border border-white/10
										flex items-center justify-center
										text-[#E0A000]
										shrink-0
									">
									<FiGlobe />
								</div>

								<a
									href="https://www.brktraders.com"
									target="_blank"
									className="hover:text-white transition">
									www.brktraders.com
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div
					className="
						mt-20
						pt-8
						border-t border-white/10
						flex flex-col md:flex-row
						items-center justify-between
						gap-4
						text-sm text-gray-500
					">
					<p>
						© {year}{" "}
						<span className="text-[#E0A000] font-medium">BRK Traders</span>. All
						rights reserved.
					</p>

					<a
						href="https://hsdev.in"
						target="_blank"
						rel="noopener noreferrer"
						className="
							group flex items-center gap-2
							text-gray-400
							hover:text-[#E0A000]
							transition
						">
						Developed by hsdev
						<FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
					</a>
				</div>
			</div>
		</footer>
	);
}
