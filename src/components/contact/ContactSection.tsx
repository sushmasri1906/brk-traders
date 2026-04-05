"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiGlobe, FiMapPin } from "react-icons/fi";

export default function ContactSection() {
	return (
		<section className="bg-[#F8FAFC] py-24">
			<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
				{/* LEFT: CONTACT CARD */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					className="relative rounded-2xl p-[1px]">
					{/* Glow Border */}
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/40 to-transparent blur-md opacity-70" />

					{/* Card */}
					<div className="relative bg-[#0B1D26] rounded-2xl p-8 md:p-10 text-white shadow-xl">
						{/* Names */}
						<h3 className="text-2xl font-bold text-[#D4AF37] leading-snug">
							T. Rajesh <br /> K. Karthik
						</h3>

						{/* Contact Info */}
						<div className="mt-6 space-y-4 text-sm">
							{/* Phone */}
							<div className="flex items-start gap-3">
								<FiPhone className="text-[#D4AF37] mt-1" />
								<span>9985201444, 9052143888</span>
							</div>

							{/* Website */}
							<div className="flex items-start gap-3">
								<FiGlobe className="text-[#D4AF37] mt-1" />
								<span>www.brktraders.com</span>
							</div>

							{/* Emails */}
							<div className="flex items-start gap-3">
								<FiMail className="text-[#D4AF37] mt-1" />
								<div>
									<p>Rajesh@brktraders.com</p>
									<p>Karthik@brktraders.com</p>
									<p>Info@brktraders.com</p>
								</div>
							</div>

							{/* Address */}
							<div className="flex items-start gap-3">
								<FiMapPin className="text-[#D4AF37] mt-1" />
								<p>
									H.No 7-1-414/20-21, F.No. 203 <br />
									Koushik Sai Rama Residency, <br />
									Srinivas Colony-East, Beside ICICI Bank Lane, <br />
									Sanjeev Reddy Nagar, Hyderabad 500038, Telangana.
								</p>
							</div>
						</div>

						{/* Bottom Accent */}
						<div className="mt-8 flex items-center gap-2">
							<div className="w-10 h-[2px] bg-[#D4AF37]" />
							<div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
						</div>
					</div>
				</motion.div>

				{/* RIGHT: FORM */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
					<h2 className="text-3xl font-bold text-[#0F172A]">
						Get in <span className="text-[#D4AF37]">Touch</span>
					</h2>

					<p className="mt-3 text-gray-600">
						Have a requirement? Send us a message and we’ll get back to you.
					</p>

					<form className="mt-8 space-y-5">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#D4AF37]"
						/>

						<input
							type="email"
							placeholder="Email Address"
							className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#D4AF37]"
						/>

						<input
							type="text"
							placeholder="Phone Number"
							className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#D4AF37]"
						/>

						<textarea
							rows={4}
							placeholder="Your Message"
							className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#D4AF37]"
						/>

						<button
							type="submit"
							className="w-full bg-[#0F172A] text-white py-3 rounded-lg font-semibold hover:bg-[#1F3A5F] transition">
							Send Message
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	);
}
