import React from "react";

const Workspace = () => {
	return (
		<>
			<div className='relative flex flex-col border h-[20%] w-[90vw] md:w-[75vw]  mx-auto m-5 p-4 md:flex-row md:justify-between'>
				{/* shortcuts Group name */}
				<div className='border-2 border-red-500 my-auto  h-[80%] w-[20%]  '>
					<span>text sample 1 </span>
				</div>

				{/* shortcuts */}
				<div className='border-2 border-red-500 my-auto h-[80%] w-[100%] md:w-[75%]'>
					<span>text sample 2 </span>
				</div>
			</div>
		</>
	);
};

export default Workspace;
