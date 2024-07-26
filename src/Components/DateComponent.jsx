import React, { useState, useEffect } from "react";

const DateComponent = () => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timerId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);
		return () => {
			clearInterval(timerId);
		};
	}, []);

	const formatDate = (date) => {
		const dateStr = date
			.toLocaleDateString("ja-JP", {
				day: "2-digit",
				month: "long",
				year: "numeric",
			})
			.replace(/年|月|日/g, (match) => match + " ");
		return dateStr.trim();
	};

	return (
		<div className='flex justify-center w-full  text-white text-2xl font-raleway  relative lg:justify-end '>
			<span className='lg:relative lg:right-12'>
				{`${formatDate(currentTime)}`}{" "}
			</span>
		</div>
	);
};

export default DateComponent;
