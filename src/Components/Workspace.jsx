import React, { useEffect, useRef } from "react";
import Card from "./Card";

const Workspace = () => {
	// Array of unique props for each Card
	const cardsData = [
		{ id: 1, title: "Card 1", link: "https://github.com/" },
		{ id: 2, title: "Card 2", link: "Content for Card 2" },
		{ id: 3, title: "Card 3", link: "Content for Card 3" },
		{ id: 4, title: "Card 4", link: "Content for Card 4" },
		{ id: 5, title: "Card 5", link: "Content for Card 5" },
		{ id: 6, title: "Card 6", link: "Content for Card 6" },
		{ id: 7, title: "Card 7", link: "Content for Card 7" },
		{ id: 8, title: "Card 8", link: "Content for Card 8" },
	];

	// scrollbar behaviour
	const containerRef = useRef(null);
	useEffect(() => {
		const container = containerRef.current;

		const handleScroll = (event) => {
			event.preventDefault();

			if (event.deltaY < 0) {
				// Scroll up, scroll right
				container.scrollLeft += 50;
			} else {
				// Scroll down, scroll left
				container.scrollLeft -= 50;
			}
		};

		container.addEventListener("wheel", handleScroll, { passive: false });

		return () => {
			container.removeEventListener("wheel", handleScroll);
		};
	}, []);

	return (
		<div className='relative flex flex-col border h-[20%] w-[90vw] md:max-w-screen-xl md:max-h-32 mx-auto m-5 p-4 md:flex-row md:justify-between'>
			{/* shortcuts Group name */}
			<div className='border-2 border-red-500 my-auto h-[60%] w-[40%] md:w-[20%]'>
				<span>text sample 1</span>
			</div>

			{/* shortcuts */}
			<div
				className='border-2 flex-wrap flex-col flex space-x-7 border-red-500 p-3 my-auto h-[100%] md:h-[80%] w-[100%] overflow-x-auto md:w-[75%] custom-scrollbar'
				ref={containerRef}
			>
				{cardsData.map((item) => (
					<div key={item.id} className='border w-52 h-10'>
						<Card {...item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Workspace;
