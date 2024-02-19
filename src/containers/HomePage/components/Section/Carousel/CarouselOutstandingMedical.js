import './Carousel.scss'
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as actions from '../../../../../store/actions'

import { SampleNextArrow, SamplePrevArrow } from './Custom-arrow'
import { flatMap } from 'lodash';
function CarouselOutstandingMedical({ data, fetchTopDoctorsHomeStart, topDoctors }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 4,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        // autoplay: data.autoPlay,
        // autoplaySpeed: 4000,
        cssEase: 'linear',
    };

    // const [arrTopDoctors, setArrTopDoctors] = useState([])
    // useEffect(() => {

    //     fetchTopDoctorsHomeStart()
    //     setArrTopDoctors(topDoctors)
    // }, [])
    // console.log('check res from redux: ', topDoctors);
    return (
        <div className={data.isBackgroundColor ? 'carousel-container background-color' : 'carousel-container'} >
            <div className='carousel-wrapper'>
                <div className='carousel-header'>
                    <h3 className='carousel-title'>{data.title}</h3>
                    {data.multipleBtn
                        ?
                        <div>
                            <button className='carousel-more-btn'>{data.textButton}</button>
                            <button className='carousel-more-btn-2'>{data.textButton2}</button>
                            <button className='carousel-more-btn-3'>{data.textButton3}</button>
                        </div>
                        :
                        <button className='carousel-more-btn'>{data.textButton}</button>
                    }

                </div>

                <Slider {...settings}>
                    {data.doctorItem
                        ? data.content.map((item) => (
                            <div key={item.id} className='carousel-item-doctor'>
                                <div className='wrapper-img-item-img'>
                                    <img className='img-carousel-item-doctor' src={item.imgDoctor} alt={item.descriptionDoctor} />
                                </div>
                                <p className='description-doctor'>{item.descriptionDoctor}</p>
                                <p className='description-specialty'>{item.specialty}</p>
                            </div>
                        ))
                        : data.content.map((item) => (
                            <div key={item.id} className='carousel-item'>
                                {item.imgLink
                                    ? <img className='img-carousel-item' src={item.imgLink} alt={item.description} />
                                    : <a className='link-carousel-item' href='/'>{item.textLink}</a>
                                }
                                <span className='description'>{item.description}</span>
                            </div>
                        ))
                    }

                </Slider>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        topDoctors: state.admin.topDoctors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTopDoctorsHomeStart: () => dispatch(actions.fetchTopDoctorsHomeStart())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselOutstandingMedical);



