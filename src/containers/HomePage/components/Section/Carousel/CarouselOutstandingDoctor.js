import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './CarouselOutstandingDoctor.scss'
import * as actions from '../../../../../store/actions'
import { SampleNextArrow, SamplePrevArrow } from './Custom-arrow'
import { LANGUAGES } from '../../../../../utils';
import { LazyLoadImage } from 'react-lazy-load-image-component';



function CarouselOutstandingDoctor({ fetchTopDoctorsHomeStart, topDoctorsRedux, language }) {
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
    const [arrTopDoctors, setArrTopDoctors] = useState([])
    useEffect(() => {
        fetchTopDoctorsHomeStart()
    }, [])

    useEffect(() => {
        setArrTopDoctors(topDoctorsRedux)
    }, [topDoctorsRedux])

    const handleClickDetailDoctor = (doctorData) => {
        history.push(`/detail-doctor/${doctorData.id}`);
    }

    return (
        <div className='carousel-container' >
            <div className='carousel-wrapper'>
                <div className='carousel-header'>
                    <h3 className='carousel-title'><FormattedMessage id="home-page.doctor-outstanding" /></h3>
                    <button className='carousel-more-btn'><FormattedMessage id="home-page.view-more-btn" /></button>
                </div>

                <Slider {...settings}>
                    {arrTopDoctors && arrTopDoctors.length > 0 &&
                        arrTopDoctors.map((item, index) => {
                            let imageBase64;
                            if (item.image) {
                                imageBase64 = Buffer.from(item.image, 'base64').toString('binary');
                            }
                            const nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`
                            const nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`
                            return (<div key={item.id} className='carousel-item-doctor' onClick={() => handleClickDetailDoctor(item)}>
                                <div className='wrapper-img-item-img'>
                                    <LazyLoadImage className='img-carousel-item-doctor' src={imageBase64} alt='hinh anh' />
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

const mapStateToProps = state => {
    return {
        language: state.app.language,
        topDoctorsRedux: state.doctor.topDoctors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTopDoctorsHomeStart: () => dispatch(actions.fetchTopDoctorsHomeStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselOutstandingDoctor);



