import React, { ChangeEvent, useState } from "react";
import FileManagerHead from './components/FileManagerHead/FileManagerHead';
import FileManagerBody from "./components/FileManagerBody/FileManagerBody";
import FileManagerBottom from "./components/FileManagerBottom/FileManagerBottom";
import { checkedCountFiles } from "../../commons/checkedCountFiles";
import { uploadFiles } from "../../commons/uploadFiles";

import './FileManager.scss';

function FileManager() {
    const [files, setFiles] = useState<File[]>([])

    const onChangeFiles = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFiles = Array.from(event.target.files);

            setFiles(checkedCountFiles(files, selectedFiles, 100));
        }

        event.preventDefault();
    }

    const onUploadFiles = () => {
        uploadFiles(files);
    }

    return (
        <div className="file-manager">
            <div className="file-manager-table">
                <table>
                    <FileManagerHead />
                    <FileManagerBody files={files} />
                </table>
            </div>
            <FileManagerBottom
                onChangeFiles={(event: ChangeEvent<HTMLInputElement>) => onChangeFiles(event)}
                onUploadFiles={onUploadFiles}
                countFiles={files.length} />
        </div>
    )
}

export default FileManager;
