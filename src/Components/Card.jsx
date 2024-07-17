import React, { useState } from "react";
import { RiDeleteBin6Fill } from "@react-icons/all-files/ri/RiDeleteBin6Fill";
import { MdCancel } from "@react-icons/all-files/md/MdCancel";

const Card = ({ id, title, link, onDelete }) => {
	const [isVisible, setIsVisible] = useState(true);

	const handleContextMenu = (e) => {
		e.preventDefault();
		setIsVisible(false);
	};

	const handleDeleteClick = () => {
		onDelete(id);
	};

	const handleCancelClick = () => {
		setIsVisible(true);
	};

	return (
		<>
			{isVisible ? (
				<div
					onContextMenu={handleContextMenu}
					className='font-Questrial text-xl rounded-sm  text-white border text-center  font-bold card-container relative h-full w-full'
				>
					<a href={link} className=' content-center block w-full h-full'>
						~ {title}
					</a>
				</div>
			) : (
				<div className='flex justify-center gap-2 text-yellow-400 border w-full h-full '>
					<button onClick={handleDeleteClick} aria-label='Delete'>
						<RiDeleteBin6Fill size={20} />
					</button>
					<button onClick={handleCancelClick} aria-label='Cancel'>
						<MdCancel size={20} />
					</button>
				</div>
			)}
		</>
	);
};

export default Card;
