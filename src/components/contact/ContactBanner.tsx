import HeroBanner from "@/components/common/HeroBanner";

export default function ContactBanner() {
	return (
		<HeroBanner
			subtitle="Contact Us"
			title="Let’s Connect & Grow Your Business"
			description="Reach out to BRK Traders for reliable trading, sourcing, and business facilitation solutions. Our team is ready to assist you with seamless execution and trusted partnerships."
			image="https://res.cloudinary.com/drhzztyoc/image/upload/v1778163704/premium_photo-1661964050170-b9e54345217d_tbmw25_qeivwj.jpg"
			primaryBtn={{
				label: "Send Message",
				href: "/contact#form",
			}}
			secondaryBtn={{
				label: "Our Services",
				href: "/services",
			}}
		/>
	);
}
