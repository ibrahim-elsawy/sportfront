import http from "./httpService";
import apiUrl from "../config.json";

// const apiEndpoint =  "http://localhost:5000/api/search";
const apiEndpoint =  apiUrl + "/search";




export function search(keyword, genre) {
	return http.get(apiEndpoint, {params:{keyword, genre}})
}