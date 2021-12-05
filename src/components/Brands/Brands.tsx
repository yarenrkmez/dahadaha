import React, { ReactElement, useEffect } from 'react'
import BrandItem from './BrandItem'
import { text } from '../../constants/titles'
import shape from '../../assets/images/Shape.png'
import trendyol from '../../assets/images/trendyol.png';
import sprite from '../../assets/images/sprite.png'
import burgerKing from '../../assets/images/burger_king.png';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { selectedBrand } from '../../enums/filterBrand';


interface Props {

}

function Opportunity({ }: Props): ReactElement {
    const { brands } = useSelector((state: RootState) => state.brandsReducer);
    useEffect(() => {
        console.log(brands, "brands")
    }, [brands]);

    return (
        <div className="brandsContainer">
            <BrandItem
                brandIcon={shape}
                brandText={text.findOpportunity}
                brandIconStyle="shape"
                brandType={selectedBrand.noFilter}
            />
            <BrandItem
                brandIcon={burgerKing}
                brandText={text.cola}
                brandIconStyle="shape"
                brandType={selectedBrand.Cola}

            />
            <BrandItem
                brandIcon={burgerKing}
                brandText={text.YemekSepeti}
                brandIconStyle="shape"
                brandType={selectedBrand.YemekSepeti}

            />
            <BrandItem
                brandIcon={burgerKing}
                brandText={text.burger_king}
                brandIconStyle="shape"
                brandType={selectedBrand.BurgerKing}

            />
            <BrandItem
                brandIcon={trendyol}
                brandText={text.trendyol}
                brandIconStyle="shape"
                brandType={selectedBrand.Trendyol}

            />
            <BrandItem
                brandIcon={sprite}
                brandText={text.sprite}
                brandIconStyle="shape"
                brandType={selectedBrand.Sprite}

            />

        </div>
    )
}

export default Opportunity
