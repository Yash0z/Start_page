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
			<Search />
			<React.StrictMode>
				{/* <ReactPlayer
					style={{
						margin: "0px",
						padding: "0px", // Correctly formatted in an object
					}}
					url='src/assets/dune.mp4'
					playing={true}
					loop={true}
					muted={true}
					width='100vw'
					height='100vh'
					config={{
						file: {
							attributes: {
								controlsList: "nodownload", // Hides download button on some browsers
							},
						},
					}}
				/> */}
				<img
					src='../src/assets/space.png'
					alt=''
					className='mx-auto pt-10'
				/>
			</React.StrictMode>
		</>
	);
}

export default App;
