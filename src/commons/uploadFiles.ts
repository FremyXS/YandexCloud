import { NAME_FOLDER } from "../config";
import { checkFolder, createFolder, upload } from "./api/resources";

function uploadOneFile(files: File[]): Promise<any[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = files.map((file) => {
                return upload(NAME_FOLDER, file);
            });
            resolve(result);
        }, 0);
    });
}

export const uploadFiles = async (files: File[]) => {

    const isFolder = await checkFolder(NAME_FOLDER);

    if(!isFolder){
        await createFolder(NAME_FOLDER);
        console.log(`Create folder: ${NAME_FOLDER}`);
    }

    const promises: Promise<number[]>[] = [];

    for (let i = 0; i < files.length; i++) {
        promises.push(uploadOneFile([files[i]]));
    }

    Promise.all(promises)
        .then((results) => {
            const uploadNumbers = results.flat();
            console.log(uploadNumbers);
        })
        .catch((error) => console.error(error));
}