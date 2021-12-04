import React, { ReactElement } from 'react'
import { text } from '../../constants/titles'
import PrimaryButton from '../Buttons/PrimaryButton'
import logo from '../../assets/images/Daha_Daha.png';
import profile from '../../assets/images/Profile.png';
import '../../assets/styles/Navbar.css';

interface Props {

}

function Navbar({ }: Props): ReactElement {
    return (
        <div className="navbarContainer" >
            <img src={logo} className="daha_Daha" />

            <div  className="profileContainer" >
                <PrimaryButton title={text.login} className="rectangle" titleStyle="giriYap" />
                <div className="oval" >
                    <img src={profile} className="profile" />
                </div>
            </div>

        </div>
    )
}

export default Navbar
