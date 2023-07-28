import React from "react";
import FileManagerElement from "../FileManagerElement/FileManagerElement";

function FileManagerBody({files}:{files: File[]}){
    return(
        <tbody>
            {files.map((file, index) =>
                <FileManagerElement key={index} file={file} />
            )}
        </tbody>
    )
}

export default FileManagerBody;