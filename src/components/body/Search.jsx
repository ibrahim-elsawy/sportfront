import React, {useState} from "react";
import ser from '../../assets/images/search.png'
import { search } from '../../services/search';

export const Search = (props) => {
	
	const [keyword, setKeyword] = useState(null);
	const submit = async () => {
		if (keyword === null) {
			return null;
		}
		const data = await search(keyword, "people");
		console.log(data);
	};
	return (
		<div className= "bg-black rounded-full text-gray-500 flex flex-row mx-3 " >
			<button className="rounded-full hover:bg-gray-800 " onClick={(c)=>submit()}> <img className="m-3 h-6 w-6 " src={ser} alt=""/></button>
			<input
				className="bg-black shadow appearance-none rounded-full w-full text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
				id="search"
				type="text"
				placeholder="Search ....."
				onChange={(c) => setKeyword(c.target.value)}
			/>
		</div>
	)
};