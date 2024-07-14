import { React, useState } from "react";
import Divider from "@mui/material/Divider";
const Popup = () => {
	const [name, setName] = useState("");
	const [url, setUrl] = useState("");
	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleUrlChange = (event) => {
		setUrl(event.target.value);
	};

	return (
		<>
			<div className='fixed inset-0 bg-black bg-opacity-90 '>
				<div className='text-white  relative top-10  p-10 mx-auto w-[40rem] h-[20rem]'>
					<div className='flex flex-col  gap-5 p-5 font-Raleway    '>
						{/* Title Label */}
						<label>
							<span className='text-xl font-Montserrat text-yellow-400 p-1 '>
								Name
							</span>
							<div>
								<input
									type='text'
									className='bg-gray-900 p-2 rounded-sm w-[70%] outline-none'
									value={name}
									onChange={handleNameChange}
									placeholder='Enter a title'
								/>
							</div>
						</label>

						{/* Url label */}
						<label>
							<span className='text-xl font-Montserrat text-yellow-400 p-1 '>
								URL
							</span>
							<div>
								<input
									type='text'
									className='bg-gray-900 p-2 rounded-sm w-[70%] outline-none'
									value={url}
									onChange={handleUrlChange}
									placeholder='Enter a url'
								/>
							</div>
						</label>
					</div>
					<Divider className='bg-gray-500 w-full ' />
					{/* Submit buttons */}
					<div className=' flex justify-end gap-2 h-10 top-5 relative text-black '>
						<button className='bg-slate-300   px-3 rounded-sm'>
							Cancel
						</button>
						<button className='bg-yellow-400  px-3 rounded-sm'>
							Save
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Popup;
