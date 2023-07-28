import React from "react";
import FileImage from '../../../../temps/img/file_image.jpg';
import './FileManagerElement.scss'

function FileManagerElement({file}:{file:File}){
    return (
        <tr className="file-manager-element">
            <td>
                <img height={80} src={FileImage} alt="file_icon" />
            </td>
            <td className="file-manager-element__value">
                <span>{file.name}</span>
            </td>
            <td className="file-manager-element__value">
                <span>{`${(file.size / 1024).toFixed(2)} KB`}</span>
            </td>
            <td className="file-manager-element__value">
                <span>{file.type}</span>
            </td>
        </tr>
    )
}

export default FileManagerElement;