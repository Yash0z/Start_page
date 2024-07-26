import React from "react";
import GroupNameEditor from "./GroupEditor";
import CardContainer from "./Container";

const Workspace = ({ cards, onDelete, workspaceId }) => {
	const initialGroupName =
		localStorage.getItem(`groupName-${workspaceId}`) || "untitled";

	return (
		<div className='relative  top-32 flex flex-col mx-auto h-32 md:h-24 w-[95vw] md:max-w-[90rem] md:max-h-32 md:mx-auto md:flex-row md:justify-between  md:items-center'>
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
