
const Hero = () => {
	return (
		<div className='w-full h-[750px] bg-[url(/LandingHero.jpg)] bg-cover bg-center bg-no-repeat flex flex-col'>
			<div className='w-full max-w-7xl mx-auto px-8 py-16'>
				<div className='flex flex-col max-w-[45%] justify-center gap-8 self-stretch shadow-lg text-white'>
					{/* Main Heading */}
					<h1 className='text-5xl font-bold mb-6'>
						We&apos;re more than an <br />
						answering service
					</h1>

					{/* Body Text */}
					<p className='text-2xl not-italic font-semibold leading-[normal]'>
						Answering Legal has everything you need to make sure your firm never
						misses another opportunity.
					</p>

					{/* Rating Section */}
					<div className='flex w-56 flex-col items-center'>
						<div className='text-center text-3xl not-italic font-bold'>
							Excellent 4.84
						</div>
						<h1 className='text-[#ffa130] text-5xl font-semibold tracking-widest text-center'>
							★★★★★
						</h1>
						<span className='font-semibold text-xl tracking-normal text-center align-middle'>
							based on 230 reviews
						</span>
					</div>

					{/* CTA Button */}
					<button className='bg-button text-white px-6 py-3 rounded-lg w-fit hover:bg-bHover transition-all duration-300'>
						<span className='text-2xl not-italic font-semibold'>
							See our pricing
						</span>
					</button>
				</div>
			</div>
			<div className='flex flex-col justify-center content-center self-stretch gap-6 px-20'>
				<h2 className='relative self-stretch text-center text-3xl not-italic font-bold after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#3CCED7] after:rounded-full'>
					Heres what we can do for your law firm
				</h2>
			</div>
		</div>
	);
};

export default Hero;
