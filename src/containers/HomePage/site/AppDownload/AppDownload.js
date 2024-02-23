
import FooterHome from '../../components/FooterHome';
import InfoContact from '../../components/Section/InfoContact';
import HeaderHome from '../../components/header/HeaderHome';
import './AppDownload.scss';

function AppDownload() {
    return (
        <div>
            <div className='download__app__wrapper'>
                <h2>Tải ứng dụng BookingCare cho Mac OS X?</h2>
                <p>Hiện chúng tôi chưa hỗ trợ một ứng dụng riêng (Native App) cho hệ điều hành này</p>
                <h5>Nếu thực sự bạn đang sử dụng Android hay iPhone, vui lòng chọn hệ điều hành phù hợp với bạn bên dưới:</h5>
                <div className='download__app__img'>
                    <img className='download__app__img--google-play' src='https://bookingcare.vn/assets/icon/google-play-badge.svg' alt='google-play-download-app-img' />
                    <img className='download__app__img--app-store' src='https://bookingcare.vn/assets/icon/app-store-badge-black.svg' alt='app-store-download-app-img' />
                </div>
                <p>Trong trường hợp thiết bị của bạn thực sự không được chúng tôi hỗ trợ 1 ứng dụng riêng, xin đừng phiền lòng.</p>
                <p>Website của chúng tôi
                    <a href='http://localhost:3000'> https://bookingcare.vn </a>
                    hỗ trợ rất tốt hầu hết các thiết bị di động hiện nay. Gần như bạn có thể sử dụng toàn bộ những tính năng tiên tiến nhất của BookingCare tại địa chỉ đó.</p>
                <p>Trân trọng,
                    <br />
                    Đội ngũ BookingCare.
                </p>
            </div>

            <HeaderHome />
            <InfoContact />
            <FooterHome />
        </div>
    )
}

export default AppDownload;