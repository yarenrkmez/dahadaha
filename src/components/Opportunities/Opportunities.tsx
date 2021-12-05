import React, { ReactElement, useRef, useState, useEffect } from 'react'
import SliderDots from '../SliderDots/SliderDots'
import OpportunityItem from './OpportunityItem'

type Props = {
}

function Opportunities({ }: Props): ReactElement {
    const ref = useRef(null);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div className="OpportunitiesContainer" ref={ref}>
                <OpportunityItem />
                <OpportunityItem />
                <OpportunityItem />
                <OpportunityItem />
            </div>
            <SliderDots
                scrolllingViewRef={ref} />
        </div>

    )
}

export default Opportunities
