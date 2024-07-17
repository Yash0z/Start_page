import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import { RiEdit2Fill } from "@react-icons/all-files/ri/RiEdit2Fill";

const Workspace = ({ cards, onDelete, workspaceId }) => {
	// Retrieve group name from localStorage or use "untitled" as default
	const initialGroupName =
		localStorage.getItem(`groupName-${workspaceId}`) || "untitled";
	const [groupName, setGroupName] = useState(initialGroupName);
	const [isEditing, setIsEditing] = useState(false);
	const nameRef = useRef(null);

	const handleNameChange = (e) => {
		const newName = e.target.innerText;
		setGroupName(newName);
		// Store the new group name in localStorage with unique key
		localStorage.setItem(`groupName-${workspaceId}`, newName);
	};

	const toggleEditMode = () => {
		setIsEditing(!isEditing);
		setTimeout(() => {
			if (nameRef.current) {
				nameRef.current.focus();
				document.execCommand("selectAll", false, null); // Select all text
			}
		}, 0);
	};

	// scrollbar behaviour
	const containerRef = useRef(null);
	useEffect(() => {
		const container = containerRef.current;

		const handleScroll = (event) => {
			event.preventDefault();

			if (event.deltaY < 0) {
				// Scroll up, scroll right
				container.scrollLeft += 5;
			} else {
				// Scroll down, scroll left
				container.scrollLeft -= 5;
			}
		};

		container.addEventListener("wheel", handleScroll, { passive: false });

		return () => {
			container.removeEventListener("wheel", handleScroll);
		};
	}, []);

	return (
		<div className='relative top-32 flex flex-col h-[15%] w-[90vw] md:max-w-screen-2xl mt-2 md:max-h-32 mx-auto md:flex-row md:justify-around md:items-center'>
			{/* shortcuts Group name */}
			<div className='flex justify-between relative my-auto h-12 w-20 min-w-52 border-2'>
				<div
					ref={nameRef}
					contentEditable={isEditing}
					suppressContentEditableWarning={true}
					className='bg-yellow-400 text-xl w-[80%] h-full text-center content-center outline-none'
					onBlur={handleNameChange}
				>
					{groupName}
				</div>
				<button
            aria-label='editGroup'
					className='w-[20%] h-full bg-yellow-400'
					onClick={toggleEditMode}
				>
					<RiEdit2Fill className='ml-2 bg-yellow-400' size={20} />
				</button>
			</div>

			{/* shortcuts */}
			<div
				className='flex space-x-7 p-2 items-center h-[100%] md:h-[100%] w-[100%] overflow-x-auto md:w-[75%] custom-scrollbar'
				ref={containerRef}
			>
				{cards.map((item) => (
					<div key={item.id} className='min-w-60 h-10'>
						<Card {...item} onDelete={onDelete} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Workspace;
