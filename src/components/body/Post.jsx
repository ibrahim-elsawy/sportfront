import React from "react";
import comm from '../../assets/images/search.png'
import img from '../../assets/images/linkdin.jpg'
import { Option } from "./Option";
import { Content } from "./ContentPost";
import { Support } from "./Support";
import { Comment } from './Comment';
import { Save } from "./Save";

export const Post = (props) => {
	return (
		<div className="bg-black rounded-lg text-neutral-300 flex flex-col divide-y divide-slate-800 mx-3 my-10" >
			<Content></Content>
			<div className="flex flex-row justify-between">
				<div>
					<Support></Support>
					<Comment></Comment>
				</div>
				<Save></Save>
			</div>
			<div className=" p-3 flex flex-row">
				<img className="mt-0-5 h-6 w-6 rounded-full" src={img} alt="" />
				<input
					className="bg-black shadow appearance-none rounded-full w-full text-gray-500 leading-tight px-2 focus:outline-none focus:shadow-outline"
					id="search"
					type="text"
					placeholder="Write a comment....."
				/>
			</div>
		</div>
	)
};