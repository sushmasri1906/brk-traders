import ServicesBanner from "@/components/services/ServicesBanner";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import React from "react";
import FooterInfoPremium from "@/components/common/FooterInfo";

const page = () => {
	return (
		<>
			<ServicesBanner />
			<ServicesShowcase />
			<FooterInfoPremium />
		</>
	);
};

export default page;
