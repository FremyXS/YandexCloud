import React, { ChangeEvent, useEffect, useState } from "react";
import { removeToken, saveToken } from "../../commons/token";
import { getInfo } from "../../commons/api/info";
import Button from "../Button/Button";
import { confirmCode } from "../../commons/api/auth";
import { CONFIRM_URL } from '../../config';
import './AuthWindow.scss';

function AuthWindow() {
    const [isClickSignIn, setIsClickSignIn] = useState<boolean>(false);
    const [code, setCode] = useState<string>("");
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");

    useEffect(() => {
        checkAuth()
    }, []);


    const handleOnClickSignIn = () => {
        setIsClickSignIn(true)
        window.open(CONFIRM_URL, "_blank")
    }

    const handleOnClickConfirm = async () => {

        const token = await confirmCode(code);

        if (token) {
            saveToken(token);
            window.location.reload();
        }
        else {
            alert('Error Auth');
        }
    }

    if (isLogin) {
        return (
            <div className="auth-user">
                {email}
            </div>
        );
    }

    return (
        <div className="auth-window">
            {!isClickSignIn &&
                <Button type="button" onClick={() => handleOnClickSignIn()}>
                    Sign In
                </Button>
            }
            {isClickSignIn &&
                <>
                    <input className="auth-window__input"
                        type="password"
                        placeholder="Code"
                        value={code}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)} />
                    <Button type="button" onClick={() => handleOnClickConfirm()}>
                        Submit
                    </Button>
                </>
            }
        </div>
    )

    async function checkAuth() {
        const res = await getInfo();

        if (res) {
            setIsLogin(true);
            setEmail(res.user.login)
        }
        else {
            setIsLogin(false);
            removeToken();
        }
    }
}

export default AuthWindow;