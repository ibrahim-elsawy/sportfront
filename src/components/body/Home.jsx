import React from "react";
import { Left } from './LeftSide';
import { Search } from "./Search";
import { Post } from './Post';
import { Right } from "./RightSide";
import {useNavigate} from 'react-router-dom';
import { getToken } from '../../services/authService';
import Challange from "./Challange";
import { useSelector } from 'react-redux';
import { Dashboard } from "./Dashboard";
import ProfileMe from "./ProfileMe";


export const Home = (props) => {
	const routing = useSelector(state => state.routing);

	const nav = useNavigate();
	if (! getToken()){ 
		// nav("/login");
		window.location.href = "/login";
	}
	return (
		// <div className="h-screen mb-0 pb-0 sm:bg-scroll p-2 sm:p-5 bg-gray-900 bg-gradient-to-r from-gray-900 to-black font-sans text-gray-500 flex flex-row">
		<div className="bg p-2 sm:p-5 bg-gray-900 bg-gradient-to-r from-gray-900 to-black font-sans text-gray-500 flex flex-row ">
			<div className="flex flex-row sm:basis-3/4 divide-x divide-gray-500">
				<div className=" basis-1/8 sm:basis-1/4">
					<Left></Left>
				</div>
				<div className="basis-7/8 sm:basis-3/4 ">
					<Search></Search>
					{(routing.current==="0") && <Dashboard></Dashboard>}
					{(routing.current==="1") && <Challange></Challange>}
					{(routing.current==="5") && <ProfileMe></ProfileMe>}
					{/* <Post></Post> */}
				</div>
			</div>
			<div className="hidden sm:block sm:basis-1/4 sm:divide-none">
				<Right></Right>
			</div>
		</div>
	)
};