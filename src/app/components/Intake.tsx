import Image from "next/image";

const Intake = () => {
	return (
		<div className='flex flex-col-reverse md:flex-row justify-center gap-8 md:gap-16 items-center content-center w-full py-8 px-4'>
			<div className='flex w-full md:max-w-lg py-8 flex-col justify-center items-start gap-4 md:gap-8'>
				<h2 className='relative self-stretch text-2xl md:text-3xl font-bold after:content-[""] after:absolute after:bottom-[-8px] md:after:bottom-[-12px] after:left-0 after:w-full after:h-[2px] after:bg-[#3CCED7] after:rounded-full'>
					Design your perfect legal intake process
				</h2>
				<span className='font-normal leading-6 md:leading-8 text-lg md:text-xl'>
					Get everything you need out of every new client call. The virtual
					receptionists at our legal intake call center will use your unique
					specifications to perform a legal intake for every new client caller.
				</span>
				<button className='bg-button text-white px-4 md:px-6 py-2 md:py-3 rounded-lg  w-fit hover:bg-bHover transition-all duration-300'>
					<span className='text-lg md:text-2xl not-italic font-semibold'>
						See our pricing
					</span>
				</button>
			</div>
			<Image
				src='/Receptionist_IMG.png'
				alt='Legal Intake'
				width={400}
				height={340}
				className='w-full max-w-md h-auto'
			/>
		</div>
	);
};

export default Intake;
