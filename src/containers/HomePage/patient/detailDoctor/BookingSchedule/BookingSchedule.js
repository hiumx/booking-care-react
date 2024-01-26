import { connect } from 'react-redux';
import HeaderHome from '../../../components/header/HeaderHome';
import './BookingSchedule.scss';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import * as actions from '../../../../../store/actions';
import queryString from 'query-string';
import localization from 'moment/locale/vi';
import moment from 'moment';
import FooterSecondary from '../../../components/FooterSecondary/FooterSecondary';

function BookingSchedule({ language, dataDoctor, getInfoDoctorById }) {
    const [doctorInfo, setDoctorInfo] = useState({});
    const [dateExamine, setDateExamine] = useState('');
    const [priceSuggestActive, setPriceSuggestActive] = useState(0);
    const firstInputSuggestPrice = useRef();
    const secondInputSuggestPrice = useRef();

    const { search } = useLocation();
    const { doctorId, time, date } = queryString.parse(search);

    useEffect(() => {
        getInfoDoctorById(+doctorId);
    }, []);

    useEffect(() => {
        setDoctorInfo(dataDoctor);
    }, [dataDoctor]);

    useEffect(() => {
        if (language === 'vi') {
            const dateString = moment(new Date(date)).format('dddd - DD/MM/YYYY').trim();
            const dateStandard = dateString.charAt(0).toUpperCase() + dateString.slice(1);
            setDateExamine(dateStandard);
        } else if (language === 'en') {
            setDateExamine(moment(new Date(date)).locale('en').format('dddd - MM/DD/YYYY'));
        }

    }, [language])

    let nameVi, nameEn = '';
    if (doctorInfo && doctorInfo.positionData) {
        nameVi = `${doctorInfo.positionData.valueVi}, ${doctorInfo.lastName} ${doctorInfo.firstName}`
        nameEn = `${doctorInfo.positionData.valueEn}, ${doctorInfo.firstName} ${doctorInfo.lastName}`
    }

    return (
        <div className='booking__schedule__container'>
            <HeaderHome />
            <div className='booking__doctor__info__wrapper'>
                <div className='booking__doctor__info'>
                    <img src={doctorInfo.image} alt='doctor-img' className='booking__doctor__info--img' />
                    <div className='booking__doctor__info--desc'>
                        <h6 className='doctor__title'>ĐẶT LỊCH KHÁM</h6>
                        <p className='doctor__name'>{language === 'vi' ? nameVi : nameEn}</p>
                        <span className='doctor__time'>{`${time} - ${dateExamine}`}</span>
                    </div>
                </div>
            </div>
            <div className='form__register__examine__wrapper'>
                <form className='form__register__examine__content'>
                    <div className='price__suggest'>
                        <div
                            className={priceSuggestActive === 1 ? 'price__suggest__item active' : 'price__suggest__item'}
                            onClick={() => {
                                setPriceSuggestActive(1);
                                firstInputSuggestPrice.current.checked = true;
                            }}
                        >
                            <input type='radio' ref={firstInputSuggestPrice} name='price__suggest__select' />
                            <span>Giá tư vấn 15 phút</span>
                            <p className='price__suggest__detail'>250.000đ</p>
                        </div>
                        <div
                            className={priceSuggestActive === 2 ? 'price__suggest__item active' : 'price__suggest__item'}
                            onClick={() => {
                                setPriceSuggestActive(2);
                                secondInputSuggestPrice.current.checked = true;
                            }}
                        >
                            <input type='radio' ref={secondInputSuggestPrice} name='price__suggest__select' />
                            <span>Giá tư vấn 30 phút</span>
                            <p className='price__suggest__detail'>500.000đ</p>
                        </div>
                    </div>
                    <div className='form__patient__checkbox__wrapper'>
                        <label className='form__patient__checkbox__item'>
                            <input type='radio' name='name-patient' className='form__patient__checkbox__input' />
                            Đặt cho mình
                        </label>
                        <label className='form__patient__checkbox__item'>
                            <input type='radio' name='name-patient' className='form__patient__checkbox__input' />
                            Đặt cho người thân
                        </label>
                    </div>
                    <div className='form__patient__wrapper'>
                        <div className='form-control form__patient__wrapper__input'>
                            <span>
                                <svg className='form__patient__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                                </svg>
                            </span>
                            <input type='text' className='form__patient__input' placeholder='Họ và tên bệnh nhân (bắt buộc)' />
                        </div>
                        <span className='form__patient__input--desc'>Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên, ví dụ: Trần Văn Phú</span>
                    </div>
                    <div className='form__patient__checkbox__wrapper'>
                        <label className='form__patient__checkbox__item'>
                            <input type='radio' className='form__patient__checkbox__input' name='gender' />
                            Nam
                        </label>
                        <label className='form__patient__checkbox__item'>
                            <input type='radio' className='form__patient__checkbox__input' name='gender' />
                            Nữ
                        </label>
                        <label className='form__patient__checkbox__item'>
                            <input type='radio' className='form__patient__checkbox__input' name='gender' />
                            Khác
                        </label>
                    </div>
                    <div className='form__patient__wrapper'>
                        <div className='form-control form__patient__wrapper__input'>
                            <span>
                                <svg className='form__patient__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>
                            </span>
                            <input type='text' className='form__patient__input' placeholder='Số điện thoại liên hệ (bắt buộc)' />
                        </div>
                    </div>
                    <div className='form__patient__wrapper'>
                        <div className='form-control form__patient__wrapper__input'>
                            <span>
                                <svg className='form__patient__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                                </svg>
                            </span>
                            <input type='text' className='form__patient__input' placeholder='Năm sinh (bắt buộc)' />
                        </div>
                    </div>
                    <div className='form__patient__wrapper'>
                        <div className='form__patient__select__wrapper form-control'>
                            <span>
                                <svg className='form__patient__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                            </span>
                            <select type='text' className='form__patient__select'>
                                <option value='0'>-- Chọn Tỉnh/Thành phố --</option>
                                <option value='0'>Hà Nội</option>
                                <option value='1'>Đà Nẵng</option>
                                <option value='2'>Tp Hồ Chí Minh</option>
                            </select>
                        </div>
                    </div>
                    <div className='form__patient__wrapper'>
                        <div className='form__patient__select__wrapper form-control'>
                            <span>
                                <svg className='form__patient__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                            </span>
                            <select type='text' className='form__patient__select'>
                                <option value='0'>-- Chọn Quận/Huyện --</option>
                                <option value='0'>Hà Nội</option>
                                <option value='1'>Đà Nẵng</option>
                                <option value='2'>Tp Hồ Chí Minh</option>
                            </select>
                        </div>
                    </div>
                    <div className='form__patient__wrapper'>
                        <div className='form-control form__patient__wrapper__input'>
                            <span>
                                <svg className='form__patient__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                            </span>
                            <input type='text' className='form__patient__input' placeholder='Địa chỉ' />
                        </div>
                    </div>
                    <div className='form__patient__wrapper'>
                        <div className='form__patient__textarea_wrapper form-control'>
                            <span>
                                <svg className='form__patient__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M0 32C0 14.3 14.3 0 32 0H352c17.7 0 32 14.3 32 32V64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64V32zm32 96H352V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zM160 240v48H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V352h48c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16H224V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
                                </svg>
                            </span>
                            <textarea className='form__patient__textarea' placeholder='Lý do khám bệnh'>
                            </textarea>
                        </div>
                    </div>
                    <div className='form__patient__method__payment'>
                        <p className='form__patient__method__payment__title'>Hình thức thanh toán</p>
                        <div className='form__patient__checkbox__wrapper'>
                        <label className='form__patient__checkbox__item'>
                            <input type='radio' className='form__patient__checkbox__input' name='gender' />
                            Thanh toán trực tiếp
                        </label>

                        </div>
                        <div className='form__patient__price__wrapper'>
                            <div className='form__patient__price__item'>
                                <p>Giá khám</p>
                                <p>120.000đ</p>
                            </div>
                            <div className='form__patient__price__item'>
                                <p>Phí đặt lịch</p>
                                <p>Miễn phí</p>
                            </div>
                            <hr />
                            <div className='form__patient__price__item'>
                                <p>Tổng cộng</p>
                                <p className='form__patient__price__total'>120.000đ</p>
                            </div>
                        </div>
                    </div>
                    <div className='form__patient__sub__note'>
                        <p>Quý khách vui lòng điền đầy đủ thông tin để tiết kiệm thời gian làm thủ tục khám</p>
                    </div>
                    <div className='form__patient__note'>
                        <h6>LƯU Ý</h6>
                        <p>Thông tin anh/chị cung cấp sẽ được sử dụng làm hồ sơ khám bệnh, khi điền thông tin anh/chị vui lòng:</p>
                        <ul>
                            <li>Ghi rõ họ và tên, viết hoa những chữ cái đầu tiên, ví dụ: <b>Trần Văn Phú</b></li>
                            <li>Điền đầy đủ, đúng và vui lòng kiểm tra lại thông tin trước khi ấn "Xác nhận"</li>
                        </ul>
                    </div>
                    <div className='form__patient__btn__wrapper'>
                        <button className='form__patient__btn' type='button'>Xác nhận đặt khám</button>
                    </div>
                    <div className='form__patient__confirm'>
                        <span>Bằng việc xác nhận đặt khám, bạn đã hoàn toàn đồng ý với
                            <a href='#'>Điều khoản sử dụng </a>
                            dịch vụ của chúng tôi.</span>
                    </div>
                </form>
            </div>
            <FooterSecondary />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        dataDoctor: state.doctor.dataDoctor
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInfoDoctorById: (doctorId) => dispatch(actions.getInfoDoctorById(doctorId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingSchedule);