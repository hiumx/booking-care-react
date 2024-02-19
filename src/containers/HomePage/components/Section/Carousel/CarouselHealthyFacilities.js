
import './Carousel.scss'
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SampleNextArrow, SamplePrevArrow } from './Custom-arrow'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSpecialties } from '../../../../../store/actions/specialtyActions';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function CarouselHealthyFacilities() {
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

    // const dispatch = useDispatch();
    // const allSpecialties = useSelector(state => state.specialty.allSpecialties);
    // const history = useHistory();

    // useEffect(() => {
    //     dispatch(fetchAllSpecialties());
    // }, []);

    // const handleClickSpecialtyDetail = (id) => {
    //     history.push(`/specialty/${id}`);
    // }

    return (
        <div className={'carousel-container'} >
            <div className='carousel-wrapper'>
                <div className='carousel-header'>
                    <h3 className='carousel-title'>Chuyên khoa phổ biến</h3>
                    <Link to='specialty' className='carousel-more-btn'>Xem thêm</Link>
                </div>

                <Slider {...settings}>
                    {
                        allSpecialties.map(item =>
                            <div key={item.id} className='carousel-item' onClick={() => handleClickSpecialtyDetail(item.id)}>
                                <LazyLoadImage className='img-carousel-item' src={item.image} alt={item.image} loading='lazy'/>
                                <span className='description'>{item.name}</span>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
}

export default CarouselHealthyFacilities;

