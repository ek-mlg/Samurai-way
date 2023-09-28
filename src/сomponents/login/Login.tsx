import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../assets/formControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "../../Redux/redux-store";

type LoginPropsType = {
    loginTC: (login: string, password: string, rememberMe: boolean) => void,
    isAuth: boolean
}

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean,
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       validate={[requiredField]}
                       name={'login'}
                       component={Input}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       type={'password'}
                       validate={[requiredField]}
                       name={'password'}
                       component={Input}
                />
            </div>
            <div>
                <Field type={'checkbox'}
                       name={'rememberMe'}
                       component={Input}
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
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
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login);