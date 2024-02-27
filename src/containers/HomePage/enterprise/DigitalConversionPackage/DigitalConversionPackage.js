import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import HeaderHome from '../../components/header/HeaderHome';
import './DigitalConversionPackage.scss';
import PackageDigital from '../../components/PackageDigital/PackageDigital';
import FooterAboutSupport from '../../components/FooterAboutSupport/FooterAboutSupport';
import { useEffect, useState } from 'react';
import { getAllBenefitsDigitalConversion, getPackagesDigitalConversionByIntendedFor } from '../../../../services/enterpriseService';
import Loading from '../../../../components/Loading/Loading';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import InfoItem from '../../components/InfoItem/InfoItem';

function DigitalConversionPackage() {
    const [listBenefits, setListBenefits] = useState([]);
    const [packagesForMedicalService, setPackagesForMedicalService] = useState([]);
    const [packagesForMedicalProduct, setPackagesForMedicalProduct] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const benefitRes = await getAllBenefitsDigitalConversion();
            const packageRes = await getPackagesDigitalConversionByIntendedFor('all');

            if (benefitRes.code === 0 && benefitRes?.data?.length > 0) {
                setListBenefits(benefitRes.data);
            }
            if (packageRes.code === 0 && packageRes?.data?.length > 0) {
                const listpackagesForMedicalService = packageRes.data.filter(packageItem => packageItem.intendedFor === 'B1');
                setPackagesForMedicalService(listpackagesForMedicalService);
                const listpackagesForProductService = packageRes.data.filter(packageItem => packageItem.intendedFor === 'B2');
                setPackagesForMedicalProduct(listpackagesForProductService);
            }
        }
        fetchApi();
    }, []);

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
                                    <Link to='/cooperate-digital-conversion' className='banner__desc__btn--link'>Đăng kí dùng thử</Link>
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
                    <Loading data={listBenefits} >
                        <ul className='benefit__digital__list row'>
                            {listBenefits.map((benefit, index) =>
                                <li className='col-md-4' key={index}>
                                    <InfoItem 
                                        image={benefit.image}
                                        title={benefit.title}
                                        description={benefit.description}
                                    />
                                </li>
                            )}
                        </ul>
                    </Loading>
                    <div className='benefit__digital__btn__wrapper'>
                        <button className='benefit__digital__btn'>
                            <Link to='/cooperate-digital-conversion' className='benefit__digital__btn--link'>Liên hệ</Link>
                        </button>
                    </div>
                </div>

                <div className='medical__service__provider container'>
                    <h2 className='medical__service__title'>Gói chuyển đổi số dành cho Cơ sở cung cấp Dịch vụ Y tế</h2>
                    <Loading data={packagesForMedicalService}>
                        <ul className='medical__service__list row'>
                            {packagesForMedicalService.length !== 0 && packagesForMedicalService?.map((packageItem, index) =>
                                <li className='col-md-3' key={index}>
                                    <PackageDigital
                                        color={packageItem.primaryColor}
                                        title={packageItem.title}
                                        cost={packageItem.cost}
                                        characteristicDesc={packageItem.description}
                                        listFeatures={packageItem.features.split(';')}
                                    />
                                </li>
                            )}
                        </ul>
                    </Loading>
                </div>
                <div className='medical__service__provider container'>
                    <h2 className='medical__service__title'>Gói chuyển đổi số dành cho Đơn vị bán hàng Sản phẩm Y tế</h2>
                    <Loading data={packagesForMedicalProduct}>
                        <ul className='medical__service__list row'>
                            {packagesForMedicalProduct.length !== 0 && packagesForMedicalProduct?.map((packageItem, index) =>
                                <li className='col-md-3' key={index}>
                                    <PackageDigital
                                        color={packageItem.primaryColor}
                                        title={packageItem.title}
                                        cost={packageItem.cost}
                                        characteristicDesc={packageItem.description}
                                        listFeatures={packageItem.features.split(';')}
                                    />
                                </li>
                            )}
                        </ul>
                    </Loading>
                </div>
            </div>
            <FooterAboutSupport />
        </div>
    )
}

export default DigitalConversionPackage;