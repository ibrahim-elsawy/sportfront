import React, { useState, useEffect } from 'react';
import { ButtonIcon } from './ButtonIcon';
import { Link } from 'react-router-dom';

import defaultImage from '../../assets/images/profile.png';
import { getMyProfile, getMyUsername, UpdateProfile } from '../../services/user';


import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { toast } from 'react-toastify';


const EditProfile = ({ onCancel, userId, profileId }) => {
	const [clicked, setClicked] = useState(false);
	const [file, setFile] = useState(null);
	const [bio, setBio] = useState("");


	const [imgSrc, setImgSrc] = useState(null);
	const [image, setImage] = useState(null);
	const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 16 / 9 });
	const [croppedImageUrl, setCroppedImageUrl] = useState("");

	const onEdit = async () => { 
		console.log("edditing");
		console.log(await crop);
		console.log(await croppedImageUrl);
		console.log(await image);
		let profileImage = await fetch(croppedImageUrl).then(r => r.blob());
		const flag = await UpdateProfile(profileId, bio, profileImage);
		flag ? toast.success('Profile Updated Successfully', { 
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
		window.location.href = "/";
	};



	const makeClientCrop = async (crop) => {
		console.log("sucessfully run.............");
		if ((image, crop.width && crop.height)) {
			console.log(crop);
			const croppedImg = await getCroppedImg(image, crop, "newFile.jpeg");
			console.log(croppedImg);
			setCroppedImageUrl(croppedImg);
		}
	};
	const getCroppedImg = (sourceImage, crop, fileName) => {
		var s = new Image();
		s.src = imgSrc;
		const canvas = document.createElement("canvas");
		console.log(sourceImage.naturalHeight);
		console.log(sourceImage.height);
		console.log(sourceImage);
		const scaleX = sourceImage.naturalWidth / sourceImage.width;
		const scaleY = sourceImage.naturalHeight / sourceImage.height;
		// const scaleX = sourceImage.x;
		// const scaleY = sourceImage.y;
		canvas.width = crop.width;
		canvas.height = crop.height;
		const ctx = canvas.getContext("2d");
		ctx.drawImage(
			sourceImage,
			crop.x * scaleX,
			crop.y * scaleY,
			crop.width * scaleX,
			crop.height * scaleY,
			0,
			0,
			crop.width,
			crop.height);
		// createImageBitmap(s).then(img => {
		// 	console.log(crop);
		// 	console.log(img);
		// 	ctx.drawImage(
		// 		img,
		// 		crop.x * 1,
		// 		crop.y * 1,
		// 		crop.width * 1,
		// 		crop.height * 1,
		// 		0,
		// 		0,
		// 		crop.width,
		// 		crop.height);
		// }
			// ).catch(err => console.error(err));
		
		try {
			return new Promise((resolve) => {
				canvas.toBlob((file) => {
					console.log(file);
					resolve(window.URL.createObjectURL(file));
				}, "image/jpeg");
			});
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	const onImageInput = (f) => {
		let v = new Image();
		setFile(f.target.files[0]);
		const objectURL = window.URL.createObjectURL(f.target.files[0]);
		console.log(f.target.files[0]);
		setImgSrc(objectURL);
		v.src = objectURL;
		setImage(v);
	};


	return (
		<div className={`mt-3`}>
			<div className="mb-6">
				<label htmlFor="text" className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Bio</label>
				<input onChange={(e) => setBio(e.target.value)} type="text" name="username" id="username" placeholder="A breif about you" className="w-11/12 px-3 py-1 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
			</div>
			<input onChange={onImageInput} className="block  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
			<div className="mt-1 text-xs text-gray-500 dark:text-gray-500" id="user_avatar_help">An image describe briefly Challange</div>
			{(imgSrc !== null) && (<ReactCrop
				src={imgSrc}
				crop={crop}
				ruleOfThirds
				onImageLoaded={(img) => { console.log(img); setImage(img); }}
				// onComplete={(crop) => image ? makeClientCrop(crop) : console.log("wait")}
				onComplete={(crop) => imgSrc ? makeClientCrop(crop) : console.log("wait")}
				onChange={(cropData) => setCrop(cropData)}
			><img src={imgSrc}></img></ReactCrop>)}
			<div className='flex justify-between'>
				<button onClick={onEdit} className={`h-7 text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold  px-2 rounded-full mt-2 mb-3`}>
					Save
				</button>
				<button onClick={onCancel} className={`h-7 text-sm bg-red-500 hover:bg-red-700 text-white font-bold  px-2 rounded-full mt-2 mb-3`}>
					Cancel
				</button>
			</div>
		</div>
	)
}

export default EditProfile;