import React, { useRef, useState } from "react";
import { FaCameraRetro, FaInternetExplorer } from "react-icons/fa";

const Search = () => {
	const [query, setQuery] = useState("");
	const fileInputRef = useRef(null);

	const handleKey = (event) => {
		if (event.key === "Enter") {
			searchGoogle();
		}
	};

	const searchGoogle = () => {
		const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
			query
		)}`;
		window.open(searchUrl, "_blank");
	};

	const handleCameraClick = () => {
		fileInputRef.current.click();
	};

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const form = document.createElement("form");
			form.action = "https://lens.google.com/upload";
			form.method = "POST";
			form.enctype = "multipart/form-data";
			form.target = "_blank";

			const input = document.createElement("input");
			input.type = "file";
			input.name = "encoded_image";
			input.files = event.target.files;

			form.appendChild(input);
			document.body.appendChild(form);
			form.submit();

			document.body.removeChild(form);
		}
	};

	return (
		<>
			<div className='relative flex justify-between items-center w-[60%] lg:w-[70%]  h-10  border-b lg:top-5  bg-transparent'>
				<input
					className='font-Euclid_re text-2  p-1 outline-none  w-[80%]  text-textclr2  bg-transparent'
					type='text'
					placeholder='何 か を 探 し て い る . . . ?'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyDown={handleKey}
				/>
				<div className='flex justify-between space-x-4  text-accent1 pb-2   '>
					<button onClick={searchGoogle} aria-label='Search Google'>
						<FaInternetExplorer size={22} />
					</button>
					<button onClick={handleCameraClick} aria-label='Search Camera'>
						<FaCameraRetro size={22} />
					</button>
					<input
						type='file'
						ref={fileInputRef}
						onChange={handleFileChange}
						style={{ display: "none" }}
						accept='image/*'
					/>
				</div>
			</div>
		</>
	);
};

export default Search;
