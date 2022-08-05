import axios from "axios";
require("dotenv").config();

export default axios.create({
  baseURL: process.env.API_URL
})

export function get(url) {
  return axios.get(url);
}

export function post(url, requestData) {
  return axios.post(url, requestData);
}
