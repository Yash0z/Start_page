import React, { useState } from "react";
import Divider from "@mui/material/Divider";

const Popup = ({ addCard, isOpen }) => {
	const [name, setName] = useState("");
	const [url, setUrl] = useState("");
	const [selectedWorkspace, setSelectedWorkspace] = useState("data1");

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleUrlChange = (event) => {
		setUrl(event.target.value);
	};

	const handleWorkspaceChange = (event) => {
		setSelectedWorkspace(event.target.value);
	};

	const handleSubmit = () => {
		addCard(name, url, selectedWorkspace); // Pass name, url, and selectedWorkspace to addCard function
		setName("");
		setUrl("");
		isOpen(false); // Call isOpen function to close the popup/modal (assuming it accepts a boolean)
	};

	const handleClose = () => {
		isOpen(false); // Call isOpen function to close the popup/modal
	};

	return (
		<>
			<div className='fixed inset-0 bg-black bg-opacity-90 '>
				<div className='text-white relative top-10 p-4 mx-auto w-[40rem] h-[23rem]'>
					<div className='flex flex-col gap-5 p-5 font-Raleway'>
						{/* Name input */}
						<label>
							<span className='text-lg font-Montserrat text-yellow-400 p-1'>
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

						{/* URL input */}
						<label>
							<span className='textlg font-Montserrat text-yellow-400 p-1'>
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

						{/* Workspace select */}
						<label>
							<span className='textlg font-Montserrat text-yellow-400 p-1'>
								Workspace
							</span>
							<div>
								<select
									className='bg-gray-900 p-2 rounded-sm w-[70%] outline-none'
									value={selectedWorkspace}
									onChange={handleWorkspaceChange}
								>
									<option value='data1'>Workspace 1</option>
									<option value='data2'>Workspace 2</option>
									<option value='data3'>Workspace 3</option>
								</select>
							</div>
						</label>
					</div>
					<Divider className='bg-gray-500 w-full' />
					{/* Submit and Cancel buttons */}
					<div className='flex justify-end gap-2 h-10 top-5 relative text-black'>
						<button
							onClick={handleClose}
							className='bg-slate-300 px-3 rounded-sm'
						>
							Cancel
						</button>
						<button
							onClick={handleSubmit}
							className='bg-yellow-400 px-3 rounded-sm'
						>
							Save
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Popup;
