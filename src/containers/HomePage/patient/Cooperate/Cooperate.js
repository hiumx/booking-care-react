
import { useState } from 'react';
import FooterHome from '../../components/FooterHome';
import InfoContact from '../../components/Section/InfoContact';
import HeaderHome from '../../components/header/HeaderHome';
import './Cooperate.scss';
import FormContact from '../../components/FormContact/FormContact';

function Cooperate() {

    return (
        <div className='cooperate__wrapper'>
            <HeaderHome />
            <FormContact title='Hợp tác cùng BookingCare' />
            <InfoContact />
            <FooterHome />
        </div>
    )
}

export default Cooperate;
