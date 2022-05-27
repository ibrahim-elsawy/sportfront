import React, {useEffect, useState} from 'react'
import { CreateChallange, GetAllChallanges, GetNumChallanges } from '../../services/challangeService';
import Card from './card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import config  from "./Routing.json";
const apiEndpoint = config.main + "image/";

const Challange = () => { 
	const [indexPostCard, setIndexCard] = useState(0);
	const [numPosts, setNumPosts] = useState(0);
	const [sending, setSending] = useState(false);
	const [clicked, setClicked] = useState(false);
	const [file, setFile] = useState(null);
	const [description, setDescription] = useState("");
	const [values, setValues] = useState([]);
	// const [images, setImages] = useState([]);
	// const [ids, setIds] = useState([]);
	// const [descriptions, setDescriptions] = useState("");
	// const [numUsers, setNumUsers] = useState([]);
	// const [adminId, setAdminId] = useState([]);

	const requestChallanges = async (skip, take) => {
		try {
			setValues(values.concat(await GetAllChallanges(skip, take)));
		} catch (error) {
			console.log(error);
		}
			// setImages(images.concat(.images));
			// setDate(date.concat(response.data.date));
			// setIds(ids.concat(response.data.ids));
			// setLikes(likes.concat(response.data.likes));
			// setTitle(title.concat(response.data.title));
			// setUser(user.concat(response.data.user));
			// setSending(false)
	};
	const loadMore = async () => { 
		setSending(true);
		if (numPosts > (indexPostCard + 3)) {
			await requestChallanges(indexPostCard + 3, 3);
			setIndexCard(indexPostCard + 3);
			sending(false);
		}
	};
	useEffect(() => {
		console.log("rendered............................")
		const getNumImages = async () => {
			const num = await GetNumChallanges()
			setNumPosts(num);
		};
		getNumImages();
		
		// requestChallanges(indexPostCard, 2);
		

	}, []);
	
	const onCreate = ()=>{
		setClicked(!clicked);
	};
	const onCancel = ()=>{
		setClicked(!clicked);
	};
	const onAddChallange = async()=>{
		if(file===null|| description.length===0){
			let errMsg= "";
			file === null ? errMsg="Enter valid file" : errMsg= "enter Description";
			console.log("challange creation failed");
			toast.error(errMsg, { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
			return false;
		}
		const flag = await CreateChallange(file, description);
		flag ? toast.success('Challange Created Successfully', { 
			position: "top-center", 
			autoClose: 5000, 
			hideProgressBar: false, 
			closeOnClick: true, 
			pauseOnHover: true, 
			draggable: true, 
			progress: undefined, }) && setClicked(!clicked) : toast.error('Request is failed', { 
				position: "top-center", 
				autoClose: 5000, 
				hideProgressBar: false, 
				closeOnClick: true, 
				pauseOnHover: true, 
				draggable: true, 
				progress: undefined, });;

	};
    return (
        <div className={` overflow-y-scroll flex flex-col backimage-gallary h-max w-full items-center mt-2 pt-2 mb-0 pb-0 `}>
			{!clicked && <button onClick={onCreate} className=" bg-slate-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center"> 
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /> </svg>
				<span>Create</span> 
			</button>}
			{clicked && <button onClick={onCancel} className=" bg-red-500 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center"> 
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>
				<span>Cancel</span> 
			</button>}
			{clicked && <div className={`mt-3`}>
				<div className="mb-6">
                            <label for="text" className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Description</label>
                            <input onChange={(e)=>setDescription(e.target.value)} type="text" name="username" id="username" placeholder="breif for Challange" className="w-11/12 px-3 py-1 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
				<input onChange={(f)=>setFile(f.target.files[0])} class="block  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
				<div class="mt-1 text-xs text-gray-500 dark:text-gray-500" id="user_avatar_help">An image describe briefly Challange</div>
				<button onClick={onAddChallange} className={`h-7 text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold  px-2 rounded-full mt-2 mb-3`}> 
				Create
				</button>
			</div>}
			{/* <div className="flex flex-col gap-20 mt-5 ml-10">
				<Card img={sport} numUsers="44" admin_Id={"kdfkldjfk"}></Card>
				<Card img={sport} numUsers="44"></Card>
			</div> */}
			<div className=" flex flex-col gap-20 mt-5 ml-10">
				{values && values.map((v) => {
					return (<Card
						key={v.$id}
						img={apiEndpoint+v.url}
						cardId={v.id}
						admin_Id={v.admin_Id}
						numUsers={v.users_Id ? v.users_Id.length : 0}
					></Card>)
				})}
			</div>
			<button onClick={loadMore} className={`${(sending === true) && "hidden"} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 mb-3`}>
				See more
			</button>
			<svg role="status" className={`${(sending===false) && "hidden "} mt-4 inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
				<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
			</svg>
		</div>
    )
}

export default Challange;