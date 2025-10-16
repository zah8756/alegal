import Image from "next/image";

const Crm = () => {
	return (
		<div className='flex flex-col md:flex-row justify-center gap-8 md:gap-16 items-center content-center w-full py-8 px-4'>
			<Image
				src='/CRM-Graphic.png'
				alt='Legal Video Conferencing'
				width={400}
				height={340}
				className='w-full max-w-md h-auto'
			/>
			<div className='flex w-full md:max-w-lg py-8 flex-col justify-center items-start gap-4 md:gap-8'>
				<h2 className='relative self-stretch text-2xl md:text-3xl font-bold after:content-[""] after:absolute after:bottom-[-8px] md:after:bottom-[-12px] after:left-0 after:w-full after:h-[2px] after:bg-[#3CCED7] after:rounded-full'>
					Your data&apos;s in good hands
				</h2>
				<span className='font-normal leading-6 md:leading-8 text-lg md:text-xl'>
					Our partnership with your CRM enables a seamless flow of information.
				</span>
				<ol className='gap-2 flex flex-col'>
					<li className='flex items-center gap-4'>
						<Image
							src='/Checkmark.svg'
							alt='Checkmark'
							width={24}
							height={24}
						/>
						<span className='text-sm md:text-base'>
							Answering Legal&apos;s receptionists take down exactly the
							information you need.
						</span>
					</li>
					<li className='flex items-center gap-4'>
						<Image
							src='/Checkmark.svg'
							alt='Checkmark'
							width={24}
							height={24}
						/>
						<span className='text-sm md:text-base'>
							Through native API integrations with our proprietary software, we
							make sure it&apos;s immediately where you need it to be.
						</span>
					</li>
					<li className='flex items-center gap-4'>
						<Image
							src='/Checkmark.svg'
							alt='Checkmark'
							width={24}
							height={24}
						/>
						<span className='text-sm md:text-base'>
							All you&apos;ll have to do is open your CRM and follow up to
							secure your new client&apos;s business.
						</span>
					</li>
				</ol>
				<button className='bg-button text-white px-4 md:px-6 py-2 md:py-3 rounded-lg w-fit hover:bg-bHover transition-all cursor-pointer duration-300'>
					<span className='text-lg md:text-2xl not-italic font-semibold'>
						See our pricing
					</span>
				</button>
			</div>
		</div>
	);
};

export default Crm;
