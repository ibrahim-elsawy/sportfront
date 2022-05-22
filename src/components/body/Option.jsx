import React from "react";

export const Option = (props) => {
	return (
		<div className={`${props.padding} flex flex-row`}>
			<img className={`${props.className} mt-0.5 h-6 w-6`} src={props.logo} alt="" />
			<div className={` hidden sm:block sm:px-2 text-base`}> {props.name} </div>
		</div>
	)
};