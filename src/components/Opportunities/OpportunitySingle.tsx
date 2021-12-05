import React, { ReactElement, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { useParams, useLocation } from "react-router";
import '../../assets/styles/OpportunitySingle.css'
import { returnRemainingDuration } from '../../heplers/helperFunctions';
import PrimaryButton from '../Buttons/PrimaryButton';

interface Props {

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


function OpportunitySingle({ }: Props): ReactElement {
    const { opportunities } = useSelector((state: RootState) => state.opportunitiesReducer);
    const loaction = useLocation();
    const [curretOpp, setCurretOpp] = useState<Promotions>()

    useEffect(() => {
        setCurretOpp(findCurrentOpp())
    }, [opportunities]);

    const findCurrentOpp = () => {
        let id = loaction.search.split('id=')[1];

        return opportunities.find((item: Promotions) => {
            if (item.PromotionID == id) {
                return item
            }
        })
    }

    const createMarkup = () => {
        return { __html: curretOpp?.Description as any };
    }

    const ReturnDescription = () => {
        return <div dangerouslySetInnerHTML={createMarkup()} />;
    }
console.log(curretOpp,"kldasd")

    return (
        <div className="opportunitySingle">

            <div className="opportunitySingleContainer">

                <div className="opportunityItemMediaContainerSinglee">

                    <img src={curretOpp?.ImgUrl} className="oppImgSingle" />

                    <div className="opportunityItemRemainingTimeTextContainer">
                        <span >{curretOpp && returnRemainingDuration(curretOpp)}</span>
                    </div>

                    <div>
                        <img src={curretOpp?.BrandTags[0]?.BrandLogo} className="circleLogo" />
                    </div>
                </div>

                <div className="opportunityItemButtonAndTitle">
                    <span className="opportunityItemText">{curretOpp?.Title}</span>
                    <ReturnDescription />    
                    < a target="_blank" className="DetailButton" href={curretOpp?.DetailUrl}>Kampanya detayları için tıkla</a>
            
                </div>
                
            </div>
          
            <div className="joinNowBtn">
                <button>Hemen Katıl</button>
            </div>

        </div>




    )
}

export default OpportunitySingle
