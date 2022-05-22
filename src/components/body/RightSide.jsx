import React, {useState, useEffect} from "react";
import not from '../../assets/images/bell-ring.png';
import arrow from '../../assets/images/down-arrow.png';
import me from '../../assets/images/linkdin.jpg';
import { PersonalMenu } from "./PersonalMenu";
// import { getSocket } from "../../services/client";

export const Right = (props) => {

	const [clicked, setClicked] = useState(false);
	const [NumMsg, setNumMsg] = useState(0);
	useEffect(() => {
		// const socket = getSocket(); 
		// const client = getSocket(); 
		// client.on("test", data => {
		// 	setNumMsg(data['num']);
		// });
		// client.connect('ws://localhost:8000/')
	}, []);
	const onSupport = () => { 
		setClicked(!clicked);
	};
	return (
		<div className={`${props.padding} flex flex-row-reverse`}>
			{/* <button className={`${clicked && "bg-gray-300 wiggle "} bg-slate-800 rounded-xl w-8 h-8 m-3 p-0.5 transition ease-in-out delay-60 hover:bg-gray-800 hover:w-9 hover:h-9 hover:p-1`}>
				<img className="mt-0.5  h-6 w-6 " src={arrow} alt="" />
			</button> */}
			<button className={`${clicked && "bg-gray-300 wiggle "} bg-slate-800 rounded-xl w-8 h-8 m-3 p-0.5 transition ease-in-out delay-60 hover:bg-gray-800 hover:w-9 hover:h-9 hover:p-1`}>
				<div className="flex flex-row">
					<img className="mt-0.5 h-6 w-6" src={not} alt="" />
					<div className="rounded-full bg-red-700 px-2">{NumMsg}</div>
				</div>
			</button>
			<button className={`${clicked && "bg-gray-300 wiggle "} rounded-xl w-8 h-8 m-3 transition ease-in-out delay-60 hover:bg-gray-800 hover:w-9 hover:h-9`}>
				<img className="mt-0.5 h-8 w-8 rounded-full" src={me} alt="" />
				{/* <PersonalMenu></PersonalMenu> */}
			</button>
		</div>
	)
};