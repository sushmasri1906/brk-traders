import ContactBanner from "@/components/contact/ContactBanner";
import ContactSection from "@/components/contact/ContactSection";
import React from "react";
import MapSection from "@/components/home/MapSection";

const page = () => {
	return (
		<>
			<ContactBanner />
			<ContactSection />
			<MapSection />
		</>
	);
};

export default page;
