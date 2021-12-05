import React, { Children, ReactElement, useRef,useEffect,useState } from 'react'
import '../../assets/styles/SliderDots.css'

type Props = {
    scrolllingViewRef: any
}

function SliderDots({ scrolllingViewRef }: Props): ReactElement {

    const scroll = (scrollOffset: any) => {
        (scrolllingViewRef.current as any).scrollLeft = scrollOffset;
        console.log("var", scrolllingViewRef?.current?.children?.length, scrolllingViewRef?.current?.children[0]?.clientWidth)
    };
    const oneItemWith = scrolllingViewRef?.current?.children[0]?.clientWidth;
    const scrollingWith = oneItemWith - (oneItemWith / 8);

    return (
        <div className="sliderDotsContainer" >
            <button className="sliderDot" onClick={() => scroll(0)}></button>
            <button className="sliderDot" onClick={() => scroll(scrollingWith)}></button>
            <button className="sliderDot" onClick={() => scroll(2 * scrollingWith)}></button>
            <button className="sliderDot" onClick={() => scroll(3 * scrollingWith)}></button>
        </div>
    )
}

export default SliderDots
