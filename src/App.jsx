import React, { useState } from "react";
import { MdAddBox } from "@react-icons/all-files/md/MdAddBox";
import Search from "./Components/Search";
import Popup from "./Components/Popup";
import Workspace from "./Components/Workspace";
import { cardsData1, cardsData2, cardsData3 } from "./Components/CardData.js";
import {
	addCardToData1,
	addCardToData2,
	addCardToData3,
	deleteCardFromData1,
	deleteCardFromData2,
	deleteCardFromData3,
} from "./Components/CardData.js";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	const [data1, setData1] = useState(cardsData1);
	const [data2, setData2] = useState(cardsData2);
	const [data3, setData3] = useState(cardsData3);

	const addCard = (title, link, workspace) => {
		switch (workspace) {
			case "data1":
				addCardToData1(title, link);
				setData1([...cardsData1]);
				break;
			case "data2":
				addCardToData2(title, link);
				setData2([...cardsData2]);
				break;
			case "data3":
				addCardToData3(title, link);
				setData3([...cardsData3]);
				break;
			default:
				break;
		}
	};

	const deleteCard = (id, workspace) => {
		switch (workspace) {
			case "data1":
				deleteCardFromData1(id);
				setData1([...cardsData1]);
				break;
			case "data2":
				deleteCardFromData2(id);
				setData2([...cardsData2]);
				break;
			case "data3":
				deleteCardFromData3(id);
				setData3([...cardsData3]);
				break;
			default:
				break;
		}
	};

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
