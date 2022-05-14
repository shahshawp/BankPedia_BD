import Image from "next/image";
import React from "react";

import bannerDemo from "../public/images/banner-demo.png";

const Banner = () => {
	return (
		<div className="w-full py-20 bg-gradient-to-t from-sky-800 via-cyan-800 to-teal-600">
			<div className="container mx-auto flex items-center justify-center">
				{slideItems.map((item) => (
					<Slider key={item.title} item={item} />
				))}
			</div>
		</div>
	);
};

export default Banner;

const Slider = ({ item }) => {
	const { subtitle, title, description, registration} = item;
	return (
		<div className="w-full flex items-center justify-between">
			<div className="w-7/12 flex flex-col gap-4">
				<h4 className="text-5xl font-bold"><span className="tracking-wider text-white font-sans ">BankPedia</span>
								<span className="text-5xl text-green-500">BD</span>{subtitle}</h4>
				<h2 className="text-4xl font-bold text-">{title}</h2>
				<p className="text-lg font-bold font-sans text-white">{description}</p>
				<button className="bg-blue-500 hover:bg-green-700 text-black w-48 text-3xl font-bold py-2 px-4 rounded-full">
  Join Us
</button>
			</div>
		
			<div className="w-5/12">
				<Image src={bannerDemo} alt="Banner" />
			</div>
		</div>
	);
};

const slideItems = [
	{
		subtitle: "",
		title: "One-stop helping for bank services",
		description:
		"Welcome to the latest online bank portal, providing one-stop for all informations of banks operating in Bangladesh. You can search your desired banks, loans, cards services nearby to get up-to-date by getting feedback from a real agent, which covers online resource of all local-foreign, private-public and commercial-specialized bank informations those are operating their services in Bangladesh.",
		registration:"Join Us"
	},

];
