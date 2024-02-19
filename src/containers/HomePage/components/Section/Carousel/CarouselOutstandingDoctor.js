import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './CarouselOutstandingDoctor.scss';
import { SampleNextArrow, SamplePrevArrow } from './Custom-arrow'
import { LANGUAGES } from '../../../../../utils';
import { fetchTopDoctorsHomeStart } from '../../../../../store/actions';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CarouselOutstandingDoctor() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // autoplay: true,
        // autoplaySpeed: 4000,
        // cssEase: 'linear',
    };

    const history = useHistory();
    const [arrTopDoctors, setArrTopDoctors] = useState([]);

    const language = useSelector(state => state.app.language);
    const topDoctorsRedux = useSelector(state => state.doctor.topDoctors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTopDoctorsHomeStart());
    }, []);

    useEffect(() => {
        setArrTopDoctors(topDoctorsRedux)
    }, [topDoctorsRedux])

    const handleClickDetailDoctor = (doctorData) => {
        history.push(`doctor/detail-doctor/${doctorData.id}`);
    }

    return (
        <div className='carousel-container' >
            <div className='carousel-wrapper'>
                <div className='carousel-header'>
                    <h3 className='carousel-title'><FormattedMessage id="home-page.doctor-outstanding" /></h3>
                    <Link
                        className='carousel-more-btn' to='doctor'>
                        <FormattedMessage id="home-page.view-more-btn" />
                    </Link>
                </div>

                <Slider {...settings}>
                    {arrTopDoctors && arrTopDoctors.length > 0 &&
                        arrTopDoctors.map((item, index) => {
                            const nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`
                            const nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`
                            return (
                                <div key={item.id} className='carousel-item-doctor' onClick={() => handleClickDetailDoctor(item)}>
                                    <div className='wrapper-img-item-img'>
                                        <img className='img-carousel-item-doctor' src={item.image} alt='hinh anh' />
                                    </div>
                                    <p className='description-doctor'>{language === LANGUAGES.VI ? nameVi : nameEn}</p>
                                    <p className='description-specialty'>Cơ xương khớp</p>
                                </div>)
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default CarouselOutstandingDoctor;



