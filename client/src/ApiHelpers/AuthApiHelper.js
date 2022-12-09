import axios from "axios";
import {API_URL} from "../utils/apiRoute";
import config from "../utils/constants";

export async function loginUser(data) {
    return axios.post(`${API_URL}user/login`, data, config);
}

export async function signupUser(data) {
    return axios.post(`${API_URL}user/signup`, data, config);
}