"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
	{
		title: "Empowering Trade. Connecting Opportunities.",
		desc: "BRK Traders is a dynamic partnership firm specializing in trading, brokerage, sourcing, and facilitation across diverse industries — delivering reliable solutions in domestic and international markets.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775211958/premium_photo-1661964050170-b9e54345217d_tbmw25.jpg",
	},
	{
		title: "Global Sourcing. Seamless Execution.",
		desc: "We bridge suppliers and clients with efficient sourcing, logistics coordination, and end-to-end trade facilitation.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775212305/aerial-view-container-terminal-cargo-logistics-import-export-background-ship-crane-bridge-417961312_yjmnwm.webp",
	},
	{
		title: "Driven by Expertise. Powered by Trust.",
		desc: "With a strong network and industry knowledge, we ensure reliable partnerships and consistent value delivery.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775212439/modern-supply-chains_1024x576_xjadxl.avif",
	},
];

export default function Hero() {
	const [index, setIndex] = useState(0);

	// Auto slide
	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((prev) => (prev + 1) % slides.length);
		}, 6000);
		return () => clearInterval(timer);
	}, []);

	// Preload images (important)
	useEffect(() => {
		slides.forEach((slide) => {
			const img = new Image();
			img.src = slide.img;
		});
	}, []);

	return (
		<section className="relative h-screen w-full overflow-hidden bg-[#0B1D26]">
			{/* Background Slides (Stacked for smooth crossfade) */}
			{slides.map((slide, i) => (
				<motion.img
					key={i}
					src={slide.img}
					initial={{ opacity: 0 }}
					animate={{ opacity: i === index ? 1 : 0 }}
					transition={{ duration: 1.2, ease: "easeInOut" }}
					className="absolute inset-0 w-full h-full object-cover"
				/>
			))}

			{/* Gradient Overlay (CRUCIAL) */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60 z-[1]" />

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
				<div className="max-w-2xl text-white">
					{/* Title */}
					<motion.h1
						key={slides[index].title}
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-4xl md:text-6xl font-bold leading-tight">
						{slides[index].title}
					</motion.h1>

					{/* Description */}
					<motion.p
						key={slides[index].desc}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.8 }}
						className="mt-6 text-lg text-gray-200">
						{slides[index].desc}
					</motion.p>

					{/* Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="mt-8 flex gap-4">
						<button className="bg-[#D4AF37] text-[#0B1D26] px-6 py-3 rounded-md font-semibold hover:scale-105 transition">
							Get in Touch
						</button>

						<button className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0B1D26] transition">
							Explore Services
						</button>
					</motion.div>
				</div>
			</div>

			{/* Dots */}
			<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
				{slides.map((_, i) => (
					<div
						key={i}
						onClick={() => setIndex(i)}
						className={`w-3 h-3 rounded-full cursor-pointer transition ${
							i === index ? "bg-[#D4AF37]" : "bg-white/50"
						}`}
					/>
				))}
			</div>
		</section>
	);
}
