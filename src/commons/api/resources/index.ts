import axios from "axios";
import { api } from ".."

export const upload = async (file: File) => {

    try {

        const { data: downloadPath } = await api().get('resources/upload', {
            params: {
                path: file.name,
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