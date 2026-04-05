import FooterInfoPremium from "@/components/common/FooterInfo";
import Industries from "@/components/industries/Industries";
import IndustriesBanner from "@/components/industries/IndustriesBanner";
import React from "react";

const page = () => {
	return (
		<>
			<IndustriesBanner />
			<Industries />
			<FooterInfoPremium />
		</>
	);
};

export default page;
