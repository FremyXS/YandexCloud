import React from "react";
import FileManagerHead from './components/FileManagerHead/FileManagerHead';
import FileManagerBody from "./components/FileManagerBody/FileManagerBody";

import './FileManager.scss';

interface IFileManager {
    files: File[]
}

function FileManager({ files }: IFileManager) {
    return (
        <div className="file-manager">
            <table>
                <FileManagerHead />
                <FileManagerBody files={files} />
            </table>
        </div>
    )
}

export default FileManager;