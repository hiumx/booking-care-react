
import './DoctorInfo.scss';
import { useEffect, useState } from 'react';
import { getInfoDoctorByIdService } from '../../../../services/doctorService';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function DoctorInfo({ id }) {
    const [dataDoctor, setDataDoctor] = useState({});

    useEffect(() => {
        const fetchDoctorData = async () => {
            const res = await getInfoDoctorByIdService(id);
            if(res?.errorCode === 0) {
                setDataDoctor(res.data)
            }
        }
        fetchDoctorData()
    }, [id]);

    return (
        <div className='doctor__info__wrapper'>
            <div className='doctor__info__img__wrapper'>
                <LazyLoadImage className='doctor__info__img' src={dataDoctor?.image} alt={dataDoctor?.image} />
                <Link to={`/doctor/detail-doctor/${id}`} className='doctor__more__info--link'>Xêm thêm</Link>
            </div>
            <div className='doctor__info__desc'>
                <h5 className='doctor__info__name'>
                    {`${dataDoctor?.positionData?.valueVi}, ${dataDoctor?.lastName} ${dataDoctor?.firstName}`}
                </h5>
                <p className='doctor__info__detail'>
                    {dataDoctor?.Markdown?.description}
                </p>
                <div className='doctor__info__location'>
                    <svg className='doctor__info__location--img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                    <span>{dataDoctor.address}</span>
                </div>
            </div>
        </div>
    )
}

export default DoctorInfo;