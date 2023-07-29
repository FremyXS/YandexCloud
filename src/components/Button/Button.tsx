import React, { ReactNode } from "react";

import './Button.scss';

interface IButton {
    children: ReactNode,
    type: "button" | "submit" | "reset" | undefined,
    onClick: () => void
}

function Button({ children, type, onClick }: IButton) {
    return (
        <div className="component-button">
            <button type={type} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button;