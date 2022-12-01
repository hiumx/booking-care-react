import { connect } from 'react-redux';
import './InfoContact.scss'

function InfoContact() {
    return (
        <div className='info-contact-wrapper'>
            <div className='info-contact-container'>
                <div className='row'>
                    <div className='col col-6 copyright'>
                        <img className='img-booking-care' src='https://bookingcare.vn/assets/icon/bookingcare-2020.svg' alt='Booking Care' />
                        <h6>Công ty Cổ phần Công nghệ BookingCare</h6>
                        <p>
                            <svg className='info-contact-local-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                            </svg>
                            28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội
                        </p>
                        <p>
                            <svg className='info-contact-check-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg>
                            ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
                        </p>
                        <div className='wrapper-img-copyright'>
                            <img className='img-copyright-bo-cong-thuong' src='https://bookingcare.vn/assets/icon/bo-cong-thuong.svg' alt='img-copyright' />
                            <img className='img-copyright-bo-cong-thuong' src='https://bookingcare.vn/assets/icon/bo-cong-thuong.svg' alt='img-copyright' />
                        </div>
                    </div>
                    <div className='col col-3 faq'>
                        <a href='/'>Liên hệ hợp tác</a>
                        <a href='/'>Gói chuyển đổi số doanh nghiệp</a>
                        <a href='/'>Tuyển dụng</a>
                        <a href='/'>Câu hỏi thường gặp</a>
                        <a href='/'>Điều khoản sử dụng</a>
                        <a href='/'>Chính sách Bảo mật</a>
                        <a href='/'>Quy trình hỗ trợ giải quyết khiếu nại</a>
                        <a href='/'>Quy chế hoạt động</a>
                    </div>
                    <div className='col col-3 headquarters'>
                        <div className='about-headquarter'>
                            <h6>Trụ sở tại Hà Nội</h6>
                            <p>28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</p>
                        </div>
                        <div className='about-headquarter'>
                            <h6>Văn phòng tại TP Hồ Chí Minh</h6>
                            <p>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</p>
                        </div>
                        <div className='about-headquarter'>
                            <h6>Hỗ trợ khách hàng</h6>
                            <p>support@bookingcare.vn (7h - 18h)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='separate'></div>
            <div className='info-contact-download-app'>
                <svg className='info-contact-phone-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM304 64H80V384H304V64z" />
                </svg>
                <span>Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng:
                    <a href='/'>Android - iPhone/iPad - Khác</a>
                </span>
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


export default connect(mapStateToProps, mapDispatchToProps)(InfoContact);