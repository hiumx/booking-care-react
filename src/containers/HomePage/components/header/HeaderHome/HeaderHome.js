import './HeaderHome.scss'
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../../../../utils';
import { changeLanguagesApp } from '../../../../../store/actions'
import Navigation from '../../Navigation/Navigation';
import { useEffect, useState } from 'react';

function HeaderHome({ language, changeLanguagesAppRedux }) {


    const [isOpenNav, setIsOpenNav] = useState(false);

    const handleClickChangeLanguage = (language) => {
        changeLanguagesAppRedux(language)
    }

    return (
        <div className="header-homepage-container">
            <div className="header-homepage-inner">
                <div className='header__navigation__logo' onClick={() => setIsOpenNav(true)}>
                    <svg className='header-bars-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </div>
                <Navigation isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
                <div className='wrapper-logo'>
                    <div className='header-logo'>
                        <a href='/home'>
                            <img src='https://bookingcare.vn/assets/icon/bookingcare-2020.svg' alt='booking-icon' />
                        </a>
                    </div>
                </div>
                <div className='header-desc'>
                    <div className='header-desc-item'>
                        <h5><FormattedMessage id="header-home.specialty" /></h5>
                        <p><FormattedMessage id="header-home.search-doctor" /></p>
                    </div>
                    <div className='header-desc-item'>
                        <h5><FormattedMessage id="header-home.health-center" /></h5>
                        <p><FormattedMessage id="header-home.choose-room" /></p>
                    </div>
                    <div className='header-desc-item'>
                        <h5><FormattedMessage id="header-home.doctor" /></h5>
                        <p><FormattedMessage id="header-home.choose-doctor" /></p>
                    </div>
                    <div className='header-desc-item'>
                        <h5><FormattedMessage id="header-home.checkup-package" /></h5>
                        <p><FormattedMessage id="header-home.general-health" /></p>
                    </div>
                </div>
                <div className='header-help-language'>
                    <div className='header-help'>
                        <svg className='header-help-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
                        </svg>
                        <p><FormattedMessage id="header-home.help" /></p>
                    </div>
                    <div className='header-language'>
                        <svg className='header-language-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z" />
                        </svg>
                        <p><FormattedMessage id="header-home.language" /></p>
                        <div className='dropdown-language'>
                            <ul className='header-language-list'>
                                <li className={language === LANGUAGES.VI ? 'header-language-item active' : 'header-language-item'}><span onClick={() => handleClickChangeLanguage(LANGUAGES.VI)}>Việt Nam</span></li>
                                <li className={language === LANGUAGES.EN ? 'header-language-item active' : 'header-language-item'}><span onClick={() => handleClickChangeLanguage(LANGUAGES.EN)}>English</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguagesAppRedux: (language) => dispatch(changeLanguagesApp(language))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(HeaderHome);