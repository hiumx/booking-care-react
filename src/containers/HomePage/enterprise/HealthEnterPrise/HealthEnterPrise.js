
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FooterHome from '../../components/FooterHome';
import InfoContact from '../../components/Section/InfoContact';
import HeaderDetailPage from '../../components/header/HeaderDetailPage';
import './HealthEnterPrise.scss';
import { useState } from 'react';

function HealthEnterPrise() {
    const [isMoreDesc, setIsMoreDesc] = useState(false);

    return (
        <div className='health-enterprise__wrapper'>
            <HeaderDetailPage textDetail='Sức khỏe Doanh nghiệp' />
            <div className='health-enterprise__content'>
                <div className='health-enterprise__desc'>
                    <div className='health-enterprise__detail'>
                        <img className='health-enterprise__detail__img'
                            src='https://cdn.bookingcare.vn/fo/w1080/2022/07/29/101215-1bn.png'
                            alt='health-enterprise--img'
                        />
                        <div className='health-enterprise__detail__text'>
                            <h4>Sức khỏe Doanh nghiệp</h4>
                            <div className={isMoreDesc ? 'enterprise__detail__text__desc enterprise__detail__show_all__desc' : 'enterprise__detail__text__desc'}>
                                <p>Nhiều nghiên cứu chỉ ra rằng những phúc lợi liên quan đến sức khỏe là thứ được nhiều người lao động coi trọng nhất. Việc đầu tư vào chăm sóc sức khỏe cho nhân viên có thể cải thiện lợi thế cạnh tranh của doanh nghiệp về nhân sự. </p>
                                <p>Việc đầu tư vào chăm sóc sức khỏe cho nhân viên giúp doanh nghiệp cải thiện lợi thế cạnh tranh của doanh nghiệp về nhân sự, bao gồm gia tăng mong muốn gắn bó và hiệu suất làm việc của nhân viên, đồng thời quảng bá hình ảnh doanh nghiệp trong mắt những ứng viên tiềm năng. </p>
                                <p>Chăm sóc sức khỏe nguồn nhân lực cần quan tâm tới cả thể chất và tinh thần cho nhân viên. Điều này không chỉ thể hiện trách nhiệm, sự quan tâm của doanh nghiệp mà còn góp phần vì sự phát triển của công ty bởi nhân viên khỏe, công ty mạnh. Nhằm đáp ứng yêu cầu riêng của từng doanh nghiệp, BookingCare ra mắt dịch vụ gói khám sức khỏe doanh nghiệp hỗ trợ các công ty chăm sóc sức khỏe nhân viên của mình.</p>
                            </div>
                            <p
                                className='health-enterprise__more__desc'
                                onClick={() => setIsMoreDesc(!isMoreDesc)}
                            >
                                {!isMoreDesc ? 'Xem thêm' : 'Ẩn bớt'}
                            </p>
                        </div>
                        <div className='health-enterprise__btn__wrapper'>
                            <button className='health-enterprise__btn'>
                                <Link to='' className='health-enterprise__btn--link'>Liên hệ tư vấn</Link>
                            </button>
                        </div>
                    </div>
                    <div className='health-enterprise__benefits'>
                        <ul className='health-enterprise__benefits--list'>
                            <li className='health-enterprise__benefits--item'>
                                <div className='health_enterprise__benefits__wrapper__img'>
                                    <img className='health-enterprise__benefits--img' src='https://bookingcare.vn/assets/anh/icon_hospital.png' alt='hospital-icon' />
                                </div>
                                <p className='health-enterprise__benefits--detail'>Cơ sở khám chữa bệnh uy tín, trang thiết bị hiện đại.</p>
                            </li>
                            <li className='health-enterprise__benefits--item'>
                                <div className='health_enterprise__benefits__wrapper__img'>
                                    <img className='health-enterprise__benefits--img' src='https://bookingcare.vn/assets/anh/file-medical.png' alt='medical-icon' />
                                </div>
                                <p className='health-enterprise__benefits--detail'>Gói khám linh hoạt theo nhu cầu doanh nghiệp.</p>
                            </li>
                            <li className='health-enterprise__benefits--item'>
                                <div className='health_enterprise__benefits__wrapper__img'>
                                    <img className='health-enterprise__benefits--img' src='https://bookingcare.vn/assets/anh/star-outlined.png' alt='star-outlined-icon' />
                                </div>
                                <p className='health-enterprise__benefits--detail'>Quy trình khép kín, tiết kiệm thời gian và chi phí.</p>
                            </li>
                            <li className='health-enterprise__benefits--item'>
                                <div className='health_enterprise__benefits__wrapper__img'>
                                    <img className='health-enterprise__benefits--img' src='https://bookingcare.vn/assets/anh/hand-holding-medical.png' alt='hand-holding-medical-icon' />
                                </div>
                                <p className='health-enterprise__benefits--detail'>Dịch vụ đa dạng, chăm sóc sức khỏe thể chất và tinh thần.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='health-enterprise__medical__package'>
                    <h4>Sức khỏe doanh nghiệp</h4>
                    <ul className='heath-enterprise__package--list'>
                        <li className='heath-enterprise__package--item'>
                            <Link to='' className='heath-enterprise__package--item--link'>
                                <div className='heath-enterprise__package__wrapper__img'>
                                    <img className='heath-enterprise__package--img' src='https://cdn.bookingcare.vn/fo/w256/2022/07/29/102037-2.png' alt='medical-package-img' />
                                </div>
                                <p>Gói khám sức khỏe doanh nghiệp</p>
                            </Link>
                        </li>
                        <li className='heath-enterprise__package--item'>
                            <Link to='' className='heath-enterprise__package--item--link'>
                                <div className='heath-enterprise__package__wrapper__img'>
                                    <img className='heath-enterprise__package--img' src='https://cdn.bookingcare.vn/fo/w256/2022/07/29/102633-1.png' alt='medical-package-img' />
                                </div>
                                <p>Gói chăm sóc sức khỏe tinh thần doanh nghiệp</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <InfoContact />
            <FooterHome />
        </div>
    )
}

export default HealthEnterPrise;