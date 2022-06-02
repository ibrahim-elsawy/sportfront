import React, {useState, useEffect} from "react";

export const ButtonIcon = (props) => {

		
	const onLike = () => { 
		try {
			props.onClick();
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className={`${props.className}  flex flex-row`}>
			<button type="button" className={`${props.className}`} onClick={onLike}>{props.logo}</button>
			<div className={`  sm:pr-2 pl-1 text-xs text-gray-500 ${props.textSize}`}> {props.name} </div>
		</div>
	)
};
