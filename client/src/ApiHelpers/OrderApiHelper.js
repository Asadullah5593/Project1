import axios from "axios";
import config from "../utils/constants";
import {API_URL} from "../utils/apiRoute";

export async function placeNewOrder(data) {
    config['headers'].Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return axios.post(`${API_URL}order/create`, data, config);
}