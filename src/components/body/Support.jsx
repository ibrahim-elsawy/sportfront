import React, {useState} from "react";
import supp from '../../assets/images/support.png'
import { Option } from "./Option";


export const Support = (props) => { 
	const [clicked, setClicked] = useState(false);
	const onSupport = () => { 
		setClicked(!clicked);
	};
	return (
		<button className={`${clicked && "bg-gray-100 wiggle "} rounded-xl w-10 h-8 m-3 transition ease-in-out delay-60 hover:bg-gray-100 hover:w-11 hover:h-9`} onClick={onSupport}>
			<Option name="" logo={supp} padding="px-2"></Option>
		</button>

	)
};