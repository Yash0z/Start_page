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
			<div className='absolute top-60  w-[100vw] pl-10 sm:w-[40vw] '>
				<input
					className='border-b-2 outline-none w-[75%] text-white'
					type='text'
					placeholder='何かを探している..?'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyDown={handleKey}
				/>
				<button onClick={searchGoogle} className='text-white w-[5%] h-20'>
					<FontAwesomeIcon icon='fa-brands fa-google fa-2xl' />
				</button>
			</div>
		</>
	);
};

export default Search;
