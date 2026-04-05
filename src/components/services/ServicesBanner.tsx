import HeroBanner from "@/components/common/HeroBanner";

export default function ServicesBanner() {
	return (
		<HeroBanner
			subtitle="Our Services"
			title="Comprehensive Trade & Business Solutions"
			description="From trading and brokerage to sourcing and global logistics, BRK Traders delivers end-to-end solutions designed to streamline operations and maximize business value."
			image="https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775211958/premium_photo-1661964050170-b9e54345217d_tbmw25.jpg"
			primaryBtn={{
				label: "Get in Touch",
				href: "/contact",
			}}
			secondaryBtn={{
				label: "Explore Industries",
				href: "/industries",
			}}
		/>
	);
}
