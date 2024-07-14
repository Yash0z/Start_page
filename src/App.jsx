import { React, useState } from "react";
import Search from "./Components/Search";
import Popup from "./Components/Popup";
import Divider from "@mui/material/Divider";
import Workspace from "./Components/Workspace";


function App() {
	const [isOpen, setIsOpen] = useState(false);
	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	const cardsData = [
		{ id: 1, title: "Card 1", link: "https://github.com/" },
		{ id: 2, title: "Card 2", link: "Content for Card 2" },
		{ id: 3, title: "Card 3", link: "Content for Card 3" },
		{ id: 4, title: "Card 4", link: "Content for Card 4" },
		{ id: 5, title: "Card 5", link: "Content for Card 5" },
		{ id: 6, title: "Card 6", link: "Content for Card 6" },
		{ id: 7, title: "Card 7", link: "Content for Card 7" },
		{ id: 8, title: "Card 8", link: "Content for Card 8" },
	];
	return (
		<>
			<div className=' w-screen h-[39vh]'>
				<Search />
			</div>

			<Divider className='bg-gray-500' />

			<div className=' w-screen h-[60vh]'>
				<Workspace cards={cardsData} isOpen={togglePopup} />
				<Workspace cards={cardsData} isOpen={togglePopup} />
			</div>
			{isOpen && <Popup />}
		</>
	);
}

export default App;
