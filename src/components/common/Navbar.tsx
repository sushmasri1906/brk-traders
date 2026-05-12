"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

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
			className={`fixed w-full z-50 transition-all duration-300 before:absolute before:inset-0 before:bg-black/20 before:pointer-events-none ${
				scrolled
					? "bg-[#000020]/95 backdrop-blur-xl border-b border-[#E0A000]/20 shadow-2xl"
					: "bg-gradient-to-b from-black/50 to-transparent"
			}`}>
			<div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4 relative z-10">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-3 group z-50">
					<div className="relative">
						{/* Premium Glow */}
						<div
							className="
								absolute inset-0
								scale-110
								rounded-[26px]
								bg-[#E0A000]/35
								blur-2xl
								opacity-80
								group-hover:opacity-100
								transition duration-500
							"
						/>

						{/* Main Card */}
						<div
							className="
								relative
								w-[78px] h-[78px]
								sm:w-[86px] sm:h-[86px]
								rounded-[24px]
								bg-black/55
								backdrop-blur-2xl
								border border-[#E0A000]/30
								shadow-[0_10px_40px_rgba(0,0,0,0.55)]
								flex items-center justify-center
								overflow-hidden
								group-hover:scale-105
								transition-all duration-500
							">
							{/* Glass Shine */}
							<div
								className="
									absolute inset-0
									bg-gradient-to-br
									from-white/15
									via-transparent
									to-transparent
								"
							/>

							{/* Inner Glow Ring */}
							<div
								className="
									absolute inset-[2px]
									rounded-[22px]
									border border-white/10
								"
							/>

							<Image
								src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1778573249/BRK_PNG_1_bpalno.png"
								alt="BRK Traders Logo"
								width={68}
								height={68}
								priority
								className="
									relative z-10
									object-contain
									scale-110
									brightness-[2.8]
									contrast-[1.35]
									saturate-[1.3]
									drop-shadow-[0_0_18px_rgba(255,255,255,0.95)]
								"
							/>
						</div>
					</div>

					{/* Brand Text */}
					<div className="hidden sm:flex flex-col leading-tight">
						<h1
							className="
								text-white
								font-black
								tracking-[0.22em]
								text-sm lg:text-base
							">
							BRK TRADERS
						</h1>

						<p
							className="
								text-[#E0A000]
								text-[10px]
								tracking-[0.32em]
								font-medium
								mt-1
							">
							GLOBAL TRADE • TRUST • GROWTH
						</p>
					</div>
				</Link>

				{/* Desktop Menu */}
				<nav className="hidden md:flex items-center gap-10">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="
								relative group
								text-sm font-medium
								text-gray-300
								hover:text-white
								transition duration-300
							">
							{item.name}

							{/* Animated Underline */}
							<span
								className="
									absolute left-0 -bottom-1
									w-0 h-[2px]
									bg-gradient-to-r
									from-[#E0A000]
									to-[#ffb300]
									transition-all duration-300
									group-hover:w-full
								"
							/>
						</Link>
					))}

					{/* CTA Button */}
					<Link
						href="/contact"
						className="
							ml-2 px-6 py-3 rounded-xl
							bg-gradient-to-r
							from-[#E0A000]
							to-[#ffb300]
							text-[#000020]
							font-bold text-sm
							shadow-[0_10px_30px_rgba(224,160,0,0.35)]
							hover:scale-105
							hover:shadow-[0_15px_40px_rgba(224,160,0,0.45)]
							transition duration-300
						">
						Get Started
					</Link>
				</nav>

				{/* Mobile Toggle */}
				<button
					onClick={() => setOpen(!open)}
					className="
						md:hidden
						text-white text-3xl
						p-2.5 rounded-2xl
						bg-white/10
						backdrop-blur-xl
						border border-white/10
						shadow-[0_8px_25px_rgba(0,0,0,0.35)]
						hover:bg-white/15
						transition
					">
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
						transition={{ duration: 0.25 }}
						className="
							md:hidden
							bg-[#000020]/95
							backdrop-blur-2xl
							px-6 py-6
							space-y-5
							border-t border-[#E0A000]/20
						">
						{NAV_ITEMS.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								onClick={() => setOpen(false)}
								className="
									block
									text-lg font-medium
									text-gray-300
									hover:text-[#E0A000]
									transition
								">
								{item.name}
							</Link>
						))}

						{/* Mobile CTA */}
						<Link
							href="/contact"
							onClick={() => setOpen(false)}
							className="
								block text-center
								mt-4 px-5 py-3 rounded-xl
								bg-gradient-to-r
								from-[#E0A000]
								to-[#ffb300]
								text-[#000020]
								font-bold
								shadow-lg
								hover:opacity-90
								transition
							">
							Get Started
						</Link>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
