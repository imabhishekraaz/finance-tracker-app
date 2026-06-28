import React, { useState } from 'react'
import { IonIcon } from '@ionic/react'
import { logoFacebook, logoGoogle , logoTwitter, logoReddit, ear } from "ionicons/icons";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signupPage } from '../styles/loginAndSignup';

const Signup = () => {
    const [fisrtName,setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    const handleSignup = () => {
        window.alert('Account Created!')
    }
  return (
    
    <>
        <div className={signupPage.wrapper}>
              <div className={signupPage.innerWrapper}>
                  <div className={signupPage.mainWrapper}>
                      <div>
                          <img src="src\assets\logo.png" alt="logo" />
                          <h1 className={signupPage.name}>FinFlow</h1>
                      </div>
                      <div className={signupPage.secondWrapper}>
                          <div className={signupPage.secondMainWrapper}>
                            <input onChange={(e)=> setFirstName(e.target.value)} className={signupPage.input} type="text" placeholder="John" required/>
                            <input onChange={(e)=> setLastName(e.target.value)} className={signupPage.input} type="text" placeholder="Smith" required/>
                          </div>
                          <input onChange={(e)=> setEmail(e.target.value)} type="email" name="email" id="email" placeholder='abc@mail.com' required className={signupPage.secondInput} />
                          <input onChange={(e)=> setPassword(e.target.value)} type="password" name="password" id="password" required placeholder='********' className={signupPage.secondInput} />
                          <input onChange={(e)=> setPhoneNo(e.target.value)} type='phone' name="phone-no" id="phone-no" required placeholder='+919876543210' className={signupPage.phoneInput} />
                      </div>
                      <div className={signupPage.thirdWrapper}>
                          <button onClick={handleSignup} className={signupPage.createButton}>Create Account</button>
                      </div>
                      
                  </div>
                  <div className={signupPage.forthWrapper}>
                      <div className={signupPage.forthMainWrapper}>
                          <hr  />
                          <p>OR</p>
                          <hr />
                      </div>
                  </div>
                  <div className={signupPage.fifthWrapper}>
                      <div className={signupPage.fifthMainWrapper}>
                          <IonIcon className={signupPage.IonIcon} icon={logoGoogle}/>
                          <IonIcon className={signupPage.IonIcon} icon={logoTwitter}/>
                          <IonIcon className={signupPage.IonIcon} icon={logoFacebook}/>
                          <IonIcon lassName={signupPage.IonIcon}icon={logoReddit}/>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Signup