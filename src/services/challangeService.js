import { getToken, refreshToken } from "./authService";
import http from "./httpService";
import config  from "./Routing.json";

const apiEndpoint = config.main + "challenge";
const token = getToken();
const configHeader = {headers:{"Authorization":"Bearer "+token}};

export const CreateChallange = async ( file, description )=>{
    try {
        const formData = new FormData(); 
        file && formData.append("file", file);
		formData.append("description", description);
        const {data, status} = await http.post(apiEndpoint, formData, configHeader);
        if(status === 401){
            await refreshToken()
            await http.post(apiEndpoint, formData, configHeader);
        }
        console.log(data);
        return true;
    }
    catch (err){
        console.log(err);
        return false;
    }
};

export const GetAllChallanges = async (skip, take) =>{
    try {
        const {data, status} = await http.post(apiEndpoint+"/all", 
            {"skip":skip, "take":take}, 
            configHeader);
        if(status === 401){
            await refreshToken();
            const {data} = await http.get(apiEndpoint, 
                {"skip":skip, "take":take}, 
                configHeader);
            return data.challenges.$values;
        }
        return data.challenges.$values;
    } catch (error) {
        console.log(error)
    }
};
export const GetNumChallanges = async () =>{
    try {
        const {data, status} = await http.get(apiEndpoint+"/count", configHeader);
        if(status === 401){
            await refreshToken();
            const {data} = await http.get(apiEndpoint, configHeader);
            // console.log(data)
            return data.num;
        }
        // console.log(data)
        return data.num;
    } catch (error) {
        console.log(error)
    }
};

export const GetChallange = async (id) =>{
    try {
        const {data, status} = await http.get(apiEndpoint+`/${id}`, configHeader);
        if (status === 401){
            await refreshToken();
            const {data} = await http.get(apiEndpoint+`/${id}`, configHeader);
            return data;
        }
        return data;
    } catch (error) {
        console.log(error)
    }
};

export const UpdateChallange = async (id, file, description) =>{
    try {
        const formData = new FormData(); 
        file && formData.append("file", file);
		formData.append("description", description);
        const {data, status} = await http.post(apiEndpoint+`/${id}`, formData, configHeader);
        if (status === 401){
            await refreshToken();
            const {data} = await http.get(apiEndpoint+`/${id}`, formData, configHeader);
            return data;
        }
        return data;
    } catch (error) {
        console.log(error)
    }
};

export const JoinChallange = async (challange_id) =>{
    try {
        const {status} = await http.post(apiEndpoint+`/join/${challange_id}`, configHeader);
        if (status === 401){
            await refreshToken();
            await http.post(apiEndpoint+`/join/${challange_id}`, configHeader);
        }
    } catch (error) {
        console.log(error)
    }
};

export const DeleteChallange = async (challange_id) =>{
    try {
        const {status} = await http.delete(apiEndpoint+`/${challange_id}`, configHeader);
        if (status === 401){
            await refreshToken();
            await http.delete(apiEndpoint+`/${challange_id}`, configHeader);
        }
    } catch (error) {
        console.log(error)
    }
};






const api = { 
    CreateChallange, 
    GetAllChallanges, 
    GetChallange, 
    UpdateChallange, 
    JoinChallange, 
    DeleteChallange 
};
export default api ;
