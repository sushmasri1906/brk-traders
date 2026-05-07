import HeroBanner from "@/components/common/HeroBanner";

export default function IndustriesBanner() {
	return (
		<HeroBanner
			subtitle="Industries We Serve"
			title="Delivering Solutions Across Diverse Industries"
			description="BRK Traders supports multiple industries including manufacturing, retail, construction, and global trade — providing reliable sourcing, distribution, and business facilitation services."
			image="https://res.cloudinary.com/drhzztyoc/image/upload/v1778163704/premium_photo-1661964050170-b9e54345217d_tbmw25_qeivwj.jpg"
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
