import HeroBanner from "@/components/common/HeroBanner";

export default function AboutBanner() {
	return (
		<HeroBanner
			subtitle="About Us"
			title="About BRK Traders"
			description="Building trusted trade relationships through expertise, transparency, and seamless execution across domestic and international markets."
			image="https://res.cloudinary.com/drhzztyoc/image/upload/v1778163704/premium_photo-1661964050170-b9e54345217d_tbmw25_qeivwj.jpg"
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
