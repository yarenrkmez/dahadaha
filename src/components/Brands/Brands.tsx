import React, { ReactElement } from 'react'
import BrandItem from './BrandItem'
import { text } from '../../constants/titles'
import shape from '../../assets/images/Shape.png'
import trendyol from '../../assets/images/trendyol.png';
import sprite from '../../assets/images/sprite.png'
import burgerKing from '../../assets/images/burger_king.png';


interface Props {

}

function Opportunity({ }: Props): ReactElement {
    return (
        <div className="brandsContainer">
            <BrandItem
                brandIcon={shape}
                brandText={text.findOpportunity}
                brandIconStyle="shape"
            />
            <BrandItem
                brandIcon={burgerKing}
                brandText={text.burger_king}
                brandIconStyle="shape"
            />
            <BrandItem
                brandIcon={trendyol}
                brandText={text.trendyol}
                brandIconStyle="shape"
            />
            <BrandItem
                brandIcon={sprite}
                brandText={text.sprite}
                brandIconStyle="shape"
            />
            <BrandItem
                brandIcon={shape}
                brandText={text.findOpportunity}
                brandIconStyle="shape"
            />
            <BrandItem
                brandIcon={shape}
                brandText={text.findOpportunity}
                brandIconStyle="shape"
            />
            <BrandItem
                brandIcon={shape}
                brandText={text.findOpportunity}
                brandIconStyle="shape"
            />
        </div>
    )
}

export default Opportunity
