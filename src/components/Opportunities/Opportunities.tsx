import React, { ReactElement, useRef, useState, useEffect } from 'react'
import SliderDots from '../SliderDots/SliderDots'
import OpportunityItem from './OpportunityItem'
import { getPromotions } from '../../api/Promotions'

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
    const [loading, setloading] = useState<boolean>(false)
    const [promotions, setPromotions] = useState<Array<Promotions>>([])

    useEffect(() => {
        getPromotionsFromApi();
    }, []);

    const getPromotionsFromApi = async () => {
        setloading(true);
        const getsPromotions = await getPromotions();
        console.log(getsPromotions, "ksdfdls")
        if (getsPromotions?.status === 200) {
            setPromotions(getsPromotions?.data as any);
            setloading(false);
        }
    };

if (loading) return <p>loaading..</p>

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div className="OpportunitiesContainer" ref={ref}>

                {promotions.map(item => {
                    return (
                        < OpportunityItem key={item.PromotionID} data={item} />
                    )

                })}

                {/* <OpportunityItem />
                <OpportunityItem />
                <OpportunityItem /> */}
            </div>
            <SliderDots
                scrolllingViewRef={ref} />
        </div>

    )
}

export default Opportunities
