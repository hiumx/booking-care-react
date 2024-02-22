import './DetailDoctor.scss';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

import * as actions from '../../../../../store/actions'
import InfoContact from '../../../components/Section/InfoContact';
import FooterHome from '../../../components/FooterHome';
import { LANGUAGES } from '../../../../../utils';
import HeaderDetailPage from '../../../components/header/HeaderDetailPage';
import DoctorScheduleHomePage from '../DoctorScheduleHomePage/DoctorScheduleHomePage';
import DoctorScheduleRelated from '../DoctorScheduleRelated/DoctorScheduleRelated';
import MoreInfo from '../../../components/MoreInfo/MoreInfo';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loading from '../../../../../components/Loading/Loading';
import GoToTopButton from '../../../components/Section/GoToTopButton/GoToTopButton';


function DetailDoctor() {

    const [infoDoctor, setInfoDoctor] = useState({});
    const { id } = useParams();

    const language = useSelector(state => state.app.language);
    const dataDoctor = useSelector(state => state.doctor.dataDoctor);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getInfoDoctorById(+id));
    }, []);

    console.log(infoDoctor);

    useEffect(() => {
        setInfoDoctor(dataDoctor)
    }, [dataDoctor]);

    let nameVi, nameEn = '';
    if (infoDoctor && infoDoctor.positionData) {
        nameVi = `${infoDoctor.positionData.valueVi}, ${infoDoctor.lastName} ${infoDoctor.firstName}`
        nameEn = `${infoDoctor.positionData.valueEn}, ${infoDoctor.firstName} ${infoDoctor.lastName}`
    }


    return (
        <>
            <HeaderDetailPage textDetail={`Bác sĩ ${infoDoctor.lastName} ${infoDoctor.firstName}`} />
            <Loading data={infoDoctor} >
                <div className='detail-doctor-container'>
                    <div className='detail-doctor-information'>
                        <div className='detail-doctor-img-wrapper'>
                            <LazyLoadImage className='detail-doctor-img' src={infoDoctor.image} alt='doctor-img' />
                        </div>
                        <div className='detail-doctor-position'>
                            <h2 className='detail-doctor-intro'>
                                {LANGUAGES.VI === language ? nameVi : nameEn}
                            </h2>
                            <p className='detail-doctor-description'>
                                {infoDoctor && infoDoctor.Markdown && infoDoctor.Markdown.description}
                            </p>
                        </div>
                    </div>
                    <div className='detail-doctor-schedule'>
                        <div className='doctor-schedule-time'>
                            <DoctorScheduleHomePage />
                        </div>
                        <div className='doctor-schedule-related'>
                            <DoctorScheduleRelated id={id} />
                        </div>
                    </div>
                    <div
                        className='detail-doctor-overview'
                        dangerouslySetInnerHTML={{ __html: infoDoctor && infoDoctor.Markdown && infoDoctor.Markdown.contentHTML }}
                    >
                    </div>
                    <div className='detail-doctor-comment'>

                    </div>
                </div>
            </Loading>

            <MoreInfo />
            <InfoContact />
            <FooterHome />

            <GoToTopButton />
        </>
    );
}

export default DetailDoctor;