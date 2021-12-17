import React from "react";
import logo from '../../assets/images/running.png'
import dash from '../../assets/images/dashboard_1.png'
import chall from '../../assets/images/brain.png'
import anyl from '../../assets/images/analysis.png'
import save from '../../assets/images/diskette.png'
import setting from '../../assets/images/settings.png'
import { Option } from './Option';

export const Left = (props) => {
	return (
		<div>
			<div className="flex flex-row">
				<img className="m-0 p-0 h-12 w-12" src={logo} alt="" />
				<div className="text-xl font-medium text-neutral-200 p-2">BEAST</div>
			</div>
			<div className="flex flex-col">
				<div className="mt-20 text-xs"> MENU </div>
				<Option name="Dashboard" padding="mt-3" logo={dash} ></Option>
				<Option name="Challanges" padding="mt-5" logo={chall} ></Option>
				<Option name="Statistics" padding="mt-5" logo={anyl} ></Option>
				<Option name="Saved" padding="mt-5" logo={save} ></Option>
				<Option name="Settings" padding="mt-5" logo={setting} ></Option>
			</div>
		</div>
	)
};