"use client";
import { useState, useEffect } from "react";

const Info = () => {
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
		<div className='w-full bg-[#161641] text-white pt-25 md:p-25 gap-11'>
			<div className='flex justify-center items-center max-w-7xl mx-auto'>
				<div className='flex flex-col items-center max-w-lg'>
					<h3 className='text-2xl font-bold text-center'>
						Have questions? Our team is here <br /> to help. Call 631-400-8888
					</h3>
					<p className='text-xs text-center font-extrabold text-[#3CCED7] pb-11'>
						Monday to Friday from 9 am to 7 pm EST.
					</p>
				</div>
			</div>

			<div className='py-16 max-w-7xl mx-auto relative before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-[#2c2c82] before:rounded-full'>
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(6,auto)] gap-16 justify-items-center md:justify-center md:items-start items-center content-center'>
					<div className='flex flex-col gap-4 text-center md:text-left'>
						<h3 className='text-2xl font-semibold'>Our Service</h3>
						{!isMobile && (
							<div className='flex flex-col gap-2 text-sm font-normal'>
								<a href='#'>Who We Serve</a>
								<a href='#'>FAQs</a>
								<a href='#'>Tutorials</a>
								<a href='#'>What Is An Answering Service?</a>
								<a href='#'>What Is A Legal Intake Receptionist?</a>
								<a href='#'>What Is A Virtual Receptionist?</a>
							</div>
						)}
					</div>

					<div className='flex flex-col gap-4'>
						<h3 className='text-2xl font-semibold'>Company</h3>
						{!isMobile && (
							<div className='flex flex-col gap-2 text-sm font-normal'>
								<a href='#'>Meet The Team</a>
								<a href='#'>Our Authors</a>
							</div>
						)}
					</div>

					<div className='flex flex-col gap-4'>
						<h3 className='text-2xl font-semibold'>Partnerships</h3>
						{!isMobile && (
							<div className='flex flex-col gap-2 text-sm font-normal'>
								<a href='#'>Integrations</a>
								<a href='#'>Affiliate Program</a>
								<a href='#'>Law Firm Marketing</a>
							</div>
						)}
					</div>

					<div className='flex flex-col gap-4'>
						<h3 className='text-2xl font-semibold'>Resources</h3>
						{!isMobile && (
							<div className='flex flex-col gap-2 text-sm font-normal'>
								<a href='#'>Blog</a>
								<a href='#'>Podcast</a>
								<a href='#'>Videos</a>
								<a href='#'>Let&apos;s Talk Legal</a>
								<a href='#'>Marketing</a>
								<a href='#'>The Answering Legal</a>
								<a href='#'>Book Club</a>
								<a href='#'>Top Legal Softwares</a>
							</div>
						)}
					</div>

					<div className='flex flex-col gap-4'>
						<h3 className='text-2xl font-semibold'>Support</h3>
						{!isMobile && (
							<div className='flex flex-col gap-2 text-sm font-normal'>
								<a href='#'>Contact Us</a>
								<a href='#'>Submit A Ticket</a>
								<a href='#'>Privacy Policy</a>
								<a href='#'>Terms Of Service</a>
								<a href='#'>Employment</a>
								<a href='#'>Opportunities</a>
							</div>
						)}
					</div>

					<div className='flex flex-col gap-4'>
						<h3 className='text-2xl font-semibold'>Follow Us</h3>
						{!isMobile && (
							<div className='flex flex-col gap-2 text-sm'>
								<a href='#'>Twitter</a>
								<a href='#'>Facebook</a>
								<a href='#'>Instagram</a>
								<a href='#'>LinkedIn</a>
							</div>
						)}
					</div>
				</div>
			</div>

			<div className='px-8 pb-8 max-w-7xl mx-auto relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#2c2c82] after:rounded-full'></div>

			<p className='text-center text-xs not-italic font-extrabold uppercase text-white pt-12'>
				© 2024 Answering Legal · All Rights Reserved
			</p>
		</div>
	);
};

export default Info;
