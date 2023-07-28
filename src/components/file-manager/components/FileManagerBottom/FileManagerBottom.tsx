import React, { ChangeEvent } from "react";

import './FileManagerBottom.scss'

interface IFileManagerBottom {
    onChangeFiles: (event: ChangeEvent<HTMLInputElement>) => void,
    onUploadFiles: () => void,
    countFiles: number
}

function FileManagerBottom({ onChangeFiles, onUploadFiles, countFiles }: IFileManagerBottom) {
    return (
        <div className="file-manager-bottom">
            <div className="file-manager-bottom__buttons">
                <input type='file' multiple onChange={onChangeFiles} />
                <button type="button" onClick={onUploadFiles}>Upload Files</button>
            </div>
            <span className="file-manager-bottom__counter">
                {`${countFiles}/100`}
            </span>
        </div>
    )
}

export default FileManagerBottom;