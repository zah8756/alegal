import Image from "next/image";

const Crm = () => {
	return (
		<div className='flex justify-center gap-16 items-center content-center w-full py-8'>
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
				<span className='font-normal leading-8 text-xl'>
					Our partnership with your CRM enables a seamless flow of information.
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
						Through native API integrations with our proprietary software, we
						make sure it&apos;s immediately where you need it to be.
					</li>
					<li className='flex items-center gap-4'>
						<Image
							src='/Checkmark.svg'
							alt='Checkmark'
							width={32}
							height={32}
						/>
						All you&apos;ll have to do is open your CRM and follow up to secure
						your new client&apos;s business.
					</li>
				</ol>
				<button className='bg-button text-white px-6 py-3 rounded-lg w-fit hover:bg-bHover transition-all duration-300'>
					<span className='text-2xl not-italic font-semibold'>
						See our pricing
					</span>
				</button>
			</div>
		</div>
	);
};

export default Crm;
