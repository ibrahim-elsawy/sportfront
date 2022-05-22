import React from 'react'
import reg from '../../assets/images/reg.png';
import { useState, useEffect } from 'react';
import { ButtonIcon } from './ButtonIcon';
import { toast, ToastContainer } from 'react-toastify';
import { register } from '../../services/authService';


const re = [
    {"exp":/(?=.{8,})/, "errorMsg":"The password must be at least 8 characters"},
    {"exp":/(?=.*[A-Z])/, "errorMsg":"The password must has at least one uppercase letter"},
    {"exp": /(?=.*[a-z])/, "errorMsg":"The password must has at least one lowercase letter"},
    {"exp":/(?=.*[0-9])/, "errorMsg":"The password must has at least one digit"},
    {"exp":/([^A-Za-z0-9])/, "errorMsg":"The password must has at least one special character"},
];

const SignUp = () => { 
    const [emailError, setEmailError] = useState(false);
    const [show, setShow] = useState(false);
    const [passError, setPassError] = useState(null);
    const [matchError, setMatchError] = useState(null);
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [username, setUsername] = useState("");

    const isValidEmail = email => { 
        if(email.length === 0){
            setEmailError(false);
            return false;
        }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
        if(! re.test(String(email).toLowerCase())){
            setEmailError(true)
            return false
        } 
        setEmailError(false);
        return true;
    }
    
    const isValidPassword = (password) =>{
        if(password.length === 0){
            return false;
        }
        for (let e of re){
            console.log(password);
            console.log(e);
            if (! e.exp.test(password)){
                setPassError(e.errorMsg);
                console.log(e.errorMsg);
                return false;
            }
        };
        setPassError(null);
    };

    const getPassword = async (e)=>{
        console.log("detected change");
        await setPass1(e.target.value);
        // isValidPassword(pass1);

    };
    const isPasswordMatched = (password,password2)=>{
        if(password.length === 0){
            return true;
        };
        if(password === password2){
            setMatchError(null);
            return true;
        }
        setMatchError("Unmatched password");

    };
    useEffect(()=>{
        isValidEmail(email);
        isValidPassword(pass1);
        isPasswordMatched(pass2,pass1);
        // toast.error('🦄 Wow so easy!', { 
        //         position: "top-right", 
        //         autoClose: 5000, 
        //         hideProgressBar: false, 
        //         closeOnClick: true, 
        //         pauseOnHover: true, 
        //         draggable: true, 
        //         progress: undefined, });
    }, [pass1,pass2, email, show]);


    const onShow = ()=>{
        setShow(!show);
    };

    const onSubmit = async()=>{
        console.log("submitted");
        console.log(`${emailError} --- ${passError} --- ${matchError} `)
        if (username.length === 0){
            console.log("username is empty")
            // toast('🦄 Wow so easy!', { 
            //     position: "top-right", 
            //     autoClose: 5000, 
            //     hideProgressBar: false, 
            //     closeOnClick: true, 
            //     pauseOnHover: true, 
            //     draggable: true, 
            //     progress: undefined, });
        }
        else if(emailError === true ||  passError || matchError){
            console.log("Enter required info");
        }
        else{
            await register({
                "username":username,
                "email":email,
                "password": pass1,
            });
            window.location.href = "/";
        }
    };
    const eyeOff = show ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /> 
			</svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-sky-400" viewBox="0 0 20 20" fill="currentColor"> 
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /> <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" /> 
            </svg>
    return (
        <div>
            <div className="flex items-center  min-h-screen bg-white dark:bg-gray-900">
            <div className="container mx-auto">
            <div className="max-w-md mx-auto my-10">
                <div className="text-center flex flex-col items-center ">
                    <img src={reg} className=" w-3/6 h-3/6 "></img>
                    <h1 className="mt-4 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign up</h1>
                </div>
                <div className="m-7">
                    <form action="">
                        <div className="mb-6">
                            <label for="text" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Username</label>
                            <input onChange={(e)=>{setUsername(e.target.value);}} type="text" name="username" id="username" placeholder="rob45#" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                            <input onChange={(e)=>{setEmail(e.target.value);}} type="email" name="email" id="email" placeholder="you@company.com" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            {emailError && <label for="email" className="block mb-2 text-xs text-red-600 dark:text-red-400">Unvalid Email</label>}
                        </div>
                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            </div >
                            <div className=" flex items-center relative">
                                    <input onChange={getPassword} type={show ? "text" : "password"} name="password" id="password" placeholder="Your Password" className=" w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    <ButtonIcon displayButton={true} onClick={onShow} logo={eyeOff} customImage={true} className=" absolute right-1"></ButtonIcon>
                            </div>
                            {passError && <label for="email" className="block mb-2 text-xs text-red-600 dark:text-red-400">{passError}</label>}
                        </div>
                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm text-gray-600 dark:text-gray-400">Retype Password</label>
                            </div>
                            <div className=" flex items-center relative">
                                <input onChange={(e)=>{setPass2(e.target.value)}} type={show ? "text" : "password"} name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                <ButtonIcon displayButton={true} onClick={onShow} logo={eyeOff} customImage={true} className=" absolute right-1"></ButtonIcon>
                            </div>
                            {matchError && <label for="email" className="block mb-2 text-xs text-red-600 dark:text-red-400">{matchError}</label>}
                        </div>
                        <div className="mb-6">
                            <button onClick={onSubmit} type="button" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Register</button>
                        </div>
                    </form>
                </div>
            </div>
                </div>
            </div>
        </div>

    )
}

export default SignUp;