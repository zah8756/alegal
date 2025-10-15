"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import useScreenSize from "../Hooks/useScreenSize";

const Nav = () => {
	const [active, setActive] = useState("");

	const handleActive = (path: string) => {
		setActive(path);
	};

	const windowWidth = useScreenSize();
	const [screenSize, setScreenSize] = useState("desktop");

	useEffect(() => {
		if (windowWidth < 768) {
			setScreenSize("mobile");
		} else {
			setScreenSize("desktop");
		}
	}, [windowWidth]);

	return (
		<nav className='bg-[#ffffff] w-full min-h-[133px] gap-2 flex flex-col sticky top-0 z-50 px-6 pt-8 pb-4'>
			{screenSize === "desktop" && (
				<div className='min-w-[950px] gap-8 flex flex-row justify-end'>
					<span className='text-xl tracking-normal align-middle underline text-[#999999]'>
						Support
					</span>
					<span className='text-[#0360E6] text-2xl font-semibold'>
						(631) 689-9700
					</span>
				</div>
			)}

			<div className='flex flex-row justify-between min-w-[950px] items-center'>
				{/* Logo*/}
				<Image
					src='/AnsweringLegalTM_Blue.png'
					alt='Answering Legal Logo'
					width={400}
					height={48}
				/>

				{/* Navigation links - Hidden on mobile */}
				{screenSize === "desktop" && (
					<ul className='flex flex-row gap-10 text-[#161641] font-semibold text-2xl'>
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
				)}

				{/* Search - Hidden on mobile */}
				{screenSize === "desktop" && (
					<div className='gap-8 flex'>
						<Image
							src='/Search.svg'
							alt='magnifying glass search icon'
							width={64}
							height={64}
							sizes='100vh'></Image>
						<button className='bg-button text-white text-2xl font-semibold px-12 py-3 rounded-xl hover:bg-bHover transition-all duration-300'>
							Try for free
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Nav;
