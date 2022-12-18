import './HeaderDetailPage.scss'
import { useHistory } from "react-router-dom";

function HeaderDetailPage() {
    const history = useHistory();
    const handleBackHomePage = () => {
        history.push('/home');
    }
    return (
        <div className="header-detail-page-container">
            <div className='header-detail-page-content'>
                <div className='header-detail-icon-back' onClick={handleBackHomePage}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M177.5 98c-8.8-3.8-19-2-26 4.6l-144 136C2.7 243.1 0 249.4 0 256s2.7 12.9 7.5 17.4l144 136c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22l0-88 288 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-288 0 0-88c0-9.6-5.7-18.2-14.5-22z" />
                    </svg>
                </div>
                <div className='header-detail-nav-help'>
                    <div className='header-detail-help'>
                        <svg className='header-detail-help-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M96 96c-17.7 0-32 14.3-32 32s-14.3 32-32 32s-32-14.3-32-32C0 75 43 32 96 32h97c70.1 0 127 56.9 127 127c0 52.4-32.2 99.4-81 118.4l-63 24.5 0 18.1c0 17.7-14.3 32-32 32s-32-14.3-32-32V301.9c0-26.4 16.2-50.1 40.8-59.6l63-24.5C240 208.3 256 185 256 159c0-34.8-28.2-63-63-63H96zm48 384c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z" />
                        </svg>
                        <p className='header-detail-help-text'>HỖ TRỢ</p>
                    </div>
                    <div className='header-detail-navbar-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderDetailPage;