"use client";

export default function MapSection() {
	return (
		<section className="bg-[#F8FAFC] py-20">
			<div className="max-w-7xl mx-auto px-6">
				{/* Title */}
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
						Our <span className="text-[#D4AF37]">Location</span>
					</h2>
					<p className="mt-3 text-gray-600">
						Visit us at our office in Hyderabad.
					</p>
				</div>

				{/* Map */}
				<div className="mt-10 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
					<iframe
						src="https://www.google.com/maps?q=Koushik+Sai+Rama+Residency,+Sanjeev+Reddy+Nagar,+Hyderabad&output=embed"
						width="100%"
						height="400"
						style={{ border: 0 }}
						loading="lazy"
						allowFullScreen></iframe>
				</div>
			</div>
		</section>
	);
}
