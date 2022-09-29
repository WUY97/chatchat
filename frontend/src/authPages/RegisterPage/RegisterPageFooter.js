import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Tooltip } from '@mui/material';

import CustomPrimaryButton from '../../shared/components/SharedPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo'

const RegisterPageFooter = ({handleRegister, isFormValid}) => {
    const navigate = useNavigate();

    const handlePushToLoginPage = () => {
        navigate('/login');
    };

    const getFormNotValidMessage = () => {
        return 'Username should contain between 3 and 12 characters and password should contain between 6 and 12 character. Also correct e-mail address should be provided.';
    }
    
    const getFormValidMessage = () => {
        return 'Press to register!';
    }

    return(
        <>
        <Tooltip
            title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
            <div>
                <CustomPrimaryButton 
                    label="Register"
                    additionalStyles={{ marginTop: "30px"}}
                    disabled={!isFormValid}
                    onClick={handleRegister}
                />
            </div>
        </Tooltip>
            <RedirectInfo
                text=''
                redirectText='Already have an account?'
                additionalStyles={{ marginTop: "5px"}}
                redirectHandler={handlePushToLoginPage}
            />

        </>
    );
};

export default RegisterPageFooter