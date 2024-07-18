import React, { useRef, useEffect } from "react";
import Card from "./Card";

const CardContainer = ({ cards, onDelete }) => {
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
	);
};

export default CardContainer;
