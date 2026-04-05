import HeroBanner from "@/components/common/HeroBanner";

export default function IndustriesBanner() {
	return (
		<HeroBanner
			subtitle="Industries We Serve"
			title="Delivering Solutions Across Diverse Industries"
			description="BRK Traders supports multiple industries including manufacturing, retail, construction, and global trade — providing reliable sourcing, distribution, and business facilitation services."
			image="https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775211958/premium_photo-1661964050170-b9e54345217d_tbmw25.jpg"
			primaryBtn={{
				label: "Get in Touch",
				href: "/contact",
			}}
			secondaryBtn={{
				label: "Explore Services",
				href: "/services",
			}}
		/>
	);
}
