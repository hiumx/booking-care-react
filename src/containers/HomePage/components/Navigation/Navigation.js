
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Navigation.scss';
import { memo } from 'react';

function Navigation({ isOpenNav, setIsOpenNav }) {
    
    return (
        <>

            <div className={isOpenNav ? 'navigation__wrapper open' : 'navigation__wrapper close'}>
                <div className='navigation__header'>
                    <div className='navigation__header__content'>
                        <h5>Menu</h5>
                        <div className='navigation__header__icon__wrapper' onClick={() => setIsOpenNav(false)}>
                            <svg className='navigation__header__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <ul className='navigation__list'>
                    <li className='navigation__item'>
                        <Link to='/' className='navigation__item--link'>Trang chủ</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link to='#' className='navigation__item--link'>Cẩm nang</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link to='/cooperate' className='navigation__item--link'>Liên hệ hợp tác</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link to='#' className='navigation__item--link'>Sức khỏe doanh nghiệp</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link to='#' className='navigation__item--link'>Gói chuyển đổi số doanh nghiệp</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link to='#' className='navigation__item--link'>Tuyển dụng</Link>
                    </li>
                </ul>
                <div className='navigation__title'>
                    <span className='navigation__title--detail'>Về booking care</span>
                </div>
                <ul className='navigation__list'>
                    <li className='navigation__item'>
                        <a href='#' className='navigation__item--link'>Dành cho bệnh nhân</a>
                    </li>
                    <li className='navigation__item'>
                        <a href='#' className='navigation__item--link'>Dành cho bác sĩ</a>
                    </li>
                    <li className='navigation__item'>
                        <a href='#' className='navigation__item--link'>Vai trò BookingCare</a>
                    </li>
                    <li className='navigation__item'>
                        <a href='#' className='navigation__item--link'>Liên hệ</a>
                    </li>
                    <li className='navigation__item'>
                        <a href='#' className='navigation__item--link'>Câu hỏi thường gặp</a>
                    </li>
                    <li className='navigation__item'>
                        <a href='#' className='navigation__item--link'>Điều khoản sử dụng</a>
                    </li>
                    <li className='navigation__item'>
                        <a href='#' className='navigation__item--link'>Quy trình giải quyết khiếu nại</a>
                    </li>
                    <li className='navigation__item'>
                        <a href='#' className='navigation__item--link'>Quy chế hoạt động</a>
                    </li>
                </ul>
                <div className='navigation__footer'>
                    <div className='navigation__footer__icon__wrapper'>
                        <svg className='navigation__footer__icon navigation__footer__tiktok__icon fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                        </svg>
                    </div>
                    <div className='navigation__footer__icon__wrapper'>
                        <svg className='navigation__footer__icon fill-blue' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                        </svg>
                    </div>
                    <div className='navigation__footer__icon__wrapper'>
                        <svg className='navigation__footer__icon fill-red' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                        </svg>
                    </div>

                </div>
            </div>
            <div className={isOpenNav ? 'overlay' : ''} onClick={() => setIsOpenNav(false)}></div>
        </>
    )
}

export default Navigation;