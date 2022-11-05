import axios from "axios";
import config from "../utils/constants";
import {API_URL} from "../utils/apiRoute";

export async function getAllProducts() {
    return axios.get(`${API_URL}products/get-all`, config);
}
export async function getProductDetail(id) {
    return axios.get(`${API_URL}products/detail/${id}`, config);
}