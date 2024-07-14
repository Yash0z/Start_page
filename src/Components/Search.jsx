import React, { useState } from "react";
import { FaCameraRetro, FaGoogle } from "react-icons/fa";

const Search = () => {
	const [query, setQuery] = useState("");

	const handleKey = (event) => {
		if (event.key === "Enter") {
			searchGoogle();
		}
	};

	const searchGoogle = () => {
		const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
			query
		)}`;
		window.location.href = searchUrl;
	};

	return (
		<>
			<div className='relative  flex justify-center top-44  mx-auto  p-5 max-w-[40rem]    '>
				<input
					className='border-b-2 outline-none w-[88%] text-white pb-2 bg-transperant'
					type='text'
					placeholder='Search Something'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyDown={handleKey}
				/>
				<button
					onClick={searchGoogle}
					className='border-b-2 text-white w-[10%] sm:w-[6%] md:w-[5%] pb-2  '
					aria-label='Search Google'
				>
					<FaGoogle className='ml-2' size={20} />
				</button>
				<button
					onClick={searchGoogle}
					className='border-b-2 text-white w-[10%] sm:w-[6%] md:w-[5%] pb-2 '
					aria-label='Search Camera'
				>
					<FaCameraRetro className='ml-2' size={20}/>
				</button>
			</div>
		</>
	);
};

export default Search;
