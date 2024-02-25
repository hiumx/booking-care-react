import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import HeaderHome from '../../components/header/HeaderHome';
import './DigitalConversionPackage.scss';
import PackageDigital from '../../components/PackageDigital/PackageDigital';
import FooterAboutSupport from '../../components/FooterAboutSupport/FooterAboutSupport';

function DigitalConversionPackage() {
    return (
        <div className='digital__conversion__wrapper'>
            <HeaderHome />
            <div className='digital__conversion__content'>
                <div className='digital__conversion__banner'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='banner__desc'>
                                <h1 className='banner__desc__title'>Giải pháp chuyển đổi số toàn diện cho y tế chăm sóc sức khỏe</h1>
                                <p className='banner__desc__detail'>Giải pháp chuyển đổi số BookingCare DX ứng dụng công nghệ tiên phong được phát triển theo mô hình Nền tảng như một dịch vụ (Platform as a service - PaaS) bao gồm Website, ứng dụng di động (Mobile App) và phần mềm quản trị, tích hợp 3 trong 1 nền tảng tiện ích dễ dùng.</p>
                                <button className='banner__desc__btn'>
                                    <Link to='' className='banner__desc__btn--link'>Đăng kí dùng thử</Link>
                                </button>
                                <p className='banner__desc__detail_second'>Liên hệ ngay với BookingCare DX, tiên phong chuyển đổi số để thành công.</p>
                                <Link to='/' className='banner__desc__faq--link'>Xem thêm câu hỏi thường gặp</Link>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img className='banner__sub__img' src='https://cdn.bookingcare.vn/fo/2022/08/12/235737-frame12-removebg.png' alt='banner-img' />ß
                        </div>
                    </div>
                </div>

                <div className='benefit__digital__conversion'>
                    <h2 className='benefit__digital__title'>Lợi ích sử dụng Giải pháp chuyển đổi số BookingCare DX</h2>
                    <ul className='benefit__digital__list'>
                        <li className='benefit__digital__item'>
                            <div className='benefit__feature__wrapper'>
                                <img className='benefit__feature__img' src='https://cdn.bookingcare.vn/fo/2022/08/12/164513-thu-hut-khach-hang.png' alt='benefit__feature__img' />
                                <h3 className='benefit__feature__title'>Tăng khách hàng tăng doanh thu</h3>
                                <p className='benefit__feature__desc'>Trang web tối ưu SEO, nâng cao thứ hạng trên Google, tiếp cận nhiều khách hàng tiềm năng</p>
                            </div>
                        </li>
                        <li className='benefit__digital__item'>
                            <div className='benefit__feature__wrapper'>
                                <img className='benefit__feature__img' src='https://cdn.bookingcare.vn/fo/2022/08/12/164513-thu-hut-khach-hang.png' alt='benefit__feature__img' />
                                <h3 className='benefit__feature__title'>Tăng khách hàng tăng doanh thu</h3>
                                <p className='benefit__feature__desc'>Trang web tối ưu SEO, nâng cao thứ hạng trên Google, tiếp cận nhiều khách hàng tiềm năng</p>
                            </div>
                        </li>
                        <li className='benefit__digital__item'>
                            <div className='benefit__feature__wrapper'>
                                <img className='benefit__feature__img' src='https://cdn.bookingcare.vn/fo/2022/08/12/164513-thu-hut-khach-hang.png' alt='benefit__feature__img' />
                                <h3 className='benefit__feature__title'>Tăng khách hàng tăng doanh thu</h3>
                                <p className='benefit__feature__desc'>Trang web tối ưu SEO, nâng cao thứ hạng trên Google, tiếp cận nhiều khách hàng tiềm năng</p>
                            </div>
                        </li>
                        <li className='benefit__digital__item'>
                            <div className='benefit__feature__wrapper'>
                                <img className='benefit__feature__img' src='https://cdn.bookingcare.vn/fo/2022/08/12/164513-thu-hut-khach-hang.png' alt='benefit__feature__img' />
                                <h3 className='benefit__feature__title'>Tăng khách hàng tăng doanh thu</h3>
                                <p className='benefit__feature__desc'>Trang web tối ưu SEO, nâng cao thứ hạng trên Google, tiếp cận nhiều khách hàng tiềm năng</p>
                            </div>
                        </li>
                        <li className='benefit__digital__item'>
                            <div className='benefit__feature__wrapper'>
                                <img className='benefit__feature__img' src='https://cdn.bookingcare.vn/fo/2022/08/12/164513-thu-hut-khach-hang.png' alt='benefit__feature__img' />
                                <h3 className='benefit__feature__title'>Tăng khách hàng tăng doanh thu</h3>
                                <p className='benefit__feature__desc'>Trang web tối ưu SEO, nâng cao thứ hạng trên Google, tiếp cận nhiều khách hàng tiềm năng</p>
                            </div>
                        </li>
                        <li className='benefit__digital__item'>
                            <div className='benefit__feature__wrapper'>
                                <img className='benefit__feature__img' src='https://cdn.bookingcare.vn/fo/2022/08/12/164513-thu-hut-khach-hang.png' alt='benefit__feature__img' />
                                <h3 className='benefit__feature__title'>Tăng khách hàng tăng doanh thu</h3>
                                <p className='benefit__feature__desc'>Trang web tối ưu SEO, nâng cao thứ hạng trên Google, tiếp cận nhiều khách hàng tiềm năng</p>
                            </div>
                        </li>
                    </ul>
                    <div className='benefit__digital__btn__wrapper'>
                        <button className='benefit__digital__btn'>
                            <Link to='/' className='benefit__digital__btn--link'>Liên hệ</Link>
                        </button>
                    </div>
                </div>

                <div className='medical__service__provider container'>
                    <h2 className='medical__service__title'>Gói chuyển đổi số dành cho Cơ sở cung cấp Dịch vụ Y tế</h2>
                    <ul className='medical__service__list row'>
                        <li className='col-md-3'>
                            <PackageDigital
                                color='firstColor'
                                data={{
                                    title: 'Miễn phí',
                                    cost: 'Miễn phí',
                                    characteristicDesc: 'Gói dịch vụ ít nhất 1 năm Dùng thử 01 tháng',
                                    listFeatures: [
                                        'Thông tin giới thiệu chi tiết về phòng khám',
                                        'Tính năng đặt lịch khám (1 bác sĩ)',
                                        'Chức năng Live chat',
                                        'Bài viết nội dung (10 bài)',
                                        'Kết nối Fanpage/Youtube',
                                        'Bác sĩ, Lịch khám, Nội dung Website, Bài viết'
                                    ]
                                }}
                            />
                        </li>
                        <li className='col-md-3'>
                            <PackageDigital
                                color='secondColor'
                                data={{
                                    title: 'Cơ bản',
                                    cost: '12 triệu/năm',
                                    characteristicDesc: 'Gói dịch vụ ít nhất 1 năm Dùng thử 01 tháng',
                                    listFeatures: [
                                        'Thông tin giới thiệu chi tiết về phòng khám',
                                        'Tính năng đặt lịch khám (1 bác sĩ)',
                                        'Chức năng Live chat',
                                        'Bài viết nội dung (10 bài)',
                                        'Kết nối Fanpage/Youtube',
                                        'Bác sĩ, Lịch khám, Nội dung Website, Bài viết'
                                    ]
                                }}
                            />
                        </li>
                        <li className='col-md-3'>
                            <PackageDigital
                                color='thirdColor'
                                data={{
                                    title: 'Nâng cao',
                                    cost: '36 triệu/năm',
                                    characteristicDesc: 'Gói dịch vụ ít nhất 1 năm Dùng thử 01 tháng',
                                    listFeatures: [
                                        'Thông tin giới thiệu chi tiết về phòng khám',
                                        'Tính năng đặt lịch khám (1 bác sĩ)',
                                        'Chức năng Live chat',
                                        'Bài viết nội dung (10 bài)',
                                        'Kết nối Fanpage/Youtube',
                                        'Bác sĩ, Lịch khám, Nội dung Website, Bài viết'
                                    ]
                                }}
                            />
                        </li>
                        <li className='col-md-3'>
                            <PackageDigital
                                color='fourthColor'
                                data={{
                                    title: 'Toàn diện',
                                    cost: '24 triệu/năm',
                                    characteristicDesc: 'Gói dịch vụ ít nhất 1 năm Dùng thử 01 tháng',
                                    listFeatures: [
                                        'Thông tin giới thiệu chi tiết về phòng khám',
                                        'Tính năng đặt lịch khám (1 bác sĩ)',
                                        'Chức năng Live chat',
                                        'Bài viết nội dung (10 bài)',
                                        'Kết nối Fanpage/Youtube',
                                        'Bác sĩ, Lịch khám, Nội dung Website, Bài viết'
                                    ]
                                }}
                            />
                        </li>
                    </ul>
                </div>
                <div className='medical__service__provider container'>
                    <h2 className='medical__service__title'>Gói chuyển đổi số dành cho Đơn vị bán hàng Sản phẩm Y tế</h2>
                    <ul className='medical__service__list row'>
                        <li className='col-md-3'>
                            <PackageDigital
                                color='firstColor'
                                data={{
                                    title: 'Miễn phí',
                                    cost: 'Miễn phí',
                                    characteristicDesc: '',
                                    listFeatures: [
                                        'Thông tin giới thiệu chi tiết về phòng khám',
                                        'Tính năng đặt lịch khám (1 bác sĩ)',
                                        'Chức năng Live chat',
                                        'Bài viết nội dung (10 bài)',
                                        'Kết nối Fanpage/Youtube',
                                        'Bác sĩ, Lịch khám, Nội dung Website, Bài viết'
                                    ]
                                }}
                            />
                        </li>
                        <li className='col-md-3'>
                            <PackageDigital
                                color='secondColor'
                                data={{
                                    title: 'Cơ bản',
                                    cost: '12 triệu/năm',
                                    characteristicDesc: 'Gói dịch vụ ít nhất 1 năm Dùng thử 01 tháng',
                                    listFeatures: [
                                        'Thông tin giới thiệu chi tiết về phòng khám',
                                        'Tính năng đặt lịch khám (1 bác sĩ)',
                                        'Chức năng Live chat',
                                        'Bài viết nội dung (10 bài)',
                                        'Kết nối Fanpage/Youtube',
                                        'Bác sĩ, Lịch khám, Nội dung Website, Bài viết'
                                    ]
                                }}
                            />
                        </li>
                        <li className='col-md-3'>
                            <PackageDigital
                                color='thirdColor'
                                data={{
                                    title: 'Nâng cao',
                                    cost: '36 triệu/năm',
                                    characteristicDesc: 'Gói dịch vụ ít nhất 1 năm Dùng thử 01 tháng',
                                    listFeatures: [
                                        'Thông tin giới thiệu chi tiết về phòng khám',
                                        'Tính năng đặt lịch khám (1 bác sĩ)',
                                        'Chức năng Live chat',
                                        'Bài viết nội dung (10 bài)',
                                        'Kết nối Fanpage/Youtube',
                                        'Bác sĩ, Lịch khám, Nội dung Website, Bài viết'
                                    ]
                                }}
                            />
                        </li>
                        <li className='col-md-3'>
                            <PackageDigital
                                color='fourthColor'
                                data={{
                                    title: 'Toàn diện',
                                    cost: '24 triệu/năm',
                                    characteristicDesc: 'Gói dịch vụ ít nhất 1 năm Dùng thử 01 tháng',
                                    listFeatures: [
                                        'Thông tin giới thiệu chi tiết về phòng khám',
                                        'Tính năng đặt lịch khám (1 bác sĩ)',
                                        'Chức năng Live chat',
                                        'Bài viết nội dung (10 bài)',
                                        'Kết nối Fanpage/Youtube',
                                        'Bác sĩ, Lịch khám, Nội dung Website, Bài viết'
                                    ]
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <FooterAboutSupport />
        </div>
    )
}

export default DigitalConversionPackage;