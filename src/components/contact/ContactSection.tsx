"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiGlobe, FiMapPin } from "react-icons/fi";

export default function ContactSection() {
	return (
		<section className="relative bg-gradient-to-r from-[#000040] to-[#000020] py-24 overflow-hidden">
			{/* Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#E0A000]/10 blur-[140px] rounded-full" />
				<div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#E08000]/10 blur-[140px] rounded-full" />
			</div>

			<div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
				{/* LEFT: CONTACT CARD */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					className="group relative rounded-2xl p-[1px]">
					{/* Glow Border */}
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#E0A000]/40 to-[#E08000]/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

					{/* Card */}
					<div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-10 text-white border border-white/10">
						{/* Names */}
						<h3 className="text-2xl font-bold bg-gradient-to-r from-[#E0A000] to-[#E0C000] bg-clip-text text-transparent">
							T. Rajesh <br /> K. Karthik
						</h3>

						{/* Contact Info */}
						<div className="mt-6 space-y-4 text-sm text-gray-300">
							<div className="flex items-start gap-3">
								<FiPhone className="text-[#E0A000] mt-1" />
								<span>9985201444, 9052143888</span>
							</div>

							<div className="flex items-start gap-3">
								<FiGlobe className="text-[#E0A000] mt-1" />
								<span>www.brktraders.com</span>
							</div>

							<div className="flex items-start gap-3">
								<FiMail className="text-[#E0A000] mt-1" />
								<div>
									<p>rajesh@brktraders.com</p>
									<p>karthik@brktraders.com</p>
									<p>info@brktraders.com</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<FiMapPin className="text-[#E0A000] mt-1" />
								<p>
									H.No 7-1-414/20-21, F.No. 203 <br />
									Koushik Sai Rama Residency, <br />
									Srinivas Colony-East, Beside ICICI Bank Lane, <br />
									Sanjeev Reddy Nagar, Hyderabad 500038, Telangana.
								</p>
							</div>
						</div>

						{/* Accent */}
						<div className="mt-8 flex items-center gap-2">
							<div className="w-10 h-[2px] bg-gradient-to-r from-[#E0A000] to-[#E08000]" />
							<div className="w-3 h-3 rounded-full bg-[#E0A000]" />
						</div>
					</div>
				</motion.div>

				{/* RIGHT: FORM */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-10">
					<h2 className="text-3xl font-bold text-white">
						Get in <span className="text-[#E0A000]">Touch</span>
					</h2>

					<p className="mt-3 text-gray-400">
						Have a requirement? Send us a message and we’ll get back to you.
					</p>

					<form className="mt-8 space-y-5">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 
							text-white placeholder-gray-400 
							focus:outline-none focus:border-[#E0A000]"
						/>

						<input
							type="email"
							placeholder="Email Address"
							className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 
							text-white placeholder-gray-400 
							focus:outline-none focus:border-[#E0A000]"
						/>

						<input
							type="text"
							placeholder="Phone Number"
							className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 
							text-white placeholder-gray-400 
							focus:outline-none focus:border-[#E0A000]"
						/>

						<textarea
							rows={4}
							placeholder="Your Message"
							className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 
							text-white placeholder-gray-400 
							focus:outline-none focus:border-[#E0A000]"
						/>

						<button
							type="submit"
							className="w-full bg-gradient-to-r from-[#E0A000] to-[#E08000] 
							text-[#000020] py-3 rounded-lg font-semibold 
							hover:opacity-90 transition">
							Send Message
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	);
}
