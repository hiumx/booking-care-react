
import FooterHome from '../../components/FooterHome';
import InfoContact from '../../components/Section/InfoContact';
import './Specialties.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Specialties() {
    return (
        <div className='specialties__wrapper'>
            <div className='specialties__item__wrapper'>
                <h5 className='specialties__title'>Khám chuyên khoa</h5>
                <ul className='specialties__list'>
                    <li className='specialties__item'>
                        <div className='specialties__content'>
                            <LazyLoadImage
                                src='https://cdn.bookingcare.vn/fo/w640/2023/12/26/101627-co-xuong-khop.png'
                                alt='hinh-anh'
                                width={110}
                                height={66}
                            />
                            <p className='specialties__specialty__name'>Cơ xương khớp</p>
                        </div>
                    </li>
                    <li className='specialties__item'>
                        <div className='specialties__content'>
                            <LazyLoadImage
                                src='https://cdn.bookingcare.vn/fo/w640/2023/12/26/101627-co-xuong-khop.png'
                                alt='hinh-anh'
                                width={110}
                                height={66}
                            />
                            <p className='specialties__specialty__name'>Cơ xương khớp</p>
                        </div>
                    </li>
                    <li className='specialties__item'>
                        <div className='specialties__content'>
                            <LazyLoadImage
                                src='https://cdn.bookingcare.vn/fo/w640/2023/12/26/101627-co-xuong-khop.png'
                                alt='hinh-anh'
                                width={110}
                                height={66}
                            />
                            <p className='specialties__specialty__name'>Cơ xương khớp</p>
                        </div>
                    </li>
                    <li className='specialties__item'>
                        <div className='specialties__content'>
                            <LazyLoadImage
                                src='https://cdn.bookingcare.vn/fo/w640/2023/12/26/101627-co-xuong-khop.png'
                                alt='hinh-anh'
                                width={110}
                                height={66}
                            />
                            <p className='specialties__specialty__name'>Cơ xương khớp</p>
                        </div>
                    </li>
                    <li className='specialties__item'>
                        <div className='specialties__content'>
                            <LazyLoadImage
                                src='https://cdn.bookingcare.vn/fo/w640/2023/12/26/101627-co-xuong-khop.png'
                                alt='hinh-anh'
                                width={110}
                                height={66}
                            />
                            <p className='specialties__specialty__name'>Cơ xương khớp</p>
                        </div>
                    </li>
                    <li className='specialties__item'>
                        <div className='specialties__content'>
                            <LazyLoadImage
                                src='https://cdn.bookingcare.vn/fo/w640/2023/12/26/101627-co-xuong-khop.png'
                                alt='hinh-anh'
                                width={110}
                                height={66}
                            />
                            <p className='specialties__specialty__name'>Cơ xương khớp</p>
                        </div>
                    </li>
                    <li className='specialties__item'>
                        <div className='specialties__content'>
                            <LazyLoadImage
                                src='https://cdn.bookingcare.vn/fo/w640/2023/12/26/101627-co-xuong-khop.png'
                                alt='hinh-anh'
                                width={110}
                                height={66}
                            />
                            <p className='specialties__specialty__name'>Cơ xương khớp</p>
                        </div>
                    </li>
                    <li className='specialties__item'>
                        <div className='specialties__content'>
                            <LazyLoadImage
                                src='https://cdn.bookingcare.vn/fo/w640/2023/12/26/101627-co-xuong-khop.png'
                                alt='hinh-anh'
                                width={110}
                                height={66}
                            />
                            <p className='specialties__specialty__name'>Cơ xương khớp</p>
                        </div>
                    </li>
                </ul>
            </div>
            <InfoContact />
            <FooterHome />
        </div>
    )
}

export default Specialties;