import React, { ReactElement } from 'react'
import opportunityMedia from '../../assets/images/cocaColaOpportunity.png'
import '../../assets/styles/Opportunities.css'
import colaCircle from '../../assets/images/colaCircle.png'

interface Props {

}

function OpportunityItem({ }: Props): ReactElement {
    return (
        <div>

            <div className="opportunityPath">
                <svg xmlns="http://www.w3.org/2000/svg" width="305" viewBox="0 0 305 367">
                    <path fill="#F40000" fillRule="nonzero" d="M29.256.065l257.45.962c6.224.024 8.479.677 10.751 1.899a12.719 12.719 0 0 1 5.272 5.285c1.215 2.276 1.863 4.532 1.87 10.755l.377 328.013c.013 11.045-8.931 20.01-19.977 20.022-.332 0-.664-.007-.996-.023l-258.73-12.596c-8.827-.43-11.985-1.492-15.139-3.358a18.162 18.162 0 0 1-7.183-7.798c-1.603-3.296-2.403-6.53-2.109-15.362L11.177 17.487c.205-6.132.9-8.337 2.152-10.552a12.706 12.706 0 0 1 5.302-5.11C20.891.656 23.121.042 29.256.065z">
                    </path>
                </svg>
            </div>

            <div className="opportunityItemContainer">

                <div className="opportunityItemMediaContainer">
                    <img src={opportunityMedia}  />
                    <div>
                        <img src={colaCircle} className="circleLogo" />
                    </div>
                </div>
                <span>2,5 LT Coca-Cola kapakları
                    Coca-Cola +Coffee kazandırıyor!</span>
            </div>
        </div>


    )
}

export default OpportunityItem
