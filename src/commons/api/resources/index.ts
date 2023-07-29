import axios from "axios";
import { api } from ".."

export const checkFolder = async (folderName: string) => {
    try {
        const {data} = await api().get(`resources?path=${folderName}`)
        return data;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

export const createFolder = async (folderName: string) => {
    try {
        const {data} = await api().put(`resources?path=${folderName}`)
        return data;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

export const upload = async (folderName: string, file: File) => {
    try {

        const { data: downloadPath } = await api().get('resources/upload', {
            params: {
                path: `${folderName}/${file.name}`,
                overwrite: false
            }
        })

        const fileData = new FormData();
        fileData.append('file', file);

        const { data } = await axios.put(downloadPath.href, fileData);
        return data;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}