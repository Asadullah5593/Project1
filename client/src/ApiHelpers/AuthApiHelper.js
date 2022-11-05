import axios from "axios";
import {API_URL} from "../utils/apiRoute";
import config from "../utils/constants";

export async function loginUser(data) {
    return axios.post(`${API_URL}users/login`, data, config);
}

export async function signupUser(data) {
    return axios.post(`${API_URL}users/signup`, data, config);
}