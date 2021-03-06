import React from "react";

export const Dashboard = (props) => {
	return (
		<div className={`${props.padding} flex flex-row`}>
			<img className="mt-0.5 h-6 w-6" src={props.logo} alt="" />
			<div className={` px-2 text-neutral-200`}> {props.name} </div>
		</div>
	)
};