import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel'

const LoginPageInputs = ({mail, setMail, password, setPassword}) => {
    return(
        <>
            <InputWithLabel
                value={mail}
                setValue={setMail}
                label='Email'
                type='text'
                placeholder='Enter your email address' 
            />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label='Password'
                type='password'
                placeholder='Enter your password' 
            />
        </>
    );
};

export default LoginPageInputs;