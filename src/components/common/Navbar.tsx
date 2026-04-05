"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
	{ name: "Home", href: "/" },
	{ name: "About Us", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Industries", href: "/industries" },
	{ name: "Contact", href: "/contact" },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-[#000020]/90 backdrop-blur-xl border-b border-[#E0A000]/20 shadow-lg"
					: "bg-transparent"
			}`}>
			<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
				{/* Logo */}
				<Link href="/" className="text-xl font-semibold tracking-wide">
					<span className="text-[#E0A000] font-bold">BRK</span>{" "}
					<span className="text-white">TRADERS</span>
				</Link>

				{/* Desktop Menu */}
				<nav className="hidden md:flex items-center gap-10">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="relative group text-sm font-medium text-gray-300 hover:text-white transition">
							{item.name}

							{/* Gold underline */}
							<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#E0A000] to-[#E08000] transition-all duration-300 group-hover:w-full"></span>
						</Link>
					))}

					{/* CTA */}
					<Link
						href="/contact"
						className="ml-4 px-5 py-2 rounded-lg 
						bg-gradient-to-r from-[#E0A000] to-[#E08000] 
						text-[#000020] font-semibold 
						hover:opacity-90 transition shadow-md">
						Get Started
					</Link>
				</nav>

				{/* Mobile Toggle */}
				<button
					onClick={() => setOpen(!open)}
					className="md:hidden text-white text-2xl">
					{open ? <FiX /> : <FiMenu />}
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="md:hidden bg-[#000020] px-6 py-6 space-y-5 border-t border-[#E0A000]/20">
						{NAV_ITEMS.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								onClick={() => setOpen(false)}
								className="block text-lg font-medium text-gray-300 hover:text-[#E0A000] transition">
								{item.name}
							</Link>
						))}

						{/* Mobile CTA */}
						<Link
							href="/contact"
							onClick={() => setOpen(false)}
							className="block text-center mt-4 px-5 py-3 rounded-lg 
							bg-gradient-to-r from-[#E0A000] to-[#E08000] 
							text-[#000020] font-semibold 
							hover:opacity-90 transition">
							Get Started
						</Link>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
