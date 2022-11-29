import './Carousel.scss'
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SampleNextArrow, SamplePrevArrow } from './Custom-arrow'
import { flatMap } from 'lodash';

function Carousel({ data }) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <div className={data.isBackgroundColor ? 'carousel-container background-color' : 'carousel-container'} >
            <div className='carousel-wrapper'>
                <div className='carousel-header'>
                    <h3 className='carousel-title'>{data.title}</h3>
                    <button className='carousel-more-btn'>{data.textButton}</button>
                </div>

                <Slider {...settings}>
                    {data.content.map((item) => (
                        <div key={item.id} className='carousel-item'>
                            {item.imgLink
                                ? <img className='img-carousel-item' src={item.imgLink} alt={item.description} />
                                : <a className='link-carousel-item' href='/'>{item.textLink}</a>
                            }
                            <span className='description'>{item.description}</span>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}





export default Carousel;
