"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiGlobe, FiMapPin } from "react-icons/fi";

export default function ContactSection() {
	return (
		<section className="relative bg-gradient-to-r from-[#000040] to-[#000020] py-24 overflow-hidden">
			{/* Background Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#E0A000]/10 blur-[140px] rounded-full" />
				<div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#E08000]/10 blur-[140px] rounded-full" />
			</div>

			<div className="relative max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="group relative rounded-3xl p-[1px]">
					{/* Animated Border Glow */}
					<div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#E0A000]/40 via-[#E0C000]/20 to-[#E08000]/40 blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />

					{/* Main Card */}
					<div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
						{/* Top Section */}
						<div className="grid lg:grid-cols-2 gap-10 p-8 md:p-14">
							{/* Left */}
							<div>
								<p className="text-[#E0A000] uppercase tracking-[0.3em] text-sm font-medium">
									Contact Us
								</p>

								<h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
									Let’s Build Strong <br />
									<span className="bg-gradient-to-r from-[#E0A000] to-[#E0C000] bg-clip-text text-transparent">
										Business Connections
									</span>
								</h2>

								<p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
									We provide reliable trading, sourcing, import/export,
									distribution, and business facilitation services across
									multiple industries with a commitment to quality and trust.
								</p>

								{/* Accent */}
								<div className="mt-8 flex items-center gap-3">
									<div className="w-14 h-[2px] bg-gradient-to-r from-[#E0A000] to-[#E08000]" />
									<div className="w-3 h-3 rounded-full bg-[#E0A000]" />
								</div>
							</div>

							{/* Right */}
							<div className="grid sm:grid-cols-2 gap-5">
								{/* Phone */}
								<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#E0A000]/40 transition">
									<div className="w-12 h-12 rounded-xl bg-[#E0A000]/10 flex items-center justify-center">
										<FiPhone className="text-[#E0A000] text-xl" />
									</div>

									<h3 className="mt-5 text-white text-lg font-semibold">
										Call Us
									</h3>

									<p className="mt-2 text-gray-400 text-sm leading-relaxed">
										+91 99852 01444 <br />
										+91 90521 43888
									</p>
								</div>

								{/* Website */}
								<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#E0A000]/40 transition">
									<div className="w-12 h-12 rounded-xl bg-[#E0A000]/10 flex items-center justify-center">
										<FiGlobe className="text-[#E0A000] text-xl" />
									</div>

									<h3 className="mt-5 text-white text-lg font-semibold">
										Website
									</h3>

									<p className="mt-2 text-gray-400 text-sm break-all">
										www.brktraders.com
									</p>
								</div>

								{/* Email */}
								<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#E0A000]/40 transition">
									<div className="w-12 h-12 rounded-xl bg-[#E0A000]/10 flex items-center justify-center">
										<FiMail className="text-[#E0A000] text-xl" />
									</div>

									<h3 className="mt-5 text-white text-lg font-semibold">
										Email
									</h3>

									<div className="mt-2 text-gray-400 text-sm space-y-1">
										<p>rajesh@brktraders.com</p>
										<p>karthik@brktraders.com</p>
										<p>info@brktraders.com</p>
									</div>
								</div>

								{/* Address */}
								<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#E0A000]/40 transition">
									<div className="w-12 h-12 rounded-xl bg-[#E0A000]/10 flex items-center justify-center">
										<FiMapPin className="text-[#E0A000] text-xl" />
									</div>

									<h3 className="mt-5 text-white text-lg font-semibold">
										Office Address
									</h3>

									<p className="mt-2 text-gray-400 text-sm leading-relaxed">
										H.No 7-1-414/20-21, F.No. 203 <br />
										Koushik Sai Rama Residency, <br />
										Srinivas Colony-East, Beside ICICI Bank Lane, <br />
										Sanjeev Reddy Nagar, Hyderabad - 500038, Telangana.
									</p>
								</div>
							</div>
						</div>

						{/* Bottom Bar */}
						<div className="border-t border-white/10 px-8 md:px-14 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
							<p className="text-gray-500 text-sm text-center md:text-left">
								Trusted Trading & Business Solutions Across Industries
							</p>

							<div className="flex items-center gap-2">
								<div className="w-2 h-2 rounded-full bg-[#E0A000]" />
								<div className="w-2 h-2 rounded-full bg-[#E0A000]/70" />
								<div className="w-2 h-2 rounded-full bg-[#E0A000]/40" />
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
