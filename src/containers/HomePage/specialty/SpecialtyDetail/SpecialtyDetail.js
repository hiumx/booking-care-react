
import { useDispatch, useSelector } from 'react-redux';
import HeaderHome from '../../components/header/HeaderHome';
import './SpecialtyDetail.scss';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
import MoreInfo from '../../components/MoreInfo/MoreInfo';
import InfoContact from '../../components/Section/InfoContact';
import FooterHome from '../../components/FooterHome';
import Select from 'react-select';
import DoctorInfo from '../../doctor/DoctorInfo/DoctorInfo';
import DoctorScheduleRelated from '../../patient/detailDoctor/DoctorScheduleRelated/DoctorScheduleRelated';
import DoctorScheduleHomePage from '../../patient/detailDoctor/DoctorScheduleHomePage/DoctorScheduleHomePage';
import { getListDoctorsBySpecialtyId } from '../../../../services/specialty.service';
import { fetchListDoctorsBySpecialtyId } from '../../../../store/actions/doctorActions';
import { getSpecialtyById } from '../../../../store/actions/specialtyActions';
import Loading from '../../../../components/Loading/Loading';
import GoToTopButton from '../../components/Section/GoToTopButton/GoToTopButton';

function SpecialtyDetail() {

    const [specialty, setSpecialty] = useState({});
    const [scope, setScope] = useState({ value: 'all', label: 'Toàn quốc' });
    const [viewMore, setViewMore] = useState(false);

    const dispatch = useDispatch();
    const specialties = useSelector(state => state.specialty.allSpecialties);
    const listDoctors = useSelector(state => state.doctor.listDoctorsIdBySpecialty);
    const specialtyById = useSelector(state => state.specialty.specialty);
    const listDoctorsId = listDoctors?.map(doctor => doctor.Clinic.doctorId);
    const { id } = useParams();

    useEffect(() => {
        if (specialties.length === 0) {
            dispatch(getSpecialtyById(id));
        } else {
            const specialty = specialties.find(specialty => specialty.id === +id);
            setSpecialty(specialty);
        }
        dispatch(fetchListDoctorsBySpecialtyId(id));
    }, []);

    useEffect(() => {
        if (specialties.length === 0) {
            setSpecialty(specialtyById);
        }
    }, [specialtyById]);

    const options = [
        { value: 'all', label: 'Toàn quốc' },
        { value: 'ha-noi', label: 'Hà Nội' },
        { value: 'ho-chi-minh', label: 'Hồ Chí Minh' },
    ];

    const handleChangeScope = (scope) => {
        setScope(scope);
    }

    return (
        <div className='specialty__detail__wrapper'>
            <HeaderHome />
            <Loading data={listDoctorsId}>
                
            <div className='specialty__detail__content'>
                <div className='specialty__detail__info'>
                    <h4 className='specialty__detail__title'>{specialty?.name}</h4>
                    <div className={!viewMore ? 'specialty__detail__desc' : 'specialty__detail__desc height-none'}
                        dangerouslySetInnerHTML={{ __html: specialty?.descriptionHtml }}
                    >
                    </div>
                    <p
                        className='special__detail__view__hide__btn'
                        onClick={() => setViewMore(!viewMore)}
                    >
                        {!viewMore ? 'Xem thêm' : 'Ẩn bớt'}
                    </p>
                </div>
                <div className='specialty__detail__list__doctor'>
                    <div className='specialty__select__scope'>
                        <Select
                            defaultValue={scope}
                            value={scope}
                            onChange={handleChangeScope}
                            options={options}
                        />
                    </div>
                    <div className='specialty__list__doctor__wrapper'>
                        {listDoctorsId.length === 0
                            ? 'Chưa có thông tin các bác sĩ của khoa này.' :
                            listDoctorsId.map((id, index) => (
                                <div key={index} className='specialty__list__doctor row'>
                                    <div className='specialty__doctor__info col-md-6'>
                                        <DoctorInfo id={id} />
                                    </div>
                                    <div className='specialty__schedule__info col-md-6'>
                                        <DoctorScheduleHomePage id={id} />
                                        <DoctorScheduleRelated id={id} />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            </Loading>

            <MoreInfo />
            <InfoContact />
            <FooterHome />

            <GoToTopButton />
        </div>
    )
}

export default SpecialtyDetail;