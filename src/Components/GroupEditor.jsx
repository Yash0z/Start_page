import React, { useState, useRef } from "react";
import { RiFileEditLine } from "@react-icons/all-files/ri/RiFileEditLine";

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
        document.execCommand("selectAll", false, null); // Select all text
      }
    }, 0);
  };

  return (
    <div className='flex justify-between relative my-auto h-24 md:h-12 w-20 min-w-52 gap-2'>
      <div
        ref={nameRef}
        contentEditable={isEditing}
        suppressContentEditableWarning={true}
        className='bg-accent2 text-textclr1 font-PlaywriteEN text-xl w-[80%] h-full text-center content-center outline-none rounded-md'
        onBlur={handleNameChange}
      >
        {groupName}
      </div>
      <button
        aria-label='editGroup'
        className='w-[20%] h-full bg-accent2 rounded-md content-center flex justify-center items-center'
        onClick={toggleEditMode}
      >
        <RiFileEditLine className=' bg-transparent text-textclr1' size={20} />
      </button>
    </div>
  );
};

export default GroupNameEditor;
