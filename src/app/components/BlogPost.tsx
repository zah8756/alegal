import Image from "next/image";

const BlogPost = () => {
	return (
		<div className='flex flex-col shadow-custom rounded-3xl bg-white gap-2 justify-center items-center w-80 md:w-auto md:max-w-sm p-4 flex-shrink-0 md:flex-shrink'>
			<Image
				className='rounded-3xl w-full h-full'
				src='/Article_img_placeholder.jpg'
				alt='Blog Post'
				width={320}
				height={193}
			/>
			<div className='flex flex-col'>
				<p className='font-semibold text-base tracking-normal align-middle text-button'>
					LAWYER WELLNESS
				</p>
				<div className='relative flex flex-row gap-3'>
					<div className='w-1 bg-[#3CCED7] rounded-full'></div>
					<div className='flex flex-col'>
						<p className='text-sm text-gray-500'>June 6, 2024</p>
						<span className='text-2xl font-bold'>
							How Viable Is Remote Work For Lawyers?
						</span>
					</div>
				</div>
			</div>
			<p className='text-lg overflow-hidden text-ellipsis line-clamp-4'>
				This month on the Answering Legal blog, we&apos;ll be covering remote
				work in the legal world. Since the rapid adaptations required by
				quarantine during the COVID-19 pandemic, remote work has steadily been
				on the rise across all sectors of the economy, both private and public.
			</p>
			<span className='font-semibold text-base tracking-normal text-button self-start'>
				[Read More&gt;]
			</span>
		</div>
	);
};

export default BlogPost;
