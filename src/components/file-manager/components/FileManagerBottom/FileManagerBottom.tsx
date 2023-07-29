import React, { ChangeEvent } from "react";
import ButtonUploadFile from "../../../ButtonUploadFile/ButtonUploadFile";
import Button from '../../../Button/Button';

import './FileManagerBottom.scss';

interface IFileManagerBottom {
    onChangeFiles: (event: ChangeEvent<HTMLInputElement>) => void,
    onUploadFiles: () => void,
    countFiles: number
}

function FileManagerBottom({ onChangeFiles, onUploadFiles, countFiles }: IFileManagerBottom) {
    return (
        <div className="file-manager-bottom">
            <div className="file-manager-bottom__buttons">
                <ButtonUploadFile
                    onChangeFiles={(event: React.ChangeEvent<HTMLInputElement>) => onChangeFiles(event)} />
                <Button type="button" onClick={onUploadFiles}>Upload Files</Button>
            </div>
            <span className="file-manager-bottom__counter">
                {`${countFiles}/100`}
            </span>
        </div>
    )
}

export default FileManagerBottom;