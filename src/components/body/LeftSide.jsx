import React, {useState} from "react";
import logo from '../../assets/images/running.png'
import dash from '../../assets/images/dashboard_1.png'
import chall from '../../assets/images/brain.png'
import anyl from '../../assets/images/analysis.png'
import save from '../../assets/images/diskette.png'
import setting from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'
import { Option } from './Option';
import { useDispatch } from "react-redux";
import { routingAdded } from "../features/routingSlice";

export const Left = (props) => {
	const dispatch = useDispatch();

	const [dashClicked, setDashClicked] = useState(true);
	const [challClicked, setChallClicked] = useState(false);
	const [statClicked, setStatClicked] = useState(false);
	const [savedClicked, setSavedClicked] = useState(false);
	const [settClicked, setSettClicked] = useState(false);
	const [logoutClicked, setLogoutClicked] = useState(false);
	const [current, setCurrent] = useState(0);
	const currentToState = [
		setDashClicked, 
		setChallClicked, 
		setStatClicked,
		setSavedClicked,
		setSettClicked,
		setLogoutClicked,
	]

	const onDash= () => { 
		dispatch(routingAdded("0"));
		if(current !== 0){
			currentToState[current](false);
			setCurrent(0);
			setDashClicked(!dashClicked);
			
		}
	};
	const onChallanges= () => {
		dispatch(routingAdded("1"));
		if(current !== 1){
			currentToState[current](false);
			setCurrent(1);
			setChallClicked(!challClicked);
			
		}
	};
	const onStatis= () => { 
		dispatch(routingAdded("2"));
		if(current !== 2){
			currentToState[current](false);
			setCurrent(2);
			setStatClicked(!statClicked);
			
		}
	};
	const onSaved= () => { 
		dispatch(routingAdded("3"));
		if (current !== 3){
			currentToState[current](false);
			setCurrent(3);
			setSavedClicked(!savedClicked);
			
		}
	};
	const onsettings= () => {
		dispatch(routingAdded("4"));
		if(current !== 4){
			currentToState[current](false);
			setCurrent(4);
			setSettClicked(!settClicked);

		}
	};
	const onLogout= () => {
		if(current !== 5){
			currentToState[current](false);
			// setCurrent(5);
			setLogoutClicked(!logoutClicked);

		}
	};
	return (
		<div>
			<div className="flex flex-row">
				<img className="m-0 p-0 h-8 w-8 sm:h-12 sm:w-12" src={logo} alt="" />
				<div className="hidden sm:block text-xl font-medium text-neutral-200 p-2">BEAST</div>
			</div>
			<div className="flex flex-col">
				<div className="hidden sm:block mt-20 text-xs"> MENU </div>
				<button className={`${dashClicked && "bg-slate-700 wiggle"} hover:border hover:border-blue-500 rounded-xl  m-1 transition ease-in-out delay-60 hover:bg-gray-800 `} onClick={onDash}>
					<Option name="Dashboard" padding="mt-10 sm:m-3" logo={dash} ></Option>
				</button>
				<button className={`${challClicked && "bg-slate-700 wiggle"} hover:border hover:border-blue-500 rounded-xl  m-1 transition ease-in-out delay-60 hover:bg-gray-800 `} onClick={onChallanges}>
					<Option name="Challanges" padding="mt-10 sm:m-3" logo={chall} ></Option>
				</button>
				<button className={`${statClicked && "bg-slate-700 wiggle"} hover:border hover:border-blue-500 rounded-xl  m-1 transition ease-in-out delay-60 hover:bg-gray-800 `} onClick={onStatis}>
					<Option name="Statistics" padding="mt-10 sm:m-3" logo={anyl} ></Option>
				</button>
				<button className={`${savedClicked && "bg-slate-700 wiggle"} hover:border hover:border-blue-500 rounded-xl  m-1 transition ease-in-out delay-60 hover:bg-gray-800 `} onClick={onSaved}>
					<Option name="Saved" padding="mt-10 sm:m-3" logo={save} ></Option>
				</button>
				<button className={`${settClicked && "bg-slate-700 wiggle"} hover:border hover:border-blue-500 rounded-xl  m-1 transition ease-in-out delay-60 hover:bg-gray-800 `} onClick={onsettings}>
					<Option name="Settings" padding="mt-10 sm:m-3" logo={setting} ></Option>
				</button>
				<button className={`${logoutClicked && "bg-slate-700 wiggle"} hover:border hover:border-blue-500 rounded-xl  m-1 transition ease-in-out delay-60 hover:bg-gray-800 `} onClick={onLogout}>
					<Option name="Logout" padding="mt-10 sm:m-3" logo={logout} ></Option>
				</button>
				{/* <Option name="Challanges" padding="mt-5" logo={chall} ></Option>
				<Option name="Statistics" padding="mt-5" logo={anyl} ></Option>
				<Option name="Saved" padding="mt-5" logo={save} ></Option>
				<Option name="Settings" padding="mt-5" logo={setting} ></Option>
                <Option name="Logout" padding="mt-5" logo={logout} ></Option> */}
			</div>
		</div>
	)
};