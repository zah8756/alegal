import Image from "next/image";

const Intake = () => {
	return (
		<div className='flex justify-center gap-16 items-center content-center w-ful py-8'>
			<div className='flex min-w-100 max-w-133.5 py-8 flex-col justify-center items-start gap-8'>
				<h2 className='relative self-stretch text-3xl font-bold after:content-[""] after:absolute after:bottom-[-12px] after:left-0 after:w-full after:h-[2px] after:bg-[#3CCED7] after:rounded-full'>
					Design your perfect legal intake process
				</h2>
				<span className='font-normal leading-8 text-xl'>
					Get everything you need out of every new client call. The virtual
					receptionists at our legal intake call center will use your unique
					specifications to perform a legal intake for every new client caller.
				</span>
				<button className='bg-button text-white px-6 py-3 rounded-lg w-fit hover:bg-bHover transition-all duration-300'>
					<span className='text-2xl not-italic font-semibold'>
						See our pricing
					</span>
				</button>
			</div>
			<Image
				src='/Receptionist_IMG.png'
				alt='Legal Intake'
				width={534}
				height={453}
			/>
		</div>
	);
};

export default Intake;
