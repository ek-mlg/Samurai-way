import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../assets/formControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "../../Redux/redux-store";
import s from "./login.module.css";

type LoginPropsType = {
    loginTC: (login: string, password: string, rememberMe: boolean) => void,
    isAuth: boolean
}

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean,
    error: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ( {handleSubmit, error }) => {

    return (
        <>
            <form onSubmit={handleSubmit} className={s.form}>
                {createField('Email Address',[requiredField], 'login', Input, 'email')}
                {createField('Password',[requiredField], 'password', Input, 'password')}
                <div className={s.checkboxRememberContainer}>
                    {createField(null,[requiredField], 'rememberMe', "input", 'checkbox', 'myCheckbox', s.checkboxInput)}
                    <label htmlFor='myCheckbox' className={s.checkboxLabel}>
                        <span className={s.remember}>Remember me</span>
                    </label>
                    <a href={''} className={s.forgotPassword}>Forgot Password</a>
                </div>
                <button className={s.button}>Login</button>
            </form>
            <a className={s.registerHref} href={'https://social-network.samuraijs.com/signUp'}>
                <p className={s.register}>Don't have an account? Register here</p>
            </a>
            {error ? <div className={s.formSummaryError}>{error}</div> : ''}
        </>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login: React.FC<LoginPropsType> = ({loginTC, isAuth}) => {
    const onSubmit = (formData: FormDataType) => {
        loginTC(formData.login, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div className={s.loginBox}>
            <div className={s.leftContainer}>
                <div className={s.infoContainer}>
                    <div className={s.iContainer}>
                        <span className={s.i}>W</span>
                        <span className={s.i}>E</span>
                        <span className={s.i}>L</span>
                        <span className={s.i}>C</span>
                        <span className={s.i}>O</span>
                        <span className={s.i}>M</span>
                        <span className={s.i}>E</span>
                        <span className={s.i}>T</span>
                        <span className={s.i}>O</span>
                        <span className={s.i}>M</span>
                        <span className={s.i}>Y</span>
                        <span className={s.i}>P</span>
                        <span className={s.i}>R</span>
                        <span className={s.i}>J</span>
                        <span className={s.i}>T</span>
                    </div>

                    <p className={s.info}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
                    <div className={s.socialButtonsContainer}>
                        <a target={'_blank'} href={'https://github.com/ek-mlg'} className={`${s.socialButton} ${s.gitHub}`}>
                            <i className={`fa-brands fa-github ${s.icon}`}></i>
                        </a>
                        <a target={'_blank'} href={'https://t.me/break_the_rules_eat_grasses'} className={`${s.socialButton} ${s.telegram}`}>
                            <i className={`fa-brands fa-telegram ${s.icon}`}></i>
                        </a>
                        <a target={'_blank'} href={'https://ek-mlg.github.io/portfolio'} className={`${s.socialButton} ${s.site}`}>
                            <i className={`fa-solid fa-link ${s.icon}`}></i>
                        </a>
                        <a target={'_blank'} href={'www.linkedin.com/in/ek-mlg'} className={`${s.socialButton} ${s.linked}`}>
                            <i className={`fa-brands fa-linkedin-in ${s.icon}`}></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className={s.rightContainer}>
                <div className={s.loginContainer}>
                    <h1 className={s.title}>Social Network</h1>
                    <h3 className={s.sign}>Sign Into Your Account</h3>
                    <LoginReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login);