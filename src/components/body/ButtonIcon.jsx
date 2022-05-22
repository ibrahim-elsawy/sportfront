import React, {useState, useEffect} from "react";

export const ButtonIcon = (props) => {

	const [button, setButton] = useState('');
	const [image, setImage] = useState('hidden');
		
	const onLike = () => { 
		try {
			props.onClick();
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		setButton(props.displayButton ? '' : "hidden" )
		setImage(props.displayButton ? 'hidden' : "" )
	}, [props.displayButton]);
	return (
		<div className={`${props.className}  flex flex-row`}>
			<button type="button" className={`${button}`} onClick={onLike}>{props.logo}</button>
			{/* {props.logo} */}
			{/* <img className={`mt-0.5 h-6 w-6 ${image}`} src={props.logo} alt="" /> */}
			<div className={`  sm:pr-2 pl-1 text-xs text-gray-500`}> {props.name} </div>
		</div>
	)
};
