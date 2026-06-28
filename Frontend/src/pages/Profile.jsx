import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { arrowBackCircleOutline } from 'ionicons/icons';
import { ProfilePage } from '../styles/style';

const Profile = () => {

    const navigate = useNavigate();

    const handleSafeBack = () => {
        // Check if the user has a history inside this tab session
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };
    return (
        <div>
            <IonIcon
                className={ProfilePage.arrowBack}
                icon={arrowBackCircleOutline}
                onClick={handleSafeBack}
            />
            <h1 className={ProfilePage.settingText}>Profile Page</h1>
        </div>
    )
}

export default Profile