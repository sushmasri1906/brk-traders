"use client";

export default function MapSection() {
	return (
		<section className="relative bg-gradient-to-r from-[#000040] to-[#000020] py-24 overflow-hidden">
			{/* Glow Background */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-10 w-[250px] h-[250px] bg-[#E0A000]/10 blur-[120px] rounded-full" />
				<div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-[#E08000]/10 blur-[120px] rounded-full" />
			</div>

			<div className="relative max-w-7xl mx-auto px-6">
				{/* Title */}
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white">
						Our{" "}
						<span className="bg-gradient-to-r from-[#E0A000] via-[#E0C000] to-[#E08000] bg-clip-text text-transparent">
							Location
						</span>
					</h2>

					<p className="mt-3 text-gray-400">
						Visit us at our office in Hyderabad.
					</p>
				</div>

				{/* Map */}
				<div className="mt-12 rounded-2xl overflow-hidden relative p-[1px]">
					{/* Glow Border */}
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E0A000]/30 to-[#E08000]/20 blur-md opacity-70" />

					{/* Map Container */}
					<div className="relative rounded-2xl overflow-hidden border border-white/10">
						<iframe
							src="https://www.google.com/maps?q=Koushik+Sai+Rama+Residency,+Sanjeev+Reddy+Nagar,+Hyderabad&output=embed"
							width="100%"
							height="420"
							style={{ border: 0 }}
							loading="lazy"
							allowFullScreen
							className="grayscale contrast-125 hover:grayscale-0 transition duration-500"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
