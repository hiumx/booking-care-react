
import { useSelector } from 'react-redux';
import HeaderHome from '../components/header/HeaderHome';
import './SpecialtyDetail.scss';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
import MoreInfo from '../components/MoreInfo/MoreInfo';
import InfoContact from '../components/Section/InfoContact';
import FooterHome from '../components/FooterHome';

function SpecialtyDetail() {

    const [specialty, setSpecialty] = useState({});

    const specialties = useSelector(state => state.specialty.allSpecialties);
    const { id } = useParams();
    useEffect(() => {
        if (specialties.length === 0) {

        } else {
            const specialty = specialties.find(specialty => specialty.id === +id);
            setSpecialty(specialty);
        }

    }, [])


    return (
        <div className='specialty__detail__wrapper'>
            <HeaderHome />
            <div className='specialty__detail__content'>
                <h4 className='specialty__detail__title'>{specialty?.name}</h4>
                <div className='specialty__detail__desc'
                    dangerouslySetInnerHTML={{ __html: specialty?.descriptionHtml }}
                >
                </div>
                <div className='specialty__detail__doctor'>
                </div>
            </div>
            <MoreInfo />
            <InfoContact />
            <FooterHome />
        </div>
    )
}

export default SpecialtyDetail;