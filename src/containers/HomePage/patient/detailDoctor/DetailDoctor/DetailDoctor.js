import './DetailDoctor.scss';
import { connect } from 'react-redux'
import { useEffect, useState } from 'react';

import * as actions from '../../../../../store/actions'
import HeaderHome from '../../../components/header/HeaderHome';
import InfoContact from '../../../components/Section/InfoContact';
import FooterHome from '../../../components/FooterHome';
import { LANGUAGES } from '../../../../../utils';
import HeaderDetailPage from '../../../components/header/HeaderDetailPage';
import DoctorScheduleHomePage from '../DoctorScheduleHomePage/DoctorScheduleHomePage';
import DoctorScheduleRelated from '../DoctorScheduleRelated/DoctorScheduleRelated';
import MoreInfo from '../../../components/MoreInfo/MoreInfo';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


function DetailDoctor({ getInfoDoctorById, language, dataDoctor, match }) {
    const [infoDoctor, setInfoDoctor] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getInfoDoctorById(match.params.id)
    }, []);

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
            <div className='detail-doctor-container'>
                <div className='detail-doctor-information'>
                    <div className='row'>
                        <div className='col col-2'>
                            <img className='detail-doctor-img' src={infoDoctor.image} alt='Doctor img' />
                        </div>
                        <div className='col col-5 detail-doctor-position'>
                            <h2 className='detail-doctor-intro'>
                                {LANGUAGES.VI === language ? nameVi : nameEn}
                            </h2>
                            <p className='detail-doctor-description'>
                                {infoDoctor && infoDoctor.Markdown && infoDoctor.Markdown.description}
                            </p>
                        </div>
                        <div className='col col-5 detail-doctor-position'>
                        </div>
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
            <MoreInfo />
            <InfoContact />
            <FooterHome />
        </>
    );
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        dataDoctor: state.doctor.dataDoctor
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInfoDoctorById: (doctorId) => dispatch(actions.getInfoDoctorById(doctorId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);