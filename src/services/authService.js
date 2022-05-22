import http from "./httpService";
import config  from "./Routing.json";

const apiEndpoint = config.main + "auth";
const tokenKey = "x-auth";
const refreshKey = "x-refresh";

http.setToken(getToken());

export const register = async (userInfo) => { 
  const { data } = await http.post(apiEndpoint + "/register", userInfo);
  localStorage.setItem(tokenKey, data.token);
  localStorage.setItem(refreshKey, data.refreshToken);
};

export async function login(userInfo) {
  const { data } = await http.post(apiEndpoint+"/login", userInfo);
  localStorage.setItem(tokenKey, data.token);
  localStorage.setItem(refreshKey, data.refreshToken);
}

export const refreshToken = async () => { 


  // TODO: implement the refresh token 


  console.log("refresh token");
};


export function logout() {
  localStorage.removeItem(tokenKey);
}



export function getToken() {
  return localStorage.getItem(tokenKey);
}

export const getRefreshToken = () => { 
  return localStorage.getItem(refreshKey);
};

const api = {
  register,
  login,
  refreshToken,
  logout,
  getToken,
  getRefreshToken
};
export default api ;
