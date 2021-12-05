import React, { ReactElement, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPromotions } from './api/Promotions';
import { setOpportunities } from './redux/actions/opportunitiesActions';
interface Props {

}

function InitialRedux({ }: Props): ReactElement {

    useEffect(() => {
        getPromotionsFromApi();
    }, []);
    const dispatch = useDispatch()

    const getPromotionsFromApi = async () => {

        const getsPromotions = await getPromotions();

        if (getsPromotions?.status === 200) {
            dispatch(setOpportunities(getsPromotions?.data as any))
        }
    };

    return (
        <div>

        </div>
    )
}

export default InitialRedux
