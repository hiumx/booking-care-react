import './Banner.scss'
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
function Banner() {
    return (
        <div className='banner-container'>
            <div className='banner-home'>
                <div className='banner-home-title'>
                    <h1 className='title-base'><FormattedMessage id="banner.title-base" /></h1>
                    <h1 className='title-care'><FormattedMessage id="banner.title-care" /></h1>
                </div>
                <div className='banner-home-search'>
                    <svg className='banner-search-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                    </svg>
                    <input type='text' className='banner-search-input' placeholder='Find a doctor' />
                </div>
                <div className='banner-contact-download'>
                    <img className='google-play-download-image' src='https://bookingcare.vn/assets/icon/google-play-badge.svg' alt='Google Play Download' />
                    <img className='app-store-download-image' src='https://bookingcare.vn/assets/icon/app-store-badge-black.svg' alt='Google Play Download' />
                </div>
            </div>
            <div className='banner-choosing-examination'>
                <ul className='choosing-examination-list'>

                    <li className='choosing-examination-item'>
                        <div className='examination-image-specialty'></div>
                        <span className='examination-item-title'><FormattedMessage id="banner.specialist-examination" /></span>
                    </li>
                    <li className='choosing-examination-item'>
                        <div className='examination-image-remote'></div>
                        <span className='examination-item-title'><FormattedMessage id="banner.remote-examination" /></span>
                    </li>
                    <li className='choosing-examination-item'>
                        <div className='examination-image-overview'></div>
                        <span className='examination-item-title'><FormattedMessage id="banner.examination-overview" /></span>
                    </li>
                    <li className='choosing-examination-item'>
                        <div className='examination-image-test'></div>
                        <span className='examination-item-title'><FormattedMessage id="banner.medical-test" /></span>
                    </li>
                    <li className='choosing-examination-item'>
                        <div className='examination-image-morale'></div>
                        <span className='examination-item-title'><FormattedMessage id="banner.mental-health" /></span>
                    </li>
                    <li className='choosing-examination-item'>
                        <div className='examination-image-dentistry'></div>
                        <span className='examination-item-title'><FormattedMessage id="banner.dental-examination" /></span>
                    </li>
                    <li className='choosing-examination-item'>
                        <div className='examination-image-anatomy'></div>
                        <span className='examination-item-title'><FormattedMessage id="banner.surgery-package" /></span>
                    </li>
                    <li className='choosing-examination-item'>
                        <div className='examination-image-medical'></div>
                        <span className='examination-item-title'><FormattedMessage id="banner.medical-products" /></span>
                    </li>
                    <li className='choosing-examination-item'>
                        <div className='examination-image-enterprise'></div>
                        <span className='examination-item-title'><FormattedMessage id="banner.enterprise-products" /></span>
                    </li>


                </ul>
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
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Banner);