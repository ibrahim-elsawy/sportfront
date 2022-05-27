import { getToken, refreshToken } from "./authService";
import http from "./httpService";
import config  from "./Routing.json";

const apiEndpoint = config.main + "profile/username/";
const token = getToken();
const configHeader = {headers:{"Authorization":"Bearer "+token}};

export const getUsername = async (user_id)=>{
    try {
        const {data, status} = await http.get(apiEndpoint+user_id, configHeader);
        if(status === 401){
            await refreshToken()
            const {data} = await http.post(apiEndpoint+user_id, configHeader);
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

const api = { 
    getUsername, 
};
export default api ;
