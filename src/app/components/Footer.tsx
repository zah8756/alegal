"use client";

import Form from "./Form";
import Info from "./Info";

const Footer = () => {
	return (
		<footer className='w-full flex flex-col mb-0 mx-auto px-8 py-16 text-white bg-[#161641]'>
			<Form />
			<Info />
		</footer>
	);
};

export default Footer;
