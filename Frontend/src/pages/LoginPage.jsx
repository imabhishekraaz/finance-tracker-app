import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { loginPage } from '../styles/loginAndSignup';
import { IonIcon } from "@ionic/react";
import { logoFacebook, logoGoogle, logoTwitter, logoReddit } from "ionicons/icons";
import { handleLogin } from '../api/api';
import useDocumentTitle from '../hooks/useDocumentTitle';


const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    useDocumentTitle('Login - FinFlow')

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    }, [navigate])

    const LoginHandler = async (e) => {
        try {
            e.preventDefault();
            const result = await handleLogin(email, password);

            if (result.success) {
                setError('');
                navigate("/");
            } else {
                setError(result.message);
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <>
            <div className={loginPage.wrapper}>
                <div className={loginPage.innerWrapper}>
                    <div className={loginPage.mainWrapper}>
                        <div>
                            <img src={logo} alt="logo" className={loginPage.image} />
                        </div>
                        <div className='flex flex-col text-center justify-center items-center lg:border lg:border-black lg:my-5 lg:rounded-xl'>
                            <h1 className='text-3xl font-bold text-black'>Login</h1>

                            <form onSubmit={LoginHandler} className={loginPage.formContainer}>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder='Email'
                                    className={loginPage.emailInput}
                                    required
                                />
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder='Password'
                                    className={loginPage.passwordInput}
                                    required
                                />

                                <div className={loginPage.secondWrapper}>
                                    <div className={loginPage.secondInnerWrapper}>
                                        <div className={loginPage.cheboxWrapper}>
                                            <input type="checkbox" id="checkbox" />
                                            <label htmlFor="checkbox"
                                                className='text-[10px]'
                                            >Remember me</label>
                                        </div>
                                        <a href="#" className={loginPage.forgetWrapper}>Forgot password?</a>
                                    </div>
                                </div>

                                {error && (
                                    <div className="w-full text-red-400 flex gap-5 justify-center" >
                                        <p className="">{error}</p>
                                    </div>
                                )}

                                <div className={loginPage.LoginButtonWrapper}>
                                    <button type="submit" className={loginPage.loginButton}>Login</button>
                                </div>
                            </form>
                            <div>
                                <div className={loginPage.thirdWrapper}>
                                    <div className={loginPage.thirdMainWrapper}>
                                        <hr />
                                        <p>OR</p>
                                        <hr />
                                    </div>
                                </div>

                                <div className={loginPage.forthWrapper}>
                                    <div className={loginPage.forthMainWrapper}>
                                        <IonIcon className={loginPage.ionIcon} icon={logoGoogle} />
                                        <IonIcon className={loginPage.ionIcon} icon={logoTwitter} />
                                        <IonIcon className={loginPage.ionIcon} icon={logoFacebook} />
                                        <IonIcon className={loginPage.ionIcon} icon={logoReddit} />
                                    </div>
                                </div>

                                <div className={loginPage.fifthWrapper}>
                                    <p className={loginPage.fifthParagraph}>
                                        Don't have an account?{' '}
                                        <Link to='/signup' className={loginPage.signupButton}>Sign Up here</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    );
};

export default LoginPage;