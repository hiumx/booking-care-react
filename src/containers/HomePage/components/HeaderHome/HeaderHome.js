import './HeaderHome.scss'

function HeaderHome() {
    return (
        <div className="header-homepage-container">
            <div className="header-homepage-inner">
                <div className='wrapper-logo'>
                    <svg className='header-bars-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                    <div className='header-logo'>
                        <img src='https://bookingcare.vn/assets/icon/bookingcare-2020.svg' alt='booking-icon' />
                    </div>
                </div>
                <div className='header-desc'>
                    <div className='header-desc-item'>
                        <h5>Chuyên khoa</h5>
                        <p>Tìm bác sĩ theo chuyên khoa</p>
                    </div>
                    <div className='header-desc-item'>
                        <h5>Cơ sở y tế</h5>
                        <p>Chọn bệnh viện phòng khám</p>
                    </div>
                    <div className='header-desc-item'>
                        <h5>Bác sĩ</h5>
                        <p>Chọn bác sĩ giỏi</p>
                    </div>
                    <div className='header-desc-item'>
                        <h5>Gói khám</h5>
                        <p>Khám sức khỏe tổng quát</p>
                    </div>
                </div>
                <div className='header-help-language'>
                    <div className='header-help'>
                        <svg className='header-help-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M96 96c-17.7 0-32 14.3-32 32s-14.3 32-32 32s-32-14.3-32-32C0 75 43 32 96 32h97c70.1 0 127 56.9 127 127c0 52.4-32.2 99.4-81 118.4l-63 24.5 0 18.1c0 17.7-14.3 32-32 32s-32-14.3-32-32V301.9c0-26.4 16.2-50.1 40.8-59.6l63-24.5C240 208.3 256 185 256 159c0-34.8-28.2-63-63-63H96zm48 384c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z" />
                        </svg>
                        <p>Ho tro</p>
                    </div>
                    <div className='header-language'>
                        <svg className='header-language-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z" />
                        </svg>
                        <p>VN</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderHome;