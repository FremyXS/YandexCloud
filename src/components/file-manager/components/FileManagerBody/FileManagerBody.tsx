import React, { ReactNode } from "react";

function FileManagerBody({ children }: { children: ReactNode }) {
    return (
        <tbody className="file-manager-body">
            {children}
        </tbody>
    )
}

export default FileManagerBody;