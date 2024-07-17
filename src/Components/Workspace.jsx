import React, { useEffect, useRef } from "react";
import Card from "./Card";
import { RiEdit2Fill } from "@react-icons/all-files/ri/RiEdit2Fill";

const Workspace = ({ cards, onDelete }) => {
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
			<div className='flex justify-between relative my-auto h-12 w-20 min-w-52 border-2 '>
				<span className='bg-yellow-400 text-xl w-[80%] h-full text-center content-center'>
					Academics
				</span>
				<button className='w-[20%] h-full bg-yellow-400 '>
					<RiEdit2Fill className='ml-2 bg-yellow-400' size={20} />
				</button>
			</div>

			{/* shortcuts */}
			<div
				className='flex space-x-7 p-2 items-center h-[100%] md:h-[100%] w-[100%] overflow-x-auto md:w-[75%] custom-scrollbar'
				ref={containerRef}
			>
				{cards.map((item) => (
					<div key={item.id} className=' min-w-60 h-10'>
						<Card {...item} onDelete={onDelete} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Workspace;
