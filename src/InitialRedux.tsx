import React, { ReactElement, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPromotions } from './api/Promotions';
import { setOpportunities } from './redux/actions/opportunitiesActions';
import { RootState } from "./redux/reducers/rootReducer";

interface Props {

}

function InitialRedux({ }: Props): ReactElement {
    const { brands } = useSelector((state: RootState) => state.brandsReducer);

    useEffect(() => {
        getPromotionsFromApi();
    }, []);

    const dispatch = useDispatch()

    const getPromotionsFromApi = async () => {

        const getsPromotions = await getPromotions();

        if (getsPromotions?.status === 200) {
            dispatch(setOpportunities(getsPromotions?.data as any))
            getsPromotions?.data.forEach(item => {
                brands.push(item.BrandTags[0])
            })
        }
    };


    return (
        <div>

        </div>
    )
}

export default InitialRedux
