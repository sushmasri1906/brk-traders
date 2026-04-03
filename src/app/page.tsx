import React from "react";
import Hero from "@/components/home/Hero";
import AboutMini from "@/components/home/AboutMini";
import ServicesMini from "@/components/home/ServicesMini";

const page = () => {
	return (
		<>
			<Hero />
			<AboutMini />
			<ServicesMini />
		</>
	);
};

export default page;
