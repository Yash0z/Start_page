import React from "react";
import Search from "./Components/Search";
import Popup from "./Components/Popup";
import DateComponent from "./Components/DateComponent";
import Workspace from "./Components/Workspace";
import { useCardsData } from "./hooks/useCardsData";
import { usePopup } from "./hooks/usePopup";
import { addCardHandler, deleteCardHandler } from "./utils/cardHandlers";
import { MdAddLink } from "react-icons/md";

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
			<div className='relative flex  flex-col-reverse w-screen h-[39vh] lg:flex lg:flex-row lg:justify-between'>
				<div className='flex justify-center items-center  content-center lg:w-[50%]'>
					<Search />
				</div>
				<div className='w-[70%] mx-auto h-full  flex flex-col justify-center gap-2 items-center lg:w-[50%]  '>
					<DateComponent />
					<img
						src='/Public/kyn.webp'
						alt=''
						className='min-w-[90%] h-52'
					/>
				</div>
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
					className='p-2 rounded-full absolute bottom-5 right-5 bg-accent1 flex justify-between items-center'
					onClick={togglePopup}
				>
					<MdAddLink size={23} className='bg-transparent  rounded-full ' />
				</button>
			</div>
			{isOpen && <Popup isOpen={togglePopup} addCard={addCard} />}
		</>
	);
}

export default App;
