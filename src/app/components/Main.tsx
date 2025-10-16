"use client";
import { useState, useEffect } from "react";

import Card from "./Card";
import Crm from "./Crm";
import Intake from "./Intake";
import Blog from "./Blog";

const cards = [
	{
		image: "/AL_2ColorIcon-AnsweringService.svg",
		title: "Legal answering service",
		description:
			"With 24/7 legal intake, you'll never miss a potential client's call.",
	},
	{
		image: "/AL_2ColorIcon-Chatbot.svg",
		title: ["AI intake", "chatbot"],
		description:
			"Turn web leads into clients with a chatbot powered by the latest in AI technology.",
	},
	{
		image: "/AL_2ColorIcon-LVCv2.svg",
		title: "Live translation services",
		description:
			"Break through the language barrier and schedule video conferences with live interpreters.",
	},
];

const Main = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return (
		<main className='w-full mx-auto px-4 md:px-8 pb-16 text-[#141414] bg-[#F7F5F5] min-h-[1000px] '>
			<div className='max-w-7xl mx-auto flex flex-col gap-8 md:gap-12.5'>
				<div className='flex flex-col md:flex-row justify-center content-center gap-4 md:gap-8 items-center'>
					{isMobile && (
						<>
							<div className='flex flex-col justify-center content-center self-stretch gap-4 py-8'>
								<h2 className='relative text-center text-3xl not-italic font-bold after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#3CCED7] after:rounded-full'>
									Heres what we can do for your law firm
								</h2>
							</div>
						</>
					)}
					{cards.map((card, index) => (
						<Card
							key={index}
							image={card.image}
							title={card.title}
							description={card.description}
						/>
					))}
				</div>

				<div className='flex flex-col justify-between items-center self-stretch px-4 md:px-12 py-4 md:py-8 gap-8 md:gap-12.5'>
					<Crm />
					<Intake />
					<Blog />
				</div>
			</div>
		</main>
	);
};

export default Main;
