import React, { useState, useRef } from "react";
import { RiFileEditLine } from "react-icons/ri";

const GroupNameEditor = ({ initialName, workspaceId }) => {
	const [groupName, setGroupName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);
	const nameRef = useRef(null);

	const handleNameChange = (e) => {
		const newName = e.target.innerText;
		setGroupName(newName);
		localStorage.setItem(`groupName-${workspaceId}`, newName);
	};

	const toggleEditMode = () => {
		setIsEditing(!isEditing);
		setTimeout(() => {
			if (nameRef.current) {
				nameRef.current.focus();
				document.execCommand("selectAll", false, null); 
			}
		}, 0);
	};

	return (
		<div className='flex h-12 w-[40%]  md:w-[20%] lg:w-[18%] gap-2'>
			<div
				ref={nameRef}
				contentEditable={isEditing}
				suppressContentEditableWarning={true}
            spellCheck={false}
				className='flex flex-col justify-center items-center bg-accent2 text-textclr1 font-PlaywriteEN text-xl w-[80%] h-full md:h-full  outline-none rounded-md'
				onBlur={handleNameChange}
				
			>
				{groupName}
			</div>

			<button
				aria-label='editGroup'
				className='w-[20%]  bg-accent2 rounded-md content-center flex justify-center items-center'
				onClick={toggleEditMode}
			>
				<RiFileEditLine
					className=' bg-transparent text-textclr1'
					size={20}
				/>
			</button>
		</div>
	);
};

export default GroupNameEditor;
