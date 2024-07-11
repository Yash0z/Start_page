import React, { useEffect, useRef } from "react";
import Card from "./Card";

const Workspace = () => {
	const list = [
		<Card key={1} />,
		<Card key={2} />,
		<Card key={3} />,
		<Card key={4} />,
		<Card key={5} />,
		<Card key={6} />,
		<Card key={7} />,
		<Card key={8} />,
	];

	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;

		const handleScroll = (event) => {
			if (event.deltaY < 0) {
				// Scroll up, scroll right
				container.scrollLeft += 100; // Adjust the value based on your requirement
			} else {
				// Scroll down, scroll left
				container.scrollLeft -= 100; // Adjust the value based on your requirement
			}
		};

		container.addEventListener("wheel", handleScroll);

		return () => {
			container.removeEventListener("wheel", handleScroll);
		};
	}, []);

	return (
		<div className='relative flex flex-col border h-[20%] w-[90vw] md:w-[75vw] mx-auto m-5 p-4 md:flex-row md:justify-between'>
			{/* shortcuts Group name */}
			<div className='border-2 border-red-500 my-auto h-[80%] w-[20%]'>
				<span>text sample 1</span>
			</div>

			{/* shortcuts */}
			<div
				className='border-2 flex-wrap flex-col flex space-x-7 border-red-500 p-3 my-auto h-[100%] md:h-[80%] w-[100%] overflow-x-auto md:w-[75%]'
				ref={containerRef}
			>
				{list.map((item, index) => (
					<div key={index} className='border w-52 h-10'>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

export default Workspace;
