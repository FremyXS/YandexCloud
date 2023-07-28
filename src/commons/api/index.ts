import axios from "axios"

const API_TOKEN = 'xxx';
const BaseUrl = 'https://cloud-api.yandex.net/v1/disk/'

export const api = () => {
    return axios.create({
        baseURL: BaseUrl,
        headers:{
            Authorization: `OAuth ${API_TOKEN}`,
            "Content-Type": 'application/json',
            Accept: 'application/json',
        }
    })
}