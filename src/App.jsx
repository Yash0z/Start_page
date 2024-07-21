import React from "react";
import { MdAdd } from "@react-icons/all-files/md/MdAdd";
import Search from "./Components/Search";
import Popup from "./Components/Popup";
import Workspace from "./Components/Workspace";
import { useCardsData } from "./hooks/useCardsData";
import { usePopup } from "./hooks/usePopup";
import { addCardHandler, deleteCardHandler } from "./utils/cardHandlers";

function App() {
	const {
		cards: data1,
		addCard: addCardToData1,
		deleteCard: deleteCardFromData1,
	} = useCardsData("cardsData1");
	const {
		cards: data2,
		addCard: addCardToData2,
		deleteCard: deleteCardFromData2,
	} = useCardsData("cardsData2");
	const {
		cards: data3,
		addCard: addCardToData3,
		deleteCard: deleteCardFromData3,
	} = useCardsData("cardsData3");

	const { isOpen, togglePopup } = usePopup();

	const addCard = (title, link, workspace) =>
		addCardHandler(title, link, workspace, {
			addCardToData1,
			addCardToData2,
			addCardToData3,
		});

	const deleteCard = (id, workspace) =>
		deleteCardHandler(id, workspace, {
			deleteCardFromData1,
			deleteCardFromData2,
			deleteCardFromData3,
		});

	return (
		<>
			<div className='relative w-screen h-[39vh]'>
				<div className='absolute w-full text-center top-20 font-Noto_JP text-[100px] text-accent1 '>
					グーグル
				</div>
				<Search className='absolute inset-0 m-auto' />
			</div>

			<div className='w-screen h-[60vh]'>
				<Workspace
					cards={data1}
					onDelete={(id) => deleteCard(id, "data1")}
					workspaceId='workspace1'
				/>
				<Workspace
					cards={data2}
					onDelete={(id) => deleteCard(id, "data2")}
					workspaceId='workspace2'
				/>
				<Workspace
					cards={data3}
					onDelete={(id) => deleteCard(id, "data3")}
					workspaceId='workspace3'
				/>
				<button
					aria-label='addShortcut'
					className='p-2 rounded-full absolute bottom-5 right-5 bg-accent2 flex justify-between items-center'
					onClick={togglePopup}
				>
					<MdAdd size={20} className='bg-transparent  rounded-full ' />
				</button>
			</div>
			{isOpen && <Popup isOpen={togglePopup} addCard={addCard} />}
		</>
	);
}

export default App;
