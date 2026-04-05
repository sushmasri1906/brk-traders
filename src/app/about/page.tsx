import AboutBanner from "@/components/about/AboutBanner";
import Leadership from "@/components/about/leadership";
import WhyChooseUs from "@/components/about/WhyUs";
import FooterInfoPremium from "@/components/common/FooterInfo";
import Process from "@/components/home/Process";

const page = () => {
	return (
		<>
			<AboutBanner />
			<Process />
			<WhyChooseUs />
			<Leadership />
			<FooterInfoPremium />
		</>
	);
};

export default page;
