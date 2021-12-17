import React from "react";
import comm from '../../assets/images/search.png'
import img from '../../assets/images/linkdin.jpg'
import { Option } from "./Option";
import { Content } from "./ContentPost";
import { Support } from "./Support";

export const Post = (props) => {
	return (
		<div className="bg-black rounded-lg text-neutral-300 flex flex-col divide-y divide-gray-500 mx-3 my-10" >
			<Content></Content>
			<div>
				<Support></Support>
			</div>
			<input
				className="bg-black shadow appearance-none rounded-full w-full text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
				id="search"
				type="text"
				placeholder="Search ....."
			/>
		</div>
	)
};