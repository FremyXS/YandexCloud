import { upload } from "./api/resources";

function subtractOne(files: File[]): Promise<any[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = files.map((file) => {
                return upload(file);
            });
            resolve(result);
        }, 0);
    });
}

export const uploadFiles = async (files: File[]) => {
    const promises: Promise<number[]>[] = [];

    for (let i = 0; i < files.length; i++) {
        promises.push(subtractOne([files[i]]));
    }

    Promise.all(promises)
        .then((results) => {
            const updatedNumbers = results.flat();
            console.log(updatedNumbers);
        })
        .catch((error) => console.error(error));
}