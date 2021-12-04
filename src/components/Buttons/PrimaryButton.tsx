import React, { ReactElement } from 'react'

interface Props {
    title: string;
    className: string;
    titleStyle?: string;
}

function PrimaryButton({ title, className, titleStyle }: Props): ReactElement {
    return (
        <button className={className} >
            <label className={titleStyle} > {title}</label>

        </button>
    )
}

export default PrimaryButton
