import React, { Children, ReactElement, useRef, useEffect, useState } from 'react'
import '../../assets/styles/SliderDots.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";

type Props = {
    scrolllingViewRef: any
}

function SliderDots({ scrolllingViewRef }: Props): ReactElement {
    const { opportunities } = useSelector((state: RootState) => state.opportunitiesReducer);
    const [active, setActive] = useState<number>(0)

    const scroll = (scrollOffset: any) => {
        (scrolllingViewRef.current as any).scrollLeft = scrollOffset;
    };
    let oneItemWith = scrolllingViewRef?.current?.children[0]?.clientWidth;
    let scrollingWith = oneItemWith ? oneItemWith - (oneItemWith / 8) : window.innerWidth;

    useEffect(() => {
        setActive(0)
    }, []);


    return (
        <div className="sliderDotsContainer" >
            {opportunities.map((item: any, index: number) => {
                return (
                    <button key={item.PromotionID} className={active === index ? "sliderDotActive" : "sliderDot"} onClick={() => { scroll(index * scrollingWith); setActive(index) }}></button>

                )
            })}

        </div>
    )
}

export default SliderDots
