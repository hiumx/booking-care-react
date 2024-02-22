
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FooterHome from '../../components/FooterHome';
import InfoContact from '../../components/Section/InfoContact';
import HeaderHome from '../../components/header/HeaderHome';
import './HelpPage.scss';

function HelpPage() {
    return (
        <div className='help__wrapper'>
            <HeaderHome isShadow />
            <div className='help__content'>
                <p>Hãy bấm vào nút mục chat bên dưới đây để nhận được hỗ trợ tự động từ BookingCare Chatbot</p>
                <Link to='/app'>Bạn có thể tải app BookingCare tại đây</Link>
                <img src='https://cdn.bookingcare.vn/fo/2024/01/05/151055-qrcode-chatbot.png' className='help__qr__code__img' alt='qr-code' />
                <img src='https://bookingcare.vn/assets/icon/google-play-badge.svg' className='help__google__play__img' alt='google-play-img' />
                <img src='https://bookingcare.vn/assets/icon/app-store-badge-black.svg' className='help__app__store__img' alt='app-store-img' />

                <div className='help__contact'>
                    <div className='help__contact__phone__wrapper'>
                        <div className='help__contact__phone'>
                            <svg className='help__contact__phone--img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                            </svg>
                        </div>
                        <div className='help__contact__phone--number'>
                            0896210393
                        </div>
                    </div>
                    <div className='help__contact__email'>
                        <svg className='help__contact__email--img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                        </svg>
                    </div>
                    <div className='help__contact__messenger'>
                        <svg className='help__contact__messenger--img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z" />
                        </svg>
                    </div>
                </div>
            </div>
            <InfoContact />
            <FooterHome />
        </div>
    )
}

export default HelpPage;