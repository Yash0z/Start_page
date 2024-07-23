import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";
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
				<div className='text-white relative top-10 flex flex-col items-center mx-auto w-[40rem] h-[19rem] '>
					<div className='flex flex-col gap-5 p-5 font-Euclid_re text-xl text-accent2 '>
						{/* Name input */}
						<label className="flex p-2 items-center gap-5 ">
							<span>
								Title
							</span>
							<div>
								<input
									type='text'
									className='bg-filled p-2 text-textclr2 text-sm rounded-sm w-[31rem] outline-none'
									value={name}
									onChange={handleNameChange}
									placeholder='enter a title'
								/>
							</div>
						</label>

						{/* URL input */}
						<label className="flex p-2 items-center gap-5 ">
							<span >
								URL
							</span>
							<div>
								<input
									type='text'
									className='bg-filled p-2 text-textclr2 text-sm rounded-sm w-[31rem] outline-none'
									value={url}
									onChange={handleUrlChange}
									placeholder='enter a url'
								/>
							</div>
						</label>

						{/* Workspace select */}
						<label className=" p-2 flex  flex-col gap-1 w-[45%]  ">
							<span >
								Workspace
							</span>
							<div>
								<Select
                        variant="standard"
                            
                            placeholder={"select"}
									className='z-10 absolute  border-accent2   text-textclr2 text-sm  w-[15rem]   '
									value={selectedWorkspace}
									onChange={handleWorkspaceChange}
								>
									<Option value='data1'>Workspace 1</Option>
									<Option value='data2'>Workspace 2</Option>
									<Option value='data3'>Workspace 3</Option>
								</Select>
							</div>
						</label>
					</div>

					{/* Submit and Cancel buttons */}
					<div className='flex justify-end gap-2 h-10 bg-transparent   w-full px-12 absolute bottom-14 text-black'>
						<button
							onClick={handleClose}
							className='bg-accent1 px-3 rounded-sm'
						>
							Cancel
						</button>
						<button
							onClick={handleSubmit}
							className='bg-accent2 px-3 rounded-sm'
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
