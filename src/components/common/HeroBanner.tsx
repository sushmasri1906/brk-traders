"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type HeroBannerProps = {
	title: string;
	subtitle?: string;
	description?: string;
	image: string;
	primaryBtn?: {
		label: string;
		href: string;
	};
	secondaryBtn?: {
		label: string;
		href: string;
	};
};

export default function HeroBanner({
	title,
	subtitle,
	description,
	image,
	primaryBtn,
	secondaryBtn,
}: HeroBannerProps) {
	return (
		<section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60 z-[1]" />

			<Image
				src={image}
				alt="banner"
				fill
				priority
				className="object-cover scale-105"
			/>

			{/* Content */}
			<div className="relative z-10 max-w-4xl text-center px-6">
				{/* Subtitle */}
				{subtitle && (
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-4">
						{subtitle}
					</motion.p>
				)}

				{/* Title */}
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
					{title}
				</motion.h1>

				{/* Description */}
				{description && (
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mt-4 text-gray-200 text-lg">
						{description}
					</motion.p>
				)}

				{/* Buttons */}
				<div className="mt-8 flex justify-center gap-4 flex-wrap">
					{primaryBtn && (
						<Link href={primaryBtn.href}>
							<button className="px-6 py-3 rounded-xl bg-[#D4AF37] text-[#0B1D26] font-semibold hover:opacity-90 transition">
								{primaryBtn.label}
							</button>
						</Link>
					)}

					{secondaryBtn && (
						<Link href={secondaryBtn.href}>
							<button className="px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-[#0B1D26] transition">
								{secondaryBtn.label}
							</button>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
}
