import React, { useState } from "react";
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
			<div className='relative top-60 flex justify-center mx-auto w-[70vw] md:top-64  md:mx-0 md:ml-20 md:w-[40vw] '>
				<input
					className='border-b-2 outline-none w-[95%] text-white pb-1 bg-transperant'
					type='text'
					placeholder='何かを探している..?'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyDown={handleKey}
				/>
				<button
					onClick={searchGoogle}
					className='border-b-2 text-white w-[5%] pb-1 bg-none'
				>
					<FontAwesomeIcon icon='fa-brands fa-google fa-2xl ' />
				</button>
			</div>
		</>
	);
};

export default Search;
