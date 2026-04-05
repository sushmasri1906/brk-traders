"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
	const phoneNumber = "919985201444"; // 👉 replace if needed (no +, include country code)

	const message = encodeURIComponent(
		"Hello BRK Traders, I would like to know more about your services.",
	);

	const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

	return (
		<a
			href={whatsappLink}
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-6 right-6 z-50 group">
			<div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition">
				{/* Glow */}
				<div className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-md opacity-0 group-hover:opacity-100 transition" />

				{/* Icon */}
				<FaWhatsapp className="text-white text-2xl relative z-10" />
			</div>
		</a>
	);
}
