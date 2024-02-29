import { useDispatch, useSelector } from 'react-redux';
import HeaderHome from '../../../components/header/HeaderHome';
import './BookingSchedule.scss';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import * as actions from '../../../../../store/actions';
import queryString from 'query-string';
import localization from 'moment/locale/vi';
import moment from 'moment';
import FooterSecondary from '../../../components/FooterSecondary/FooterSecondary';
import { checkDateValid, checkEmailValid, checkIsEmpty, checkPhoneNumber } from '../../../../../auth/validateInput';
import { getDoctorClinicDetail, getInfoDoctorByIdService } from '../../../../../services/doctorService';
import { bookingSchedule } from '../../../../../services/patientService';
// import { toast } from 'react-toastify';

function BookingSchedule() {
    const [dateExamine, setDateExamine] = useState('');
    const [priceSuggestActive, setPriceSuggestActive] = useState('1');
    const [objectExamine, setObjectExamine] = useState('1');
    const [namePatient, setNamePatient] = useState('');
    const [genderPatient, setGenderPatient] = useState('');
    const [phoneNumberPatient, setPhoneNumberPatient] = useState('');
    const [dobPatient, setDobPatient] = useState('');
    const [emailPatient, setEmailPatient] = useState('');
    // const [provincePatient, setProvincePatient] = useState('');
    // const [districtPatient, setDistrictPatient] = useState('');
    const [addressPatient, setAddressPatient] = useState('');
    const [reasonPatient, setReasonPatient] = useState('');
    const [methodPayment, setMethodPayment] = useState('PAY2');
    const [listProvince, setListProvince] = useState([]);
    const [listDistrict, setListDistrict] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [priceExamine, setPriceExamine] = useState('');
    const [doctorInfo, setDoctorInfo] = useState({});


    const firstInputSuggestPrice = useRef();
    const secondInputSuggestPrice = useRef();

    // const dispatch = useDispatch();
    // const doctorInfo = useSelector(state => state.doctor.dataDoctor);
    const language = useSelector(state => state.app.language);

    const { search } = useLocation();
    const { doctorId, time, timeType, date } = queryString.parse(search);

    // useEffect(() => {
    //     dispatch(actions.getInfoDoctorById(+doctorId));
    //     fetch('https://provinces.open-api.vn/api/?depth=2')
    //         .then(res => res.json())
    //         .then(data => {
    //             const listProvinceCustom = data.map(province => ({
    //                 code: province.code,
    //                 name: province.name,
    //                 districts: province.districts
    //             }));
    //             setListProvince(listProvinceCustom);
    //         })
    //         .catch(err => console.log(err))
    // }, []);

    useEffect(() => {
        const fetchClinicData = async () => {
            const res = await getDoctorClinicDetail(doctorId);
            if (res && res.code === 0) {
                const {  paymentData, priceData } = res.data;
                setPriceExamine(priceData);
            }
        }
        fetchClinicData();
        const fetchDataDoctor = async () => {
            const res = await getInfoDoctorByIdService(doctorId);
            if (res && res.errorCode === 0) {
                setDoctorInfo(res.data);
            }
        }
        fetchDataDoctor();
    }, []);

    useEffect(() => {
        if (language === 'vi') {
            // const dateObj = new Date(date);
            // dateObj.setHours(dateObj.getHours() - 7);
            // console.log(dateObj); 
            const dateString = moment(new Date()).format('dddd - DD/MM/YYYY').trim();
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

    // const handleChangeProvince = (e) => {
    //     setProvincePatient(e.target.value);
    //     const listDistrictOfProvince = listProvince.find(province => province.code === +e.target.value).districts;
    //     setListDistrict(listDistrictOfProvince);
    // }

    const validatePatientInput = () => {
        if(checkIsEmpty(namePatient)) {
            setErrorMessage('Vui lòng nhập tên người bệnh!');
            return false;
        } 
         if (checkIsEmpty(genderPatient)) {
            setErrorMessage('Vui chọn giới tính người bệnh!');
            return false;
        } 
         if (checkIsEmpty(emailPatient)) {
            setErrorMessage('Vui nhập email liên hệ!');
            return false;
        } 
         if (!checkEmailValid(emailPatient)) {
            setErrorMessage('Email không hợp lệ!');
            return false;
        } 
         if (checkIsEmpty(phoneNumberPatient)) {
            setErrorMessage('Vui lòng nhập số điện thoại!');
            return false;
        } 
         if (!checkPhoneNumber(phoneNumberPatient)) {
            setErrorMessage('Số điện thoại không hợp lệ!');
            return false;
        } 
         if (checkIsEmpty(dobPatient)) {
            setErrorMessage('Vui lòng nhập ngày/tháng/năm sinh!');
            return false;
        } 
         if (checkIsEmpty(addressPatient)) {
            setErrorMessage('Vui lòng nhập đia chỉ!');
            return false;
        } 
         if (checkIsEmpty(reasonPatient)) {
            setErrorMessage('Vui lòng nhập lí do khám bệnh!');
            return false;
        } 
        return true;

    }

    const handleClickConfirmAppointment = async () => {
        if(validatePatientInput()) {
            const res = await bookingSchedule({
                doctorId,
                patientName: namePatient,
                patientGender: genderPatient,
                patientEmail: emailPatient,
                patientPhone: phoneNumberPatient,
                patientDob: dobPatient,
                patientAddress: addressPatient,
                patientReason: reasonPatient,
                objectExamine: priceSuggestActive,
                methodPaymentId: methodPayment,
                priceId: priceExamine.keyMap,
                dateAppointment: date,
                timeType,
                doctorName: nameVi,
                timeSpecific: time
            });
            if(res && res.code === 0) {
                setErrorMessage('');
                setSuccessMessage('Đăng kí thông tin thành công, vui lòng xác nhận thông tin tại email để hoàn tất đăng kí.');
            } else if (res && res.code === 1) {
                setErrorMessage('Lịch hẹn khám bệnh đã được đăng kí!');
                setSuccessMessage('');
            }
            console.log({
                doctorId,
                patientName: namePatient,
                patientGender: genderPatient,
                patientEmail: emailPatient,
                patientPhone: phoneNumberPatient,
                patientDob: dobPatient,
                patientAddress: addressPatient,
                patientReason: reasonPatient,
                objectExamine: priceSuggestActive,
                methodPaymentId: methodPayment,
                priceId: priceExamine.keyMap,
                dateAppointment: date,
                timeType,
                doctorName: nameVi,
                timeSpecific: time
            });
        }
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
                        <label
                            className={priceSuggestActive === '1' ? 'price__suggest__item active' : 'price__suggest__item'}
                            onClick={() => {
                                setPriceSuggestActive('1');
                                firstInputSuggestPrice.current.checked = true;
                            }}
                        >
                            <input type='radio' defaultChecked ref={firstInputSuggestPrice} name='price__suggest__select' />
                            <span>Giá tư vấn 15 phút</span>
                            <p className='price__suggest__detail'>{language === 'vi' ? `${priceExamine.valueVi}đ` : `${priceExamine.valueEn}$`}</p>
                        </label>
                        <label
                            className={priceSuggestActive === '2' ? 'price__suggest__item active' : 'price__suggest__item'}
                            onClick={() => {
                                setPriceSuggestActive('2');
                                secondInputSuggestPrice.current.checked = true;
                            }}
                        >
                            <input type='radio' ref={secondInputSuggestPrice} name='price__suggest__select' />
                            <span>Giá tư vấn 30 phút</span>
                            <p className='price__suggest__detail'>500.000đ</p>
                        </label>
                    </div>
                    <div className='form__patient__checkbox__wrapper'>
                        <label className='form__patient__checkbox__item'>
                            <input
                                type='radio'
                                name='name-patient'
                                className='form__patient__checkbox__input'
                                value='1'
                                defaultChecked
                                onChange={e => setObjectExamine(e.target.value)}
                            />
                            Đặt cho mình
                        </label>
                        <label className='form__patient__checkbox__item'>
                            <input
                                type='radio'
                                name='name-patient'
                                className='form__patient__checkbox__input'
                                value='2'
                                onChange={e => setObjectExamine(e.target.value)}
                            />
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
                            <input
                                type='text'
                                className='form__patient__input'
                                placeholder='Họ và tên bệnh nhân (bắt buộc)'
                                onChange={e => setNamePatient(e.target.value)}
                            />
                        </div>
                        <span className='form__patient__input--desc'>Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên, ví dụ: Trần Văn Phú</span>
                    </div>
                    <div className='form__patient__checkbox__wrapper'>
                        <label className='form__patient__checkbox__item'>
                            <input
                                type='radio'
                                className='form__patient__checkbox__input'
                                name='gender'
                                value='M'
                                onChange={e => setGenderPatient(e.target.value)}
                            />
                            Nam
                        </label>
                        <label className='form__patient__checkbox__item'>
                            <input
                                type='radio'
                                className='form__patient__checkbox__input'
                                name='gender'
                                value='F'
                                onChange={e => setGenderPatient(e.target.value)}
                            />
                            Nữ
                        </label>
                        <label className='form__patient__checkbox__item'>
                            <input
                                type='radio'
                                className='form__patient__checkbox__input'
                                name='gender'
                                value='O'
                                onChange={e => setGenderPatient(e.target.value)}
                            />
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
                            <input
                                type='text'
                                className='form__patient__input'
                                placeholder='Email liên hệ (bắt buộc)'
                                value={emailPatient}
                                onChange={e => setEmailPatient(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='form__patient__wrapper'>
                        <div className='form-control form__patient__wrapper__input'>
                            <span>
                                <svg className='form__patient__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>
                            </span>
                            <input
                                type='text'
                                className='form__patient__input'
                                placeholder='Số điện thoại liên hệ (bắt buộc)'
                                onChange={e => setPhoneNumberPatient(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='form__patient__wrapper'>
                        <div className='form-control form__patient__wrapper__input'>
                            <span>
                                <svg className='form__patient__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                                </svg>
                            </span>
                            <input
                                type='text'
                                className='form__patient__input'
                                placeholder='Ngày/tháng/năm sinh (bắt buộc)'
                                onChange={e => setDobPatient(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* <div className='form__patient__wrapper'>
                        <div className='form__patient__select__wrapper form-control'>
                            <span>
                                <svg className='form__patient__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                            </span>
                            <select type='text' className='form__patient__select' onChange={e => handleChangeProvince(e)}>
                                <option value='0'>-- Chọn Tỉnh/Thành phố --</option>
                                {listProvince.map(province =>
                                    <option key={province.code} value={province.code}>{province.name}</option>
                                )}
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
                            <select type='text' className='form__patient__select' onChange={e => setDistrictPatient(e.target.value)}>
                                <option value='0'>-- Chọn Quận/Huyện --</option>
                                {listDistrict.map(district => <option key={district.code} value={district.code}>{district.name}</option>)}
                            </select>
                        </div>
                    </div> */}
                    <div className='form__patient__wrapper'>
                        <div className='form-control form__patient__wrapper__input'>
                            <span>
                                <svg className='form__patient__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                            </span>
                            <input
                                type='text'
                                className='form__patient__input'
                                placeholder='Địa chỉ'
                                onChange={e => setAddressPatient(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='form__patient__wrapper'>
                        <div className='form__patient__textarea_wrapper form-control'>
                            <span>
                                <svg className='form__patient__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M0 32C0 14.3 14.3 0 32 0H352c17.7 0 32 14.3 32 32V64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64V32zm32 96H352V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zM160 240v48H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V352h48c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16H224V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
                                </svg>
                            </span>
                            <textarea
                                className='form__patient__textarea'
                                placeholder='Lý do khám bệnh'
                                onChange={e => setReasonPatient(e.target.value)}
                                value={reasonPatient}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className='form__patient__method__payment'>
                        <p className='form__patient__method__payment__title'>Hình thức thanh toán</p>
                        <div className='form__patient__checkbox__wrapper'>
                            <label className='form__patient__checkbox__item'>
                                <input type='radio' className='form__patient__checkbox__input' value={methodPayment} defaultChecked name='methodPayment' />
                                Thanh toán trực tiếp
                            </label>

                        </div>
                        <div className='form__patient__price__wrapper'>
                            <div className='form__patient__price__item'>
                                <p>Giá khám</p>
                                <p>{language === 'vi' ? `${priceExamine.valueVi}đ` : `${priceExamine.valueEn}$`}</p>
                            </div>
                            <div className='form__patient__price__item'>
                                <p>Phí đặt lịch</p>
                                <p>Miễn phí</p>
                            </div>
                            <hr />
                            <div className='form__patient__price__item'>
                                <p>Tổng cộng</p>
                                <p className='form__patient__price__total'>{language === 'vi' ? `${priceExamine.valueVi}đ` : `${priceExamine.valueEn}$`}</p>
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
                        <button
                            className='form__patient__btn'
                            type='button'
                            onClick={handleClickConfirmAppointment}
                        >
                            Xác nhận đặt khám
                        </button>
                    </div>
                    <div className='form__patient__message__wrapper'>
                        {errorMessage &&
                            <span className='form__patient__error__message'>{errorMessage}</span>
                        }
                        {successMessage &&
                            <span className='form__patient__success__message'>{successMessage}</span>
                        }
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

export default BookingSchedule;