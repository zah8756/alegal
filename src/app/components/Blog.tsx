"use client";
import { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import Image from "next/image";

const Blog = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return (
		<div className='flex justify-center gap-4 md:gap-8 items-center content-center flex-col w-full py-4 md:py-8 px-4 overflow-x-hidden'>
			<h2 className='self-stretch text-center text-3xl not-italic font-bold'>
				Want to learn more? Read our articles on legal intake.
			</h2>
			{isMobile && (
				<div className='flex justify-center items-center content-center gap-16 md:gap-6'>
					<Image src='Arrow-L.svg' alt='Arrow Left' width={32} height={32} />
					<Image src='Arrow-R.svg' alt='Arrow Right' width={32} height={32} />
				</div>
			)}
			<div className='flex justify-center items-center content-center gap-2 md:gap-6 '>
				{!isMobile && (
					<Image src='Arrow-L.svg' alt='Arrow Left' width={32} height={32} />
				)}
				<div className='w-full overflow-x-hidden md:overflow-x-visible'>
					<div className='flex flex-row justify-center items-center content-center gap-4 md:gap-6 mb-4 md:mb-0'>
						<BlogPost />
						<BlogPost />
						<BlogPost />
					</div>
				</div>
				{!isMobile && (
					<Image src='Arrow-R.svg' alt='Arrow Right' width={32} height={32} />
				)}
			</div>
			<button className='bg-button text-white px-4 md:px-6 py-2 md:py-3 rounded-lg w-fit hover:bg-bHover transition-all overflow-x-hidden duration-300'>
				<span className='text-lg md:text-2xl not-italic font-semibold'>
					Go to Blog
				</span>
			</button>
		</div>
	);
};

export default Blog;
