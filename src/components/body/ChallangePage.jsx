import React, { useState, useEffect } from 'react';
import { ButtonIcon } from './ButtonIcon';
import { Link } from 'react-router-dom';

import defaultImage from '../../assets/images/profile.png';
import { getMyProfile, getMyUsername } from '../../services/user';
import EditProfile from './EditProfile';


import config  from "../../services/Routing.json";
const apiEndpoint = config.main + "image/";


const ChallangePage = () => {
	const [adminUsername, setAdminUsername] = useState("");
	const [profileAdmin, setProfileAdmin] = useState(null);
	const [editClicked, setEditClicked] = useState(false);
	
	const usernameFn = async ()=>{
		try {
			setAdminUsername(await getMyUsername());
		} catch (error) {
			console.error(error);
		}
	};
	const getProfile= async ()=>{
		try {
			setProfileAdmin(await getMyProfile())
		} catch (error) {
			console.error(error);
		}
	};
	const onEdit = () => { 
		setEditClicked(!editClicked);
	};
	useEffect(() => {
		getProfile();
		usernameFn();
		
	}, []);

	const editLogo = <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-sky-800 transition ease-in-out delay-60 hover:stroke-cyan-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /> </svg>
	return (
		<div className='flex flex-col p-3 m-2 border-2 rounded-xl border-sky-700 border-dotted  '>
			{(editClicked === false) && (<div className="flex flex-row  justify-between">
				<div className="flex ">
					<img className="mt-0.5 h-60 w-60 rounded-full" src={profileAdmin && profileAdmin.image ? apiEndpoint + profileAdmin.image : defaultImage} alt="" />
					<div className=" px-3 text-3xl self-center font-bold text-sky-800 tracking-wider"> {adminUsername} </div>
				</div>
				<div className="flex flex-row gap-x-14">
					<div className="flex flex-col mx-2 mt-2 self-center">
						<div>Following</div>
						<div className="self-center" >{profileAdmin?.following.$values.length}</div>
					</div>
					<div className="flex flex-col mx-2 mt-2 self-center">
						<div>Followers</div>
						<div className="self-center ">{profileAdmin?.followers.$values.length}</div>
					</div>
				</div>
				<ButtonIcon logo={editLogo} onClick={onEdit} className=" self-start "></ButtonIcon>
			</div>)}
			{(editClicked === false) && (<div className="flex flex-col self-start mt-5">
				<div className=" px-3 text-lg sef-center font-bold text-sky-800 tracking-wider">About</div>
				<div className="text-md px-3 font-mono font-bold">{profileAdmin?.bio}</div>
			</div>)}
			{(editClicked === true) && <EditProfile onCancel={onEdit} userId={profileAdmin?.userId} profileId={profileAdmin?.id} ></EditProfile>}
		</div>
	)
}

export default ChallangePage;