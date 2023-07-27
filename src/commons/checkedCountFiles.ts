export const checkedCountFiles = (oldFiles: File[], selectFiles: File[], maxLength: number) => {
    let connectFiles = [...oldFiles, ...selectFiles];

    if(connectFiles.length > maxLength){
        connectFiles = connectFiles.slice(0, maxLength);
    }

    return connectFiles;
}