import React, { ChangeEvent } from "react";

import './ButtonUploadFile.scss';

interface IButtonUploadFile {
    onChangeFiles: (event: ChangeEvent<HTMLInputElement>) => void,
}

function ButtonUploadFile({ onChangeFiles }: IButtonUploadFile) {
    return (
        <div className="component-file-upload">
            <input type='file' multiple onChange={onChangeFiles} />
        </div>
    )
}

export default ButtonUploadFile;