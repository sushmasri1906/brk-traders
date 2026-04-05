import React from "react";
import Hero from "@/components/home/Hero";
import AboutMini from "@/components/home/AboutMini";
import ServicesMini from "@/components/home/ServicesMini";
import FooterInfoPremium from "@/components/common/FooterInfo";
import ClientsSection from "@/components/home/ClientSection";
import Testimonials from "@/components/home/Testimonials";

import Stats from "@/components/home/Stats";
import Strength from "@/components/home/Strength";
const page = () => {
	return (
		<>
			<Hero />
			<AboutMini />
			<ServicesMini />
			<Stats />

			<ClientsSection />
			<Testimonials />
			<Strength />
			<FooterInfoPremium />
		</>
	);
};

export default page;
