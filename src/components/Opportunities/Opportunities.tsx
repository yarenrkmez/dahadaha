import React, { ReactElement } from 'react'
import OpportunityItem from './OpportunityItem'

interface Props {
    
}

function Opportunities({}: Props): ReactElement {
    return (
        <div className="OpportunitiesContainer">
            <OpportunityItem />
            <OpportunityItem />
            <OpportunityItem />
            <OpportunityItem />
        </div>
    )
}

export default Opportunities
