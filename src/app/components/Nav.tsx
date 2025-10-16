"use client";
import { useState } from "react";
import Image from "next/image";

const Nav = () => {
	const [active, setActive] = useState<string>("");

	const handleActive = (path: string) => {
		setActive(path);
	};

	return (
		<nav className='bg-[#ffffff] w-full min-h-[133px] gap-2 flex flex-col sticky top-0 z-50 px-4 md:px-6 pt-8 pb-4 overflow-hidden'>
			<div className='hidden md:flex w-full mx-auto gap-8 flex-row justify-end'>
				<span className='text-xl tracking-normal align-middle underline text-[#999999]'>
					Support
				</span>
				<span className='text-[#0360E6] text-2xl font-semibold'>
					(631) 689-9700
				</span>
			</div>

			<div className='flex flex-row justify-between w-full mx-auto items-center gap-4'>
			
				<Image
					src='/AnsweringLegalTM_Blue.png'
					alt='Answering Legal Logo'
					width={400}
					height={48}
					className='w-68 md:w-auto max-w-full h-auto flex-shrink-0'
				/>

				<ul className='hidden md:flex flex-row gap-10 text-[#161641] font-semibold text-2xl flex-1 justify-center'>
					<li
						className={`hover:text-button cursor-pointer relative ${
							active === "Products"
								? "text-button after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[4px] after:bg-[#3CCED7] after:rounded-full"
								: ""
						}`}
						onClick={() => handleActive("Products")}>
						Products {active === "Products" ? "^" : "⌄"}
					</li>
					<li
						className={`hover:text-button cursor-pointer relative ${
							active === "About"
								? "text-button after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[4px] after:bg-[#3CCED7] after:rounded-full"
								: ""
						}`}
						onClick={() => handleActive("About")}>
						About {active === "About" ? "^" : "⌄"}
					</li>
					<li
						className={`hover:text-button cursor-pointer relative ${
							active === "Resources"
								? "text-button after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[4px] after:bg-[#3CCED7] after:rounded-full"
								: ""
						}`}
						onClick={() => handleActive("Resources")}>
						Resources {active === "Resources" ? "^" : "⌄"}
					</li>
					<li
						className={`hover:text-button cursor-pointer relative ${
							active === "Pricing"
								? "text-button after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[4px] after:bg-[#3CCED7] after:rounded-full"
								: ""
						}`}
						onClick={() => handleActive("Pricing")}>
						Pricing
					</li>
				</ul>

				<div className='hidden md:flex gap-8 flex-shrink-0'>
					<Image
						src='/Search.svg'
						alt='magnifying glass search icon'
						width={64}
						height={64}
						sizes='100vh'></Image>
					<button className='bg-button text-white text-2xl font-semibold px-12 py-3 rounded-xl hover:bg-bHover transition-all cursor-pointer duration-300'>
						Try for free
					</button>
				</div>

				<div className='flex md:hidden flex-shrink-0'>
					<Image
						src='/Hamburger.svg'
						alt='Hamburger Menu'
						width={32}
						height={32}
						className='bg-transparent'
					/>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
