import React from "react";
import { MdAddBox } from "@react-icons/all-files/md/MdAddBox";
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
				<div className='absolute w-full text-center top-20 font-Montserrat text-[100px] font-extrabold text-yellow-400 '>
					スペースウ
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
					className='p-1 rounded-full absolute bottom-5 right-5'
					onClick={togglePopup}
				>
					<MdAddBox size={30} className='bg-transparent text-yellow-400' />
				</button>
			</div>
			{isOpen && <Popup isOpen={togglePopup} addCard={addCard} />}
		</>
	);
}

export default App;
