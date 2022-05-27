import React, { useState, useEffect } from 'react';
import { Option } from './Option';
import user from '../../assets/images/user.png';
import axios from 'axios';
import { ButtonIcon } from './ButtonIcon';
import { Link } from 'react-router-dom';

import img from '../../assets/images/linkdin.jpg'
import { getUsername } from '../../services/user';

const Card = (props) => {

	const [token, setToken] = useState(null);
	const [liked, setLiked] = useState(false);
	const [cardId, setCardId] = useState(null);
	const [numUsers, setNumUsers] = useState(props.users);
	const [adminUsername, setAdminUsername] = useState("");

		
	const onAction = async() => { 
		try {
			liked ? setNumUsers(numUsers- 1) : setNumUsers(numUsers + 1);
			setLiked(!liked);
			// const response = await axios.post(`http://localhost:5000/interact`, {"image_id":cardId}, {headers:{"x-auth":token}});
			// console.log(response);
		} catch (error) {
			console.error(error);
		}
	};
	const usernameFn = async (user_id)=>{
		try {
			setAdminUsername(await getUsername(user_id));
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		setCardId(props.cardId)
		usernameFn(props.admin_Id);
	}, [props.cardId, props.admin_Id]);
	


	const checkNum = async (i, t) => { 
		const response = await axios.post(`http://localhost:5000/checklike`, { "image_id": i}, { headers: { "x-auth": t } });
		(response.data.action === 1) ? setLiked(true) : setLiked(false);
	};
	const onProfile = ()=>{
		console.log("profile of this person ");
	};
	const onJoin = ()=>{
		console.log("request to join the challange");
	};
	const joinLogo = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /> </svg>;
	// const joinLogo = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>
	// const joinLogo = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /> </svg>
	return (
		<div className={`bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ${props.className}`}>
			{/* <div>hello</div> */}
			<Link to="/login"><img class="rounded-t-lg cursor-pointer " src={props.img} alt="" /></Link>
			<div class="p-5">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ props.title}</h5>
				<div className="flex  justify-cnter place-content-between">
					<div className="flex flex-row"> 
						<img className="mt-0.5 h-6 w-6 rounded-full" src={img} alt="" /> 
						<div className=" px-2 text-base"> ibrahim elsawy </div> 
					</div>
					
					<ButtonIcon onClick={onJoin} logo={joinLogo} className="mr-8" ></ButtonIcon>
					<div className={` flex flex-row`}> 
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> </svg> 
						<div className={`  sm:pr-2 pl-1 text-xs text-gray-500`}> {numUsers} </div> 
					</div>
					{/* <Option logo={liked ? heartPress : heartNotPress} name={numUsers} onClick={onAction} displayButton={true} token={token}></Option> */}
					{/* <Option logo={user} displayButton={false} name={props.user}></Option> */}
					{/* <Option logo={date} displayButton={false} name={ props.date+" ago"}></Option> */}
					{/* <Option logo={download} onClick={onDownload} displayButton={true}></Option> */}
				
				</div>
				</div>
			</div>
	)
}

export default Card;