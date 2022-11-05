import axios from "axios";
import config from "../utils/constants";
import {API_URL} from "../utils/apiRoute";

export async function getProductDetail() {
    return axios.get(`${API_URL}productdetail/show`, config);
}