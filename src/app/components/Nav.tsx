import Image from "next/image";

const Nav = () => {
	return (
		<nav className='bg-[#F7F5F5D9] w-full min-h-[133px] gap-4 flex flex-col sticky px-8 pt-8 pb-6'>
			<div className='min-w-[950px] gap-8 flex flex-row justify-end'>
				<span className='text-xl tracking-normal align-middle underline text-[#999999]'>
					Support
				</span>
				<span className='text-[#0360E6] text-2xl font-semibold'>
					(631) 689-9700
				</span>
			</div>
			<div className='flex flex-row justify-between min-w-[950px] items-center'>
				<Image
					src='/AnsweringLegalTM_Blue.png'
					alt='Picture of the logo'
					width={293}
					height={48}
				/>
				<ul className='flex flex-row gap-8 text-[#161641] font-semibold text-xl'>
					<li>Products ⌄</li>
					<li>About ⌄</li>
					<li>Resources ⌄</li>
					<li>Pricing</li>
				</ul>
				<div className='gap-8'>
					<Image
						src='/Search.svg'
						alt='magnifying glass search icon'
						width={32}
						height={32}></Image>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
