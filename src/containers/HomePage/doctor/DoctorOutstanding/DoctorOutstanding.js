
import { useDispatch, useSelector } from 'react-redux';
import FooterHome from '../../components/FooterHome';
import InfoContact from '../../components/Section/InfoContact';
import HeaderHome from '../../components/header/HeaderHome';
import './DoctorOutstanding.scss';
import { useEffect } from 'react';
import { getAllDoctors } from '../../../../store/actions';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loading from '../../../../components/Loading/Loading';

function DoctorOutstanding() {

    const listDoctors = useSelector(state => state.doctor.allDoctors);
    const dispatch = useDispatch();

    useEffect(() => {
        if (listDoctors.length === 0) {
            dispatch(getAllDoctors());
        }
    }, []);

    return (
        <div className='doctors__container'>
            <HeaderHome />
            <div className='doctors__content'>
                <h5 className='doctors__title'>Bác sĩ nổi bật</h5>
                <ul className='doctors__list'>
                    <Loading data={listDoctors}>
                        {listDoctors.map((doctor, index) =>
                            <li className='doctors__item' key={index}>
                                <Link to={`/doctor/detail-doctor/${doctor.id}`} className='doctors__item--link'>
                                    <LazyLoadImage className='doctors__item__img' src={doctor.image} alt='doctor-image' />
                                    <div className='doctors__item__desc'>
                                        <h5>{`${doctor.positionData.valueVi}, ${doctor.lastName} ${doctor.firstName}`}</h5>
                                        <p>{doctor?.Markdown?.Specialty?.name}</p>
                                    </div>
                                </Link>
                            </li>
                        )}
                    </Loading>
                </ul>
            </div>
            <InfoContact />
            <FooterHome />
        </div>
    )
}

export default DoctorOutstanding;