import axios from "axios";
import { getToken } from "../token";
import { BASE_URL } from '../../config';

const headers = {
    Authorization: `OAuth ${getToken()}`,
    "Content-Type": 'application/json',
    Accept: 'application/json',
}

export const api = () => {
    console.log(getToken());

    return axios.create({
        baseURL: BASE_URL,
        headers: headers
    })
}