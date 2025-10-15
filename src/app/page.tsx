import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";


export default function Home() {
	return (
		<div className='font-montserrat min-h-screen w-full flex flex-col'>
			<Nav />
			<Hero />
			<Main />
			<Footer />
		</div>
	);
}
