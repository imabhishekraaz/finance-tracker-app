import React, { useEffect, useState } from 'react'
import { IonIcon } from '@ionic/react'
import { logoFacebook, logoGoogle, logoTwitter, logoReddit, ear } from "ionicons/icons";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signupPage } from '../styles/loginAndSignup';
import { userRegister } from '../api/api';

const Signup = () => {
    const navigate = useNavigate();
    const [fisrtName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    const fullName = `${fisrtName} ${lastName}`;

    // Remove the token when user come on the signup page
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            localStorage.removeItem('token')
        }
    },[])
    console.log(localStorage.getItem('token'))
    
    const handleSignup = (e) => {
        e.preventDefault();
        userRegister(fullName, email, password, String(phoneNo))
            .then((res) => {
                if(res.success === true){
                    navigate('/')
                }
            })
            .catch((error) => {
                navigate('/signup');
            })
    }
    return (

        <>
            <div className={signupPage.wrapper}>
                <div className={signupPage.innerWrapper}>
                    <div className={signupPage.mainWrapper}>
                        <div className='flex jutsify-center items-center'>
                            <img src="src\assets\logo.png" alt="logo" />
                        </div>
                        <div className='flex flex-col my-5 lg:border lg:border-black lg:rounded-xl'>
                            <h1 className='flex justify-center items-center text-3xl font-bold mt-3'>Sign Up</h1>
                            <div >
                                <div className={signupPage.secondWrapper}>
                                    <div className={signupPage.secondMainWrapper}>
                                        <input onChange={(e) => setFirstName(e.target.value)} className={signupPage.input} type="text" placeholder="John" required />
                                        <input onChange={(e) => setLastName(e.target.value)} className={signupPage.input} type="text" placeholder="Smith" required />
                                    </div>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='abc@mail.com' required className={signupPage.secondInput} />
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" required placeholder='********' className={signupPage.secondInput} />
                                    <input onChange={(e) => setPhoneNo(e.target.value)} type='phone' name="phone-no" id="phone-no" required placeholder='+919876543210' className={signupPage.phoneInput} />
                                </div>
                                <div className={signupPage.thirdWrapper}>
                                    <button onClick={handleSignup} className={signupPage.createButton}>Create Account</button>
                                </div>
                            </div>
                            <div>
                                <div className={signupPage.forthWrapper}>
                                    <div className={signupPage.forthMainWrapper}>
                                        <hr />
                                        <p>OR</p>
                                        <hr />
                                    </div>
                                </div>
                                <div className={signupPage.fifthWrapper}>
                                    <div className={signupPage.fifthMainWrapper}>
                                        <IonIcon className={signupPage.IonIcon} icon={logoGoogle} />
                                        <IonIcon className={signupPage.IonIcon} icon={logoTwitter} />
                                        <IonIcon className={signupPage.IonIcon} icon={logoFacebook} />
                                        <IonIcon className={signupPage.IonIcon} icon={logoReddit} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup