import React from "react";

const Card = ({ title, link }) => {
	return (
		<div className=' relative  flex h-full w-full justify-between  '>
			<a href={link}>
				<span className=' absolute text-center content-center w-[100%] h-[100%] text-red-50 '>
					{title}
				</span>
			</a>
		</div>
	);
};

export default Card;
