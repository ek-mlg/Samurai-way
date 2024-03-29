import React from 'react';
import s from './formsControls.module.css';
import {Field} from "redux-form";

type FormControlPropsType = {
    meta: {
        touched: boolean;
        error: string | undefined;
    }
    children: React.ReactNode;
}

type TextareaPropsType = {
    meta: {
        touched: boolean;
        error: string | undefined;
    }
    input: {
        name: string;
        value: string;
        onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    }
}

type InputPropsType = {
    input: {
        name: string;
        value: string;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }
    meta: {
        touched: boolean;
        error: string | undefined;
    }
}

const FormControl: React.FC<FormControlPropsType> = ({children, meta: {touched, error}}) => {

    const hasError = touched && error
    return (
        <div className={s.inputContainer}>
            {children}
            {hasError && <span className={s.formControlErrorSpan}>{error}</span>}
        </div>
    );

}

export const Textarea: React.FC<TextareaPropsType> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl meta={meta}>
            <textarea
                className={`${meta.touched && meta.error} ? ${s.formControlError} : ''`} {...input} {...restProps} />
        </FormControl>
    );
};

export const Input: React.FC<InputPropsType> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl meta={meta}>
            <input
                className={`${meta.touched && meta.error ? `${s.formControlError} ${s.input}` : s.input}`} {...input} {...restProps} />
        </FormControl>
    );
};

export const createField = (placeholder: string | null, validate: any[], name: string, component: any, type?: string, id?: string, className?: any) => (
    <Field placeholder={placeholder}
           validate={validate}
           name={name}
           component={component}
           type={type}
           id={id}
           className={className}
    />)

