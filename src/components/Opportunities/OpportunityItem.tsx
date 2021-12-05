import React, { ReactElement, useRef, useEffect } from 'react'
import opportunityMedia from '../../assets/images/cocaColaOpportunity.png'
import '../../assets/styles/Opportunities.css'
import colaCircle from '../../assets/images/colaCircle.png'
import PrimaryButton from '../Buttons/PrimaryButton'
import { text } from '../../constants/titles'

type Promotions = {
    PromotionID: string,
    PromotionName: string
    Startdate: string,
    Enddate: string,
    Title: string,
    Description: string,
    DetailUrl: string,
    ImgUrl: string,
    ConsentRequired: number,
    GSMVerificationRequired: number,
    CollectionAmount: number,
    isIstantWin: number,
    Status: number,
    ConfigurationID: string,
    FlowLabel: string,
    PromotionTypeID: number,
    Color: string,
    ImgBackgroundColor: string,
    BrandLogo: string,
    RemainingDuration: string,
    CurrencyID: string | null,
    CurrencyType: string | null,
    IsDrawing: true,
    DrawingText: string,
    IsCommentWin: boolean,
    BrandTags: Array<{ BrandName: string, BrandLogo: string }>
}

type Props = {
    data: Promotions;
    onClick: () => void;
}

function OpportunityItem({ data, onClick }: Props): ReactElement {

    const returnRemainingDuration = () => {
        if (data.RemainingDuration.includes(".")) {
            var d = new Date();
            let endDate = data.RemainingDuration.split(".");
            const currDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
            let endDateEdited = endDate[1] + '/' + endDate[0] + '/' + endDate[2]

            const dateOne = new Date(endDateEdited);
            const dateTwo = new Date(currDate);

            const dateOneUTC = Date.UTC(dateOne.getFullYear(), dateOne.getMonth(), dateOne.getDate())
            const dateTwoUTC = Date.UTC(dateTwo.getFullYear(), dateTwo.getMonth(), dateTwo.getDate())
            const difference = dateOneUTC - dateTwoUTC


            return `son ${difference / (1000 * 60 * 60 * 24)} gün`
        }
        else {
            return data.RemainingDuration
        }

    }

    return (
        <div onClick={onClick} >

            <div className="opportunityPath">
                <svg xmlns="http://www.w3.org/2000/svg" width="305" viewBox="0 0 305 367">
                    <path fill={data.Color} fillRule="nonzero" d="M29.256.065l257.45.962c6.224.024 8.479.677 10.751 1.899a12.719 12.719 0 0 1 5.272 5.285c1.215 2.276 1.863 4.532 1.87 10.755l.377 328.013c.013 11.045-8.931 20.01-19.977 20.022-.332 0-.664-.007-.996-.023l-258.73-12.596c-8.827-.43-11.985-1.492-15.139-3.358a18.162 18.162 0 0 1-7.183-7.798c-1.603-3.296-2.403-6.53-2.109-15.362L11.177 17.487c.205-6.132.9-8.337 2.152-10.552a12.706 12.706 0 0 1 5.302-5.11C20.891.656 23.121.042 29.256.065z">
                    </path>
                </svg>
            </div>

            <div className="opportunityItemContainer">

                <div className="opportunityItemMediaContainer">

                    <img src={data.ImgUrl} className="oppImg" />

                    <div className="opportunityItemRemainingTimeTextContainer">
                        <span >{returnRemainingDuration()}</span>
                    </div>

                    <div>
                        <img src={data.BrandTags[0].BrandLogo} className="circleLogo" />
                    </div>
                </div>

                <div className="opportunityItemButtonAndTitle">
                    <span className="opportunityItemText">{data.PromotionName}</span>

                    <PrimaryButton title={text.dahadaha} className="opportunityItemButton" />
                </div>

            </div>
        </div>


    )
}

export default OpportunityItem
