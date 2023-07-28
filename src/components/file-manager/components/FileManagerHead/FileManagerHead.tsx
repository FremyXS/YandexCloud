import React from "react";

function FileManagerHead() {
    return(
        <thead className="file-manager-head">
            <tr>
                <td>
                    <span style={{display:"none"}}>Icon</span>
                </td>
                <td>
                    <span>Name</span>
                </td>
                <td>
                    <span>Size</span>
                </td>
                <td>
                    <span>Type</span>
                </td>
            </tr>
        </thead>
    )
}

export default FileManagerHead;