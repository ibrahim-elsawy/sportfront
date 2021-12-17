import React from "react";
import ser from '../../assets/images/search.png'

export const Search = (props) => {
	return (
		<div className= "bg-black rounded-full text-gray-500 flex flex-row mx-3" >
			<img className="m-3 h-6 w-6" src={ser} alt=""/>
			<input
				className="bg-black shadow appearance-none rounded-full w-full text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
				id="search"
				type="text"
				placeholder="Search ....."
			/>
		</div>
	)
};