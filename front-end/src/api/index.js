import axios from "axios";
// 1. in axios we donot have to add response.json()
// 2. automatically catch the errors when they are not in the 200 range of http responses




const baseURL = process.env.REACT_APP_API_URL;
// console.log(process.env.REACT_APP_API_URL);

export function get(url) {
  return axios.get(baseURL + url);
}

export function post(url, requestData) {
  return axios.post(baseURL + url, requestData);
}

export function put(url, requestData) {
  return axios.put(baseURL + url, requestData);
}

export function remove(url) {
  return axios.delete(baseURL + url);
}
