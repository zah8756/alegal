import Nav from "./components/Nav";
import Hero from "./components/Hero";

export default function Home() {
	return (
		<div className='font-montserrat min-h-screen w-full flex flex-col'>
			<Nav />
			<Hero />
		</div>
	);
}
