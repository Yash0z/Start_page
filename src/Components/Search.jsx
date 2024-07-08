import React, { useState } from "react";
import { FaCameraRetro, FaGoogle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass, faGoogle);
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
			<div className='relative  flex justify-center top-44 w-[80vw] mx-auto sm:w-[70vw] md:top-44  md:mx-0 md:ml-20 md:w-[40rem] '>
				<input
					className='border-b-2 outline-none w-[88%] text-white pb-1 bg-transperant'
					type='text'
					placeholder='何 か を 探 し て い る . . . . ?'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyDown={handleKey}
				/>
				<button
					onClick={searchGoogle}
					className='border-b-2 text-white w-[10%] sm:w-[6%] md:w-[5%] pb-1  '
				>
					<FaGoogle className='ml-2' />
				</button>
				<button
					onClick={searchGoogle}
					className='border-b-2 text-white w-[10%] sm:w-[6%] md:w-[5%] pb-1 '
				>
					<FaCameraRetro className='ml-2' />
				</button>
			</div>
		</>
	);
};

export default Search;
