import React, { useState, useEffect } from 'react';
import { ButtonIcon } from './ButtonIcon';
import { Link } from 'react-router-dom';

import defaultImage from '../../assets/images/profile.png';
import { getProfile, getUsername } from '../../services/user';
import { IsChallengeJoined, JoinChallange } from '../../services/challangeService';


import config  from "../../services/Routing.json";
const apiEndpoint = config.main + "image/";


const Card = (props) => {

	const [joined, setJoined] = useState(false);
	const [cardId, setCardId] = useState(null);
	const [numUsers, setNumUsers] = useState(props.users);
	const [adminUsername, setAdminUsername] = useState("");
	const [profileAdmin, setProfileAdmin] = useState(null);

		
	
	const usernameFn = async (user_id)=>{
		try {
			setAdminUsername(await getUsername(user_id));
		} catch (error) {
			console.error(error);
		}
	};
	const getAdminProfile= async (admin_Id)=>{
		try {
			setProfileAdmin(await getProfile(admin_Id))
		} catch (error) {
			console.error(error);
		}
	};
	const IsJoined = async (cardId) => {
		try {
			setJoined(await IsChallengeJoined(cardId));
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		setCardId(props.cardId)
		setNumUsers(props.numUsers);
		usernameFn(props.admin_Id);
		getAdminProfile(props.admin_Id);
		IsJoined(props.cardId);
		
	}, [props.cardId, props.admin_Id, props.numUsers]);
	


	
	const onChallangePage= ()=>{
		console.log("profile of this person ");
	};
	const onJoin = async() => {
		joined ? setNumUsers(numUsers + 1) : setNumUsers(numUsers - 1);
		setJoined(!joined);
		await JoinChallange(cardId)
		console.log("request to join the challange");
	};
	const joinedLogo = <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7  fill-blue-600" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /> </svg>
	const joinLogo = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /> </svg>;
	return (
		<div className={`bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ${props.className}`}>
			{/* <div>hello</div> */}
			<button onClick={onChallangePage}><img class="rounded-t-lg cursor-pointer  h-10/12 " src={props.img} alt="" /></button>
			<div class="p-5">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ props.title}</h5>
				<div className="flex  justify-cnter place-content-between">
					<div className="flex flex-row"> 
						<img className="mt-0.5 h-6 w-6 rounded-full" src={profileAdmin && profileAdmin.image ? apiEndpoint + profileAdmin.image : defaultImage} alt="" /> 
						<div className=" px-2 text-base"> {adminUsername} </div> 
					</div>
					
					<ButtonIcon onClick={onJoin} logo={joined && joined ? joinedLogo : joinLogo} className="mr-8" ></ButtonIcon>
					<div className={` flex flex-row`}> 
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> </svg> 
						<div className={`  sm:pr-2 pl-1 text-xs text-gray-500`}> {numUsers} </div> 
					</div>
				
				</div>
				</div>
			</div>
	)
}

export default Card;