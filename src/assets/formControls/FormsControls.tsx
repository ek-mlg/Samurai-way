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

export const Textarea: React.FC<TextareaPropsType> = ( {input, meta, ...props} ) => {
    debugger

    const hasError = meta.touched && meta.error
    return (
        <div>
            <textarea {...input}{...props} className={hasError ? s.formControlErrorInput : ""}/>
            {hasError && <span className={s.formControlErrorSpan}>{meta.error}</span>}
        </div>
    );
};

