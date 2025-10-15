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
	return (
		<main className='w-full mx-auto px-8 pb-16 text-[#141414] bg-[#F7F5F5] min-h-[1000px]'>
			<div className='max-w-7xl mx-auto flex flex-col gap-12.5'>
				<div className='flex justify-center content-center flex-row gap-8 '>
					{cards.map((card, index) => (
						<Card
							key={index}
							image={card.image}
							title={card.title}
							description={card.description}
						/>
					))}
				</div>

				<div className='flex flex-col justify-between items-center self-stretch px-12 py-8 gap-12.5'>
					<Crm />
					<Intake />
					<Blog />
				</div>
			</div>
		</main>
	);
};

export default Main;
