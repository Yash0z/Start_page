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
					className='font-Euclid_li text-xl rounded-sm border-y border-accent1 text-white flex justify-center  card-container relative h-full w-full'
				>
						<a href={link} className='block w-full h-full flex justify-center items-center'>
  {title}
</a>

				</div>
			) : (
				<div className='flex justify-center gap-2 text-accent2 border-y border-accent1 w-full h-full '>
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
