import Image from "next/image";

interface CardProps {
	image: string;
	title: string | string[];
	description: string;
}

const Card = ({ image, title, description }: CardProps) => {
	return (
		<div className='flex justify-center content-center flex-col gap-6 items-center px-6 py-3 rounded-3xl bg-white max-w-sm min-h-93  shadow-custom -mt-18'>
			<Image
				src={image}
				alt={Array.isArray(title) ? title.join(" ") : title}
				width={100}
				height={100}
			/>
			<h2 className=' relative flex h-16 flex-col justify-center self-stretch text-center text-3xl not-italic font-bold after:content-[""] after:absolute after:bottom-[-12px] after:left-0 after:w-full after:h-[2px] after:bg-[#3CCED7] after:rounded-full'>
				{Array.isArray(title) ? (
					title.map((line, index) => <span key={index}>{line}</span>)
				) : (
					<span>{title}</span>
				)}
			</h2>
			<span className='flex pt-5 flex-col justify-center self-stretch text-center text-base not-italic font-semibold'>
				{description}
			</span>
		</div>
	);
};

export default Card;
