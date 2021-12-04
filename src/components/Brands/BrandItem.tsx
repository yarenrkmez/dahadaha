import React, { ReactElement } from 'react'
import '../../assets/styles/Brands.css'
import { text } from '../../constants/titles'

type Props = {
    brandIcon?: string;
    brandText?: string;
    brandIconStyle?: string;
}

function OpportunityItem({ brandIcon, brandText, brandIconStyle }: Props): ReactElement {
    return (
        <div className="opportunityContainer">
            <div className="brand_Tag" >

                <div className={brandText === text.findOpportunity ? "sh_bg" : ""}>
                    <img src={brandIcon} className={brandIconStyle} />
                </div>

                <span className="brandName" >{brandText}</span>
            </div>
        </div>
    )
}

export default OpportunityItem
