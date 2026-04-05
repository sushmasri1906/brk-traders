import HeroBanner from "@/components/common/HeroBanner";

export default function AboutBanner() {
	return (
		<HeroBanner
			subtitle="About Us"
			title="About BRK Traders"
			description="Building trusted trade relationships through expertise, transparency, and seamless execution across domestic and international markets."
			image="https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775211958/premium_photo-1661964050170-b9e54345217d_tbmw25.jpg"
			primaryBtn={{
				label: "Contact Us",
				href: "/contact",
			}}
			secondaryBtn={{
				label: "Our Services",
				href: "/services",
			}}
		/>
	);
}
