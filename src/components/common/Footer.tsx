"use client";

import Link from "next/link";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
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
						Delivering reliable trading, sourcing, and brokerage solutions
						across industries with a focus on transparency and long-term
						partnerships.
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
							"Brokerage",
							"Sourcing",
							"Import & Export",
							"Distribution",
						].map((item, i) => (
							<li
								key={i}
								className="hover:text-[#D4AF37] transition cursor-pointer">
								{item}
							</li>
						))}
					</ul>
				</div>

				{/* Contact */}
				<div>
					<h3 className="text-white font-semibold mb-4">Contact</h3>
					<ul className="space-y-3 text-sm">
						<li className="flex items-center gap-2">
							<FiMapPin className="text-[#D4AF37]" />
							Hyderabad, India
						</li>
						<li className="flex items-center gap-2">
							<FiMail className="text-[#D4AF37]" />
							info@brktraders.com
						</li>
						<li className="flex items-center gap-2">
							<FiPhone className="text-[#D4AF37]" />
							+91 XXXXX XXXXX
						</li>
					</ul>

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
