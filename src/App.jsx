import React from "react";
import Search from "./Components/Search";
import Divider from "@mui/material/Divider";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faGuitar } from "@fortawesome/free-solid-svg-icons";

// library.add(faGuitar);
function App() {
	return (
		<>
			<div className=' w-screen h-[39vh]'>
                  <Search/>
         </div>

			<Divider className='bg-gray-500' />

			<div className=' w-screen h-[60vh]'></div>
		</>
	);
}

export default App;
