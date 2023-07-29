import { getInfo } from "./api/info";

const KEY = 'api_token_yandex';

export const saveToken = (token: string) => {
    localStorage.setItem(KEY, token);
}

export const getToken = () => {
    return localStorage.getItem(KEY)
}

export const removeToken = () => {
    localStorage.removeItem(KEY);
}

export const checkToken = async (): Promise<boolean> => {
    const res = await getInfo();

    return !(res === false);
}