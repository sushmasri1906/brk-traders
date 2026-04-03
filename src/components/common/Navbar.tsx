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
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled ? "bg-[#0B1D26] shadow-lg" : "bg-transparent"
			}`}>
			<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
				{/* Logo */}
				<Link href="/" className="text-xl font-semibold tracking-wide">
					<span className="text-[#D4AF37]">BRK</span>{" "}
					<span className={`${scrolled ? "text-white" : "text-white"}`}>
						TRADERS
					</span>
				</Link>

				{/* Desktop Menu */}
				<nav className="hidden md:flex items-center gap-8">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="relative text-sm font-medium text-white hover:text-[#D4AF37] transition">
							{item.name}
							<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 hover:w-full"></span>
						</Link>
					))}
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
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -20, opacity: 0 }}
						className="md:hidden bg-white px-6 py-6 space-y-4">
						{NAV_ITEMS.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								onClick={() => setOpen(false)}
								className="block text-lg font-medium text-[#0F172A] hover:text-[#D4AF37]">
								{item.name}
							</Link>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
