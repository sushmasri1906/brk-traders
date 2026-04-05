"use client";

import Link from "next/link";
import { FiMapPin, FiMail, FiPhone, FiGlobe } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="relative bg-gradient-to-r from-[#000040] to-[#000020] text-gray-300 pt-20 pb-8 overflow-hidden">
			{/* Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-10 w-[250px] h-[250px] bg-[#E0A000]/10 blur-[120px] rounded-full" />
				<div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-[#E08000]/10 blur-[120px] rounded-full" />
			</div>

			<div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
				{/* Brand */}
				<div>
					<h2 className="text-2xl font-bold text-white tracking-wide">
						<span className="bg-gradient-to-r from-[#E0A000] to-[#E0C000] bg-clip-text text-transparent">
							BRK
						</span>{" "}
						TRADERS
					</h2>

					<p className="mt-4 text-sm leading-relaxed text-gray-400">
						BRK Traders is a partnership firm engaged in trading, brokerage,
						sourcing, and business facilitation across multiple industries,
						delivering reliable solutions in domestic and international markets.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-white font-semibold mb-4 border-b border-[#E0A000]/30 pb-2">
						Quick Links
					</h3>
					<ul className="space-y-2 text-sm">
						{["Home", "About Us", "Services", "Industries", "Contact"].map(
							(item, i) => (
								<li key={i}>
									<Link
										href={`/${item.toLowerCase().replace(" ", "")}`}
										className="hover:text-[#E0C000] transition duration-300">
										{item}
									</Link>
								</li>
							),
						)}
					</ul>
				</div>

				{/* Services */}
				<div>
					<h3 className="text-white font-semibold mb-4 border-b border-[#E0A000]/30 pb-2">
						Services
					</h3>

					<ul className="space-y-2 text-sm">
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
								className="text-gray-400 hover:text-[#E0C000] transition duration-300 cursor-default">
								{item}
							</li>
						))}
					</ul>
				</div>
				{/* Contact */}
				<div>
					<h3 className="text-white font-semibold mb-4 border-b border-[#E0A000]/30 pb-2">
						Contact
					</h3>

					<div className="max-h-[220px] overflow-y-auto pr-2 custom-scroll">
						<ul className="space-y-4 text-sm text-gray-400">
							{/* Address */}
							<li className="flex items-start gap-3">
								<FiMapPin className="text-[#E0A000] mt-1" />
								<span>
									H.No 7-1-414/20-21, F.No. 203 <br />
									Koushik Sai Rama Residency, <br />
									Srinivas Colony-East, Beside ICICI Bank Lane, <br />
									Sanjeev Reddy Nagar, Hyderabad 500038, Telangana.
								</span>
							</li>

							{/* Phones */}
							<li className="flex items-start gap-3">
								<FiPhone className="text-[#E0A000] mt-1" />
								<div>
									<a
										href="tel:9985201444"
										className="hover:text-[#E0C000] block">
										+91 9985201444
									</a>
									<a
										href="tel:9052143888"
										className="hover:text-[#E0C000] block">
										+91 9052143888
									</a>
								</div>
							</li>

							{/* Emails */}
							<li className="flex items-start gap-3">
								<FiMail className="text-[#E0A000] mt-1" />
								<div>
									<a
										href="mailto:rajesh@brktraders.com"
										className="hover:text-[#E0C000] block">
										rajesh@brktraders.com
									</a>
									<a
										href="mailto:karthik@brktraders.com"
										className="hover:text-[#E0C000] block">
										karthik@brktraders.com
									</a>
									<a
										href="mailto:info@brktraders.com"
										className="hover:text-[#E0C000] block">
										info@brktraders.com
									</a>
								</div>
							</li>

							{/* Website */}
							<li className="flex items-center gap-3">
								<FiGlobe className="text-[#E0A000]" />
								<a
									href="https://www.brktraders.com"
									target="_blank"
									className="hover:text-[#E0C000]">
									www.brktraders.com
								</a>
							</li>
						</ul>
					</div>

					{/* Social Icons */}
					<div className="flex gap-4 mt-6">
						{[FaLinkedinIn, FaFacebookF, FaInstagram].map((Icon, i) => (
							<div
								key={i}
								className="w-10 h-10 flex items-center justify-center 
								bg-white/5 backdrop-blur-md border border-[#E0A000]/30
								rounded-full 
								hover:bg-[#E0A000] hover:text-[#000020] 
								hover:scale-105 transition duration-300 cursor-pointer">
								<Icon size={15} />
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-[#E0A000]/20 mt-14 pt-6 text-center text-sm text-gray-400">
				<div className="mt-2">
					Developed by{" "}
					<a
						href="https://hsdev.in"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#E0A000] hover:text-[#E0C000] font-medium transition">
						hsdev
					</a>
				</div>
				© {year} <span className="text-[#E0A000] font-medium">BRK Traders</span>
				. All rights reserved.
			</div>
		</footer>
	);
}
