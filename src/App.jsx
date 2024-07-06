import React from "react";
import Search from "./Components/Search";

import ReactPlayer from "react-player";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faGuitar } from "@fortawesome/free-solid-svg-icons";

// library.add(faGuitar);
function App() {
	return (
		<>
			<React.StrictMode>
				<div className='w-screen h-[550px] md:w-[55vw]'>
					<Search />
					<ReactPlayer
						style={{
							margin: "0px",
							padding: "0px",
							position: "static",
						}}
						className='react-player'
						width='100%'
						height='100%'
						url='src/assets/dune.mp4'
						playing={true}
						loop={true}
						muted={true}
						config={{
							file: {
								attributes: {
									controlsList: "nodownload", // Hides download button on some browsers
								},
							},
						}}
					/>
				</div>
				{/* <img
					src='../src/assets/space.png'
					alt=''
					className='mx-auto pt-12'
				/> */}
			</React.StrictMode>
		</>
	);
}

export default App;
