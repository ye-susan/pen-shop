import React from 'react';

import './signin-and-register.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import Register from '../../components/register/register.component';

const SignInAndRegisterPage = () => (
    <div className='signin-and-register'>
        <SignIn />
        <Register />
    </div>
) 

export default SignInAndRegisterPage;