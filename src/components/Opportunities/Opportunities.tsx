import React, { ReactElement, useRef, useState, useEffect } from 'react'
import SliderDots from '../SliderDots/SliderDots'
import OpportunityItem from './OpportunityItem'
import { getPromotions } from '../../api/Promotions'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";

type Props = {
}

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

function Opportunities({ }: Props): ReactElement {
    const ref = useRef(null);
    const { opportunities } = useSelector((state: RootState) => state.opportunitiesReducer);
    const { filterBrand } = useSelector((state: RootState) => state.brandsReducer);
    let history = useHistory();


    let brandTagsOpportunities: Array<any> = []

     
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div className="OpportunitiesContainer" ref={ref}>

                {opportunities.length > 0 && opportunities.map((item: Promotions) => {
                    brandTagsOpportunities = [];
                    item.BrandTags.forEach(item => {
                        brandTagsOpportunities.push(item.BrandName)
                    })

                    return (
                        item.Status &&
                            <OpportunityItem key={item.PromotionID} data={item} onClick={() => history.push(`kampanya/?name=${item.PromotionName}/?id=${item.PromotionID}`)} />
                    )

                })}

            </div>
            <SliderDots
                scrolllingViewRef={ref} />
        </div>

    )
}

export default Opportunities
