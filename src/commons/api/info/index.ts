import { api } from "..";

export const getInfo = async () => {
    try{
        const {data} = await api().get('');
        return data;
    }
    catch{
        return false;
    }
}