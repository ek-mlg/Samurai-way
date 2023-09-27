import React from 'react';
import s from './formsControls.module.css';

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
    placeholder: string
}


const FormControl: React.FC<TextareaPropsType> = ( {input, meta, ...props} ) => {

    const hasError = meta.touched && meta.error
    return (
        <div>
            {props.children}
            {hasError && <span className={s.formControlErrorSpan}>{meta.error}</span>}
        </div>
    );

}

export const Textarea = ( props: any ) => {
    const {input, meta, child, hasError, ...restProps} = props
    return <FormControl {...props}><textarea className={hasError ? s.formControlError : ''} {...input} {...restProps}/></FormControl>;
};

export const Input = ( props: any ) => {
    const {input, meta, child, hasError, ...restProps} = props
    return <FormControl {...props}><input className={hasError ? s.formControlError : ''} {...input} {...restProps}/></FormControl>;
};


