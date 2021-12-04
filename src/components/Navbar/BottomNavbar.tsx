import React, { ReactElement } from 'react'
import '../../assets/styles/BottomNavbar.css'
import PrimaryButton from '../Buttons/PrimaryButton'
import plusVector from '../../assets/images/Plus_Vector.png'
import star from '../../assets/images/star.png'
import discover from '../../assets/images/discover.png'
import { text } from '../../constants/titles'

type Props = {

}

function BottomNavbar({ }: Props): ReactElement {
    return (
        <div className="bottomNavbarContainer">
            <PrimaryButton title={text.discover} className="discoverButton" titleStyle="discoverButtonTitle">
                <img src={discover} />
            </PrimaryButton>

            <PrimaryButton className="plusVectorButton">
                <img src={plusVector} className="bottomNavIcon" />
            </PrimaryButton>

            <PrimaryButton  className="starButton"  >
                <img src={star}  />
            </PrimaryButton>
        </div>
    )
}

export default BottomNavbar
