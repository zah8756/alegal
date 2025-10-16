"use client";

const Form = () => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert("Form submitted");
	};

	return (
		<div className='flex flex-col md:flex-row justify-between items-center gap-16 max-w-7xl mx-auto'>
			<div className='flex flex-col items-start gap-8 flex-1 max-w-lg'>
				<h1 className='text-5xl font-bold leading-tight'>
					24/7 coverage at a fraction of the cost of in-house receptionists.
				</h1>
				<p className='text-2xl font-semibold '>
					Don&apos;t believe us? Fill out the form on the right, and we&apos;ll
					take you to our pricing page, where you can find out just how little
					24/7 legal intake will cost you.
				</p>
			</div>
			<form
				className='flex flex-col items-start gap-2 flex-1 shadow-custom rounded-3xl p-8 bg-[#F7F5F5] text-[#161641] min-w-sm max-w-lg'
				onSubmit={handleSubmit}>
				<h2 className='text-2xl font-bold'>
					Tell us about yourself. We&apos;ll show you all of our pricing
					information on the next page.
				</h2>
				<label htmlFor='name' className='text-lg font-semibold'>
					First Name*
				</label>
				<input
					type='text'
					placeholder='First Name*'
					required
					className='w-full rounded-lg border-1 border-[#141414] p-2'
					id='name'
				/>
				<label htmlFor='last-name' className='text-lg font-semibold'>
					Last Name*
				</label>
				<input
					type='text'
					placeholder='Last Name*'
					required
					className='w-full rounded-lg border-1 border-[#141414] p-2'
					id='last-name'
				/>
				<label htmlFor='company' className='text-lg font-semibold'>
					Company Name*
				</label>
				<input
					type='text'
					placeholder='Company Name*'
					required
					className='w-full rounded-lg border-1 border-[#141414] p-2'
					id='company'
				/>
				<label htmlFor='email' className='text-lg font-semibold'>
					Email*
				</label>
				<input
					type='email'
					placeholder='Email*'
					required
					className='w-full rounded-lg border-1 border-[#141414] p-2'
					id='email'
				/>
				<label htmlFor='phone' className='text-lg font-semibold'>
					Cell Phone*
				</label>
				<input
					type='tel'
					placeholder='Cell Phone*'
					required
					className='w-full rounded-lg border-1 border-[#141414] p-2'
					pattern='^\d{10}$'
					id='phone'
				/>
				<button
					type='submit'
					className='bg-button text-white px-4 py-2 rounded-lg font-semibold text-lg hover:bg-bHover transition-all cursor-pointer duration-300 mt-6 self-center'>
					See plans & pricing
				</button>
			</form>
		</div>
	);
};

export default Form;
