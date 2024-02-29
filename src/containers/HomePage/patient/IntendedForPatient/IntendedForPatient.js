import { Link } from "react-router-dom/cjs/react-router-dom.min";
import HeaderHome from "../../components/header/HeaderHome";

import './IntendedForPatient.scss';
import Loading from "../../../../components/Loading/Loading";
import InfoItem from "../../components/InfoItem/InfoItem";
import { useEffect, useState } from "react";
import { getAllBenefitsDigitalConversion } from "../../../../services/enterpriseService";
import ListInfo from "../../components/ListInfo/ListInfo";
import FooterAboutSupport from "../../components/FooterAboutSupport/FooterAboutSupport";

function IntendedForPatient() {
    const [listBenefits, setListBenefits] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const benefitRes = await getAllBenefitsDigitalConversion();

            if (benefitRes.code === 0 && benefitRes?.data?.length > 0) {
                setListBenefits(benefitRes.data);
            }
        }
        fetchApi();
    }, []);


    return (
        <div className="intended__patient__wrapper">
            <HeaderHome />
            <div className="intended__patient__content">
                <div className='intended__patient__banner'>
                    <div className="banner__booking__care__logo">
                        <img src="https://bookingcare.vn/assets/anh/bookingcare-logo-v3-w200.png" alt="booking-care-login" />
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='banner__desc'>
                                <h1 className='banner__desc__brand'>BookingCare</h1>
                                <h2 className='banner__desc__title'>Nền tảng đặt khám chuyên khoa</h2>
                                <p className='banner__desc__detail'>
                                    Giúp bệnh nhân dễ dàng lựa chọn bác sĩ phù hợp và đặt lịch nhanh chóng từ mạng lưới bác sĩ chuyên khoa giỏi, thông tin đã xác thực.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img className='banner__sub__img' src='	https://bookingcare.vn/assets/anh/bookingcare-responsive-2020.png' alt='banner-img' />
                        </div>
                    </div>
                    <div className="banner__access">
                        <Link to='/' className='banner__access__link'>Truy cập website BookingCare
                            <svg xmlns="http://www.w3.org/2000/svg" className="banner__access__icon" viewBox="0 0 576 512">
                                <path d="M352 224H305.5c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8h-2.5c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144h80V34.7C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2H384c-17.7 0-32-14.3-32-32V224zM80 96c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H400c8.8 0 16-7.2 16-16V384c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112C0 67.8 35.8 32 80 32h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H80z" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="intended__patient__problems">
                    <div className="problems__suggests">
                        <h3 className="problems__suggests__title">Có phải bạn hoặc người thân đang...</h3>
                        <ul className="problems__suggests__list">
                            <li className="problems__suggests__item">
                                <p className="problems__suggests__detail">
                                    Gặp vấn đề về sức khoẻ nhưng không biết đi khám ở đâu, bác sĩ nào thì phù hợp?
                                </p>
                            </li>
                            <li className="problems__suggests__item">
                                <p className="problems__suggests__detail">
                                    Đã đi khám nhiều nơi, nhiều bác sĩ mà bệnh không khỏi?
                                </p>
                            </li>
                            <li className="problems__suggests__item">
                                <p className="problems__suggests__detail">
                                    Băn khoăn không biết bác sĩ có giỏi không, kinh nghiệm khám chữa bệnh như thế nào?
                                </p>
                            </li>
                            <li className="problems__suggests__item">
                                <p className="problems__suggests__detail">
                                    Thông tin về quá trình đào tạo, kinh nghiệm công tác của bác sĩ có chính xác không?
                                </p>
                            </li>
                            <li className="problems__suggests__item">
                                <p className="problems__suggests__detail">
                                    Liệu lịch khám, nơi khám của bác sĩ có phù hợp với thời gian, kế hoạch của mình không?
                                </p>
                            </li>
                            <li className="problems__suggests__item">
                                <p className="problems__suggests__detail">
                                    Liệu nơi khám bệnh có đầy đủ trang thiết bị hay không? Giá khám và chụp chiếu xét nghiệm cụ thể như thế nào?
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ListInfo listInfo={listBenefits} title='Tại sao BookingCare lại giải quyết được vấn đề của bạn?' />
                    </div>
                </div>
            </div>

            <FooterAboutSupport
                title='Hỗ trợ đặt lịch'
                description='Xin vui lòng liên hệ với đội ngũ BookingCare để được hỗ trợ'
                linkContact='support@bookingcare.vn'
            />
        </div>
    )
}

export default IntendedForPatient;