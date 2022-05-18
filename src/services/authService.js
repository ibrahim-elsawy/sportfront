import http from "./httpService";
import { main } from "Routing.json";

const apiEndpoint = main + "/auth";
const tokenKey = "token";

http.setJwt(getToken());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}



export function getToken() {
  return localStorage.getItem(tokenKey);
}
const api = {
  login,
  loginWithJwt,
  logout,
  getToken
};
export default api ;
