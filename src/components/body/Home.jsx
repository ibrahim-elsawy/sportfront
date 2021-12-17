import React from "react";
import { Left } from './LeftSide';
import { Search } from "./Search";
import { Post } from './Post';


export const Home = (props) => {
	return (
		<div className="p-5 bg-gray-900 bg-gradient-to-r from-gray-900 to-black h-screen font-sans text-gray-500 flex flex-row">
			<div className="flex flex-row basis-3/4 divide-x divide-gray-500">
				<div className="basis-1/4">
					<Left></Left>
				</div>
				<div className="basis-3/4">
					<Search></Search>
					<Post></Post>
					<div className="text-xl font-medium text-gray-500">ChitChat</div>
					<p className="text-gray-500">You have a new message!</p>
				</div>
			</div>
			<div className="basis-1/4 divide-none">
				<div className="text-xl font-medium text-gray-500">ChitChat</div>
				<p className="text-gray-500">You have a new message!</p>
			</div>
		</div>
	)
};