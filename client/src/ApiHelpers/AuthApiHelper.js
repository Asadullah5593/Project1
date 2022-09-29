import axios from "axios";
import {API_URL} from "../utils/apiRoute";


export async function loginUser(email, password) {
    let config = {
        Headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const {data} = await axios.post(`${API_URL}users/login`, {email, password}, config);
    } catch (e) {
        alert(e.response.data.error)
    }


}