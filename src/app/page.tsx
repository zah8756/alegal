import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
	return (
		<div className='font-montserrat items-center justify-items-center min-h-screen min-w-screen'>
			<Nav />
			<main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'></main>
		</div>
	);
}
