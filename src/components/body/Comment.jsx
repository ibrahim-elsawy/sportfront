import React, {useState} from "react";
import comm from '../../assets/images/comments.png'
import { Option } from "./Option";


export const Comment = (props) => { 
	const [clicked, setClicked] = useState(false);
	const onSupport = () => { 
		setClicked(!clicked);
	};
	return (
		<button className={`${clicked && ""} rounded-xl w-10 h-8 m-3 transition ease-in-out delay-60 hover:bg-gray-800 hover:w-11 hover:h-9`} onClick={onSupport}>
			<Option name="" logo={comm} padding="px-2"></Option>
		</button>

	)
};