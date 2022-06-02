import { getToken, refreshToken } from "./authService";
import http from "./httpService";
import config  from "./Routing.json";

const apiEndpoint = config.main + "profile/";
const token = getToken();
const configHeader = {headers:{"Authorization":"Bearer "+token}};

export const getUsername = async (user_id)=>{
    try {
        const {data, status} = await http.get(apiEndpoint+"username/"+user_id, configHeader);
        if(status === 401){
            await refreshToken()
            const {data} = await http.post(apiEndpoint+"username/"+user_id, configHeader);
            return data;
        }
        console.log(data);
        return data;
    }
    catch (err){
        console.log(err);
        return false;
    }
};
export const getMyUsername = async ()=>{
    try {
        const {data, status} = await http.get(apiEndpoint+"username/me", configHeader);
        if(status === 401){
            await refreshToken()
            const {data} = await http.post(apiEndpoint+"username/me", configHeader);
            return data;
        }
        console.log(data);
        return data;
    }
    catch (err){
        console.log(err);
        return false;
    }
};

export const getProfile = async (user_id)=>{
    try {
        const {data, status} = await http.get(apiEndpoint+"info/"+user_id, configHeader);
        if(status === 401){
            await refreshToken();
            const {data} = await http.get(apiEndpoint+"info/"+user_id, configHeader);
            return data;
        }
        console.log(data);
        return data;
    }
    catch (err){
        console.log(err);
        return false;
    }
};

export const getMyProfile = async ()=>{
    try {
        const {data, status} = await http.get(apiEndpoint+"info/me", configHeader);
        if(status === 401){
            await refreshToken();
            const {data} = await http.get(apiEndpoint+"info/me", configHeader);
            return data;
        }
        console.log(data);
        return data;
    }
    catch (err){
        console.log(err);
        return false;
    }
};

export const UpdateProfile= async (id, bio, profileImage)=>{
    try {
        const formData = new FormData(); 
        profileImage && formData.append("file", profileImage);
		bio && formData.append("bio", bio);
        const {status} = await http.post(apiEndpoint+id, formData, configHeader);
        if(status === 401){
            await refreshToken();
            await http.get(apiEndpoint+id, formData, configHeader);
            return true;
        }
        return true;
    }
    catch (err){
        console.log(err);
        return false;
    }
};



const api = { 
    getUsername, 
};
export default api ;
