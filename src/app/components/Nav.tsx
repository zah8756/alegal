import Image from "next/image";

const Nav = () => {
	return (
		<nav className='bg-[#ffffff] w-full min-h-[133px] gap-2 flex flex-col sticky px-8 pt-8 pb-6'>
			<div className='min-w-[950px] gap-8 flex flex-row justify-end'>
				<span className='text-xl tracking-normal align-middle underline text-[#999999]'>
					Support
				</span>
				<span className='text-[#0360E6] text-2xl font-semibold'>
					(631) 689-9700
				</span>
			</div>

			<div className='flex flex-row justify-between min-w-[950px] items-center'>
				{/* Logo*/}
				<Image
					src='/AnsweringLegalTM_Blue.png'
					alt='Answering Legal Logo'
					width={393}
					height={48}
				/>

				{/* Navigation links */}
				<ul className='flex flex-row gap-10 text-[#161641] font-semibold text-2xl'>
					<li className='hover:text-button cursor-pointer'>Products ⌄</li>
					<li className='hover:text-button cursor-pointer'>About ⌄</li>
					<li className='hover:text-button cursor-pointer'>Resources ⌄</li>
					<li className='hover:text-button cursor-pointer'>Pricing</li>
				</ul>

				{/* Search*/}
				<div className='gap-8 flex'>
					<Image
						src='/Search.svg'
						alt='magnifying glass search icon'
						width={64}
						height={64}
						sizes='100vh'></Image>
					<button className='bg-button text-2xl font-semibold px-4 py-3 rounded-3xl'>
						Try for Free
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
