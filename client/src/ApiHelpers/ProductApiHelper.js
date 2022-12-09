import axios from "axios";
import config from "../utils/constants";
import {API_URL} from "../utils/apiRoute";

export async function getAllProducts() {
    return axios.get(`${API_URL}product/all`, config);
}
export async function getProductDetail(id) {
    config['headers'].Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return axios.get(`${API_URL}product/detail/${id}`, config);
}