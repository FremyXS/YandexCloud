import axios from "axios";
import { AUTH_URL, CLIENT_ID, CLIENT_SECRET } from '../../../config';

const encode = (str: string): string => btoa(str);

export const confirmCode = async (code: string) => {
    const params = {
        grant_type: 'authorization_code',
        code: code
    };

    const headers = {
        Authorization: `Basic ${encode(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        'Content-type': 'application/x-www-form-urlencoded'
    }

    try {
        const { data } = await axios.post(AUTH_URL, new URLSearchParams(params), {
            headers: headers
        })

        return data.access_token;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}