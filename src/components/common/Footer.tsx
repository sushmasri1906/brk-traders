"use client";

import Link from "next/link";
import { FiMapPin, FiMail, FiPhone, FiGlobe } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-[#0B1D26] text-[#CBD5E1] pt-16 pb-8">
			<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
				{/* Brand */}
				<div>
					<h2 className="text-2xl font-bold text-white">
						<span className="text-[#D4AF37]">BRK</span> TRADERS
					</h2>
					<p className="mt-4 text-sm leading-relaxed">
						BRK Traders is a partnership firm engaged in trading, brokerage,
						sourcing, and business facilitation across multiple industries,
						delivering reliable solutions in domestic and international markets.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-white font-semibold mb-4">Quick Links</h3>
					<ul className="space-y-2 text-sm">
						{["Home", "About Us", "Services", "Industries", "Contact"].map(
							(item, i) => (
								<li key={i}>
									<Link
										href={`/${item.toLowerCase().replace(" ", "")}`}
										className="hover:text-[#D4AF37] transition">
										{item}
									</Link>
								</li>
							),
						)}
					</ul>
				</div>

				{/* Services */}
				<div>
					<h3 className="text-white font-semibold mb-4">Services</h3>
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
								className="hover:text-[#D4AF37] transition cursor-pointer">
								{item}
							</li>
						))}
					</ul>
				</div>

				{/* Contact (Scrollable) */}
				<div>
					<h3 className="text-white font-semibold mb-4">Contact</h3>

					<div className="max-h-[220px] overflow-y-auto pr-2 custom-scroll">
						<ul className="space-y-3 text-sm">
							{/* Address */}
							<li className="flex items-start gap-2">
								<FiMapPin className="text-[#D4AF37] mt-1" />
								<span>
									H.No 7-1-414/20-21, F.No. 203 <br />
									Koushik Sai Rama Residency, <br />
									Srinivas Colony-East, Beside ICICI Bank Lane, <br />
									Sanjeev Reddy Nagar, Hyderabad 500038, Telangana.
								</span>
							</li>

							{/* Phones */}
							<li className="flex items-start gap-2">
								<FiPhone className="text-[#D4AF37] mt-1" />
								<div>
									<a
										href="tel:9985201444"
										className="hover:text-[#D4AF37] block">
										+91 9985201444
									</a>
									<a
										href="tel:9052143888"
										className="hover:text-[#D4AF37] block">
										+91 9052143888
									</a>
								</div>
							</li>

							{/* Emails */}
							<li className="flex items-start gap-2">
								<FiMail className="text-[#D4AF37] mt-1" />
								<div>
									<a
										href="mailto:rajesh@brktraders.com"
										className="hover:text-[#D4AF37] block">
										rajesh@brktraders.com
									</a>
									<a
										href="mailto:karthik@brktraders.com"
										className="hover:text-[#D4AF37] block">
										karthik@brktraders.com
									</a>
									<a
										href="mailto:info@brktraders.com"
										className="hover:text-[#D4AF37] block">
										info@brktraders.com
									</a>
								</div>
							</li>

							{/* Website */}
							<li className="flex items-center gap-2">
								<FiGlobe className="text-[#D4AF37]" />
								<a
									href="https://www.brktraders.com"
									target="_blank"
									className="hover:text-[#D4AF37]">
									www.brktraders.com
								</a>
							</li>
						</ul>
					</div>

					{/* Social Icons */}
					<div className="flex gap-3 mt-5">
						{[FaLinkedinIn, FaFacebookF, FaInstagram].map((Icon, i) => (
							<div
								key={i}
								className="w-9 h-9 flex items-center justify-center bg-[#1F3A5F] rounded-full hover:bg-[#D4AF37] hover:text-[#0B1D26] transition cursor-pointer">
								<Icon size={14} />
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-[#1F3A5F] mt-12 pt-6 text-center text-sm">
				© {new Date().getFullYear()} BRK Traders. All rights reserved.
			</div>
		</footer>
	);
}
