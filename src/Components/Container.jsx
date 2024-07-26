import React, { useRef, useEffect, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
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
			container.scrollBy({ left: 500, behavior: "smooth" });
		} else {
			// Scroll down, scroll left
			container.scrollBy({ left: -500, behavior: "smooth" });
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
		<>
			<div className='h-[60%] w-full flex  md:h-full  md:w-[80%]'>
				<button
					onClick={handleLeftArrowClick}
					className={`z-10 cursor-pointer transition-colors duration-300 ${
						isAtStart ? "text-bg" : "text-accent1"
					}`}
					disabled={isAtStart}
				>
					<RiArrowLeftSLine
						size={25}
					/>
				</button>
				<div
					className='flex space-x-10 items-center md:h-full w-full overflow-x-auto  custom-scrollbar'
					ref={containerRef}
				>
					{cards.map((item) => (
						<div key={item.id} className='min-w-60  h-10'>
							<Card {...item} onDelete={onDelete} />
						</div>
					))}
				</div>
				<button
					onClick={handleRightArrowClick}
					className={` z-10 cursor-pointer transition-colors duration-300 ${
						isAtEnd ? "text-bg" : "text-accent1"
					}`}
					disabled={isAtEnd}
				>
					<RiArrowRightSLine
						size={25}
					/>
				</button>
			</div>
		</>
	);
};

export default CardContainer;
