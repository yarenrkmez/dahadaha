import React, { ReactElement } from 'react'
import '../../assets/styles/Brands.css'
import { text } from '../../constants/titles'
import { useDispatch, useSelector } from "react-redux";
import { setFilterBrands } from '../../redux/actions/brandsActions';

type Props = {
    brandIcon?: string;
    brandText?: string;
    brandIconStyle?: string;
    brandType?: number | string
}

function OpportunityItem({ brandIcon, brandText, brandIconStyle, brandType }: Props): ReactElement {
    const dispatch = useDispatch();
    return (
        <div className="brandContainer" onClick={() => dispatch(setFilterBrands(brandType))} >
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
