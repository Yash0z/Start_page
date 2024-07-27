import { React, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
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
					className='font-Euclid_li text-xl border-y border-accent3 text-accent2 flex justify-center h-full w-full'
				>
					<a
						href={link}
						target='_blank'
						rel='noopener noreferrer'
						className='w-full h-full flex justify-center items-center'
					>
						{title}
					</a>
				</div>
			) : (
				<div className='flex justify-center gap-2 text-accent2 border-y border-accent2 w-full h-full '>
					<button onClick={handleDeleteClick} aria-label='Delete'>
						<FaTrash size={20} />
					</button>
					<button onClick={handleCancelClick} aria-label='Cancel'>
						<RxCross2 size={25} />
					</button>
				</div>
			)}
		</>
	);
};

export default Card;
