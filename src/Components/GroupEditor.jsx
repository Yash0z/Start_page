import React, { useState, useRef } from "react";
import { RiEdit2Fill } from "@react-icons/all-files/ri/RiEdit2Fill";

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
  );
};

export default GroupNameEditor;
