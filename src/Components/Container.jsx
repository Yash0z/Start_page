import React, { useRef, useEffect, useState } from "react";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import Card from "./Card";

const CardContainer = ({ cards, onDelete }) => {
	const containerRef = useRef(null);
	const [isAtStart, setIsAtStart] = useState(true);
	const [isAtEnd, setIsAtEnd] = useState(false);

	const handleScroll = (event) => {
		event.preventDefault();
		const container = containerRef.current;

		if (event.deltaY < 0) {
			// Scroll up, scroll right
			container.scrollBy({ left: 100, behavior: "smooth" });
		} else {
			// Scroll down, scroll left
			container.scrollBy({ left: -100, behavior: "smooth" });
		}
		updateArrows();
	};

	const handleLeftArrowClick = () => {
		const container = containerRef.current;
		container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
		updateArrows();
	};

	const handleRightArrowClick = () => {
		const container = containerRef.current;
		container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
		updateArrows();
	};

	const updateArrows = () => {
		const container = containerRef.current;
		setIsAtStart(container.scrollLeft === 0);
		setIsAtEnd(
			container.scrollLeft + container.clientWidth >= container.scrollWidth
		);
	};

	useEffect(() => {
		const container = containerRef.current;
		container.addEventListener("wheel", handleScroll, { passive: false });
		container.addEventListener("scroll", updateArrows);
		updateArrows();

		return () => {
			container.removeEventListener("wheel", handleScroll);
			container.removeEventListener("scroll", updateArrows);
		};
	}, []);

	return (
		<div
			className='flex space-x-7 p-2 items-center h-[100%] md:h-[100%] w-[100%] overflow-x-auto md:w-[75%] custom-scrollbar'
			ref={containerRef}
		>
			{!isAtStart && (
				<button
					onClick={handleLeftArrowClick}
					className='absolute  flex justify-center items-center  z-10 p-5 rounded-full'
				>
					<IoIosArrowBack
						size={20}
						className='bg-transparent absolute z-10 rounded-full  text-accent2 cursor-pointer'
					/>
				</button>
			)}
			{cards.map((item) => (
				<div key={item.id} className='min-w-60 h-10'>
					<Card {...item} onDelete={onDelete} />
				</div>
			))}
			{!isAtEnd && (
				<button
					onClick={handleRightArrowClick}
					className='absolute  flex justify-center items-center right-5 z-10 p-5 rounded-full'
				>
					<IoIosArrowForward
						size={20}
						className='bg-transparent absolute z-10 rounded-full text-accent2 cursor-pointer'
					/>
				</button>
			)}
		</div>
	);
};

export default CardContainer;
