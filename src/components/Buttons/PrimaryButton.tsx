import React, { ReactElement } from 'react'

type Props = {
    title?: string;
    className?: string;
    titleStyle?: string;
    children?: any;
}

function PrimaryButton({ title, className, titleStyle, children }: Props): ReactElement {
    return (
        <button className={className} >
            <label className={titleStyle} >{title}</label>
            {children}
        </button>
    )
}

export default PrimaryButton
