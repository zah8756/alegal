import BlogPost from "./BlogPost";
import Image from "next/image";

const Blog = () => {
	return (
		<div className='flex justify-center gap-8 items-center content-center flex-col w-full py-8'>
			<h2 className='self-stretch text-center text-3xl not-italic font-bold'>
				Want to learn more? Read our articles on legal intake.
			</h2>
			<div className='flex justify-center items-center content-center gap-6'>
				<Image src='Arrow-L.svg' alt='Arrow Left' width={48} height={48} />
				<div className='flex justify-center items-center content-center gap-6'>
					<BlogPost />
					<BlogPost />
					<BlogPost />
				</div>
				<Image src='Arrow-R.svg' alt='Arrow Right' width={48} height={48} />
			</div>
			<button className='bg-button text-white px-6 py-3 rounded-lg w-fit hover:bg-bHover transition-all duration-300'>
				<span className='text-2xl not-italic font-semibold'>Go to Blog</span>
			</button>
		</div>
	);
};

export default Blog;
