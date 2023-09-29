import React from 'react';
import s from './formsControls.module.css';

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

const FormControl: React.FC<FormControlPropsType> = ( {children, meta} ) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={s.inputContainer}>
            {children}
            {hasError && <span className={s.formControlErrorSpan}>{meta.error}</span>}
        </div>
    );

}

export const Textarea: React.FC<TextareaPropsType> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl meta={meta}>
            <textarea className={`${meta.touched && meta.error} ? ${s.formControlError} : ''`} {...input} {...restProps} />
        </FormControl>
    );
};

export const Input: React.FC<InputPropsType> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl meta={meta}>
            <input className={`${meta.touched && meta.error ? `${s.formControlError} ${s.input}` : s.input}`} {...input} {...restProps} />
        </FormControl>
    );
};


