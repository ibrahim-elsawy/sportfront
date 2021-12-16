import React from "react";


export const Home = (props) => {
	return (
		<div className="p-6 bg-gray-900 bg-gradient-to-r from-gray-900 to-black h-screen font-sans text-gray-500 flex flex-row">
			<div className="basis-1/4">
				<div className="text-xl font-medium text-gray-500">ChitChat</div>
				<p className="text-gray-500">You have a new message!</p>
			</div>
			<div className="basis-1/2">
				<div className="text-xl font-medium text-gray-500">ChitChat</div>
				<p className="text-gray-500">You have a new message!</p>
			</div>
			<div className="basis-1/4">
				<div className="text-xl font-medium text-gray-500">ChitChat</div>
				<p className="text-gray-500">You have a new message!</p>
			</div>
		</div>
	)
};