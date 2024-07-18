import React from "react";
import GroupNameEditor from "./GroupEditor";
import CardContainer from "./Container";

const Workspace = ({ cards, onDelete, workspaceId }) => {
	// Retrieve group name from localStorage or use "untitled" as default
	const initialGroupName =
		localStorage.getItem(`groupName-${workspaceId}`) || "untitled";

	return (
		<div className='relative top-32 flex flex-col h-[15%] w-[90vw] md:max-w-screen-2xl mt-2 md:max-h-32 mx-auto md:flex-row md:justify-around md:items-center'>
			{/* shortcuts Group name */}
			<GroupNameEditor
				initialName={initialGroupName}
				workspaceId={workspaceId}
			/>
			{/* shortcuts */}
			<CardContainer cards={cards} onDelete={onDelete} />
		</div>
	);
};

export default Workspace;
