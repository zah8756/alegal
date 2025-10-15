import Card from "./Card";
import Image from "next/image";

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
			<div className='max-w-7xl mx-auto'>
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

				<div className='flex justify-between items-center self-stretch px-16 py-8'>
					<div className='flex justify-center gap-16 items-center content-center w-full'>
						<Image
							src='/CRM-Graphic.png'
							alt='Legal Video Conferencing'
							width={534}
							height={453}
						/>
						<div className='flex min-w-100 max-w-133.5 py-8 flex-col justify-center items-start gap-8'>
							<h2 className='relative self-stretch text-3xl font-bold after:content-[""] after:absolute after:bottom-[-12px] after:left-0 after:w-full after:h-[2px] after:bg-[#3CCED7] after:rounded-full'>
								Your data&apos;s in good hands
							</h2>
							<span className='font-normal leading-8'>
								Our partnership with your CRM enables a seamless flow of
								information.
							</span>
							<ol className='gap-2 flex flex-col'>
								<li className='flex items-center gap-4'>
									<Image
										src='/Checkmark.svg'
										alt='Checkmark'
										width={32}
										height={32}
									/>
									Answering Legal&apos;s receptionists take down exactly the
									information you need.
								</li>
								<li className='flex items-center gap-4'>
									<Image
										src='/Checkmark.svg'
										alt='Checkmark'
										width={32}
										height={32}
									/>
									Through native API integrations with our proprietary software,
									we make sure it&apos;s immediately where you need it to be.
								</li>
								<li className='flex items-center gap-4'>
									<Image
										src='/Checkmark.svg'
										alt='Checkmark'
										width={32}
										height={32}
									/>
									All you&apos;ll have to do is open your CRM and follow up to
									secure your new client&apos;s business.
								</li>
							</ol>
							<button className='bg-button text-white px-6 py-3 rounded-lg w-fit hover:bg-bHover transition-all duration-300'>
								<span className='text-2xl not-italic font-semibold'>
									See our pricing
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
