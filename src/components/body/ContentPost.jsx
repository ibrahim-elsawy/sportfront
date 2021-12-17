import React from "react";
import img from '../../assets/images/linkdin.jpg'

export const Content = (props) => {
	return (
		<div className="text-neutral-300 flex flex-col" >
			<div className=" m-3 flex flex-row">
				<img className="mt-0.5 h-6 w-6 rounded-full" src={img} alt="" />
				<div className=" px-2 text-base"> ibrahim elsawy </div>
			</div>
			<p className="m-3"> hello this my first post </p>
			{props.image && <img src="" alt="" />}
			{props.video && <source src="/Videos/video1.mp4" type="video/mp4" />}
		</div>
	)
};