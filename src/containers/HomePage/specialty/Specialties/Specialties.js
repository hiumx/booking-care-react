
import { useDispatch, useSelector } from 'react-redux';
import FooterHome from '../../components/FooterHome';
import InfoContact from '../../components/Section/InfoContact';
import HeaderDetailPage from '../../components/header/HeaderDetailPage';
import './Specialties.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect } from 'react';
import { fetchAllSpecialties } from '../../../../store/actions/specialtyActions';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Specialties() {

    const specialties = useSelector(state => state.specialty.allSpecialties);
    const dispatch = useDispatch();

    useEffect(() => {
        if (specialties.length === 0) {
            dispatch(fetchAllSpecialties());
        }
    }, []);

    return (
        <div className='specialties__wrapper'>
            <HeaderDetailPage textDetail='Khám chuyên khoa' />
            <div className='specialties__item__wrapper'>
                <h5 className='specialties__title'>Khám chuyên khoa</h5>
                <ul className='specialties__list'>
                    {specialties.map((specialty, index) =>
                        <li className='specialties__item' key={index}>
                            <Link to={`specialty/${specialty.id}`} className='specialties__content'>
                                <LazyLoadImage
                                    src={specialty.image}
                                    alt='hinh-anh'
                                    width={110}
                                    height={66}
                                />
                                <p className='specialties__specialty__name'>{specialty.name}</p>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            <InfoContact />
            <FooterHome />
        </div>
    )
}

export default Specialties;