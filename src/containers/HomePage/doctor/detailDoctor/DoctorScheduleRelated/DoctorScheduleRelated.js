
import { useEffect, useState } from 'react';
import './DoctorScheduleRelated.scss';
import { getDoctorClinicDetail } from '../../../../../services/doctorService';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

function DoctorScheduleRelated({ id }) {
    const [isDetail, setIsDetail] = useState(false);
    const [isShowInsurance, setIsShowInsurance] = useState(false);
    const [nameClinic, setNameClinic] = useState('');
    const [addressClinic, setAddressClinic] = useState('');
    const [province, setProvince] = useState('');
    const [price, setPrice] = useState('');
    const [methodPayment, setMethodPayment] = useState('');
    const [moreInfo, setMoreInfo] = useState('');

    const language = useSelector(state => state.app.language);

    useEffect(() => {
        const fetchClinicData = async () => {
            const res = await getDoctorClinicDetail(+id);
            if (res && res.code === 0) {
                const { nameClinic, addressClinic, note, paymentData, provinceData, priceData } = res?.data;
                setNameClinic(nameClinic);
                setAddressClinic(addressClinic);
                setMoreInfo(note);
                if (language === 'vi') {
                    setPrice(priceData.valueVi);
                    setProvince(provinceData.valueVi);
                    setMethodPayment(paymentData.valueVi);
                } else if (language === 'en') {
                    setPrice(priceData.valueEn);
                    setProvince(provinceData.valueEn);
                    setMethodPayment(paymentData.valueEn);
                }
            }
        }
        fetchClinicData();
    }, [id]);

    return (
        <div className='schedule__related__container'>
            <div className='schedule__address'>
                <h6 className='schedule__title'>ĐỊA CHỈ PHÒNG KHÁM</h6>
                <p className='schedule__name__desc'>{nameClinic}</p>
                <p className='schedule__address__desc'>{`${addressClinic}, ${province}`}</p>
            </div>
            <div className={!isDetail ? 'schedule__price d-flex' : 'schedule__price'}>
                <p className='schedule__title'>GIÁ KHÁM:</p>
                {!isDetail &&
                    <div className='d-flex'>
                        <span className='schedule__price__desc'> {language === 'vi' ? `${price}đ` : `${price}$`} </span>
                        <p className='schedule__desc--link' onClick={() => setIsDetail(true)}>Xem chi tiết</p>
                    </div>
                }
                {isDetail &&
                    <div className='price__detail__wrapper'>
                        <div className='price__detail'>
                            <div className='price__detail__block'>
                                <div className='price__detail__desc'>
                                    <span className='price__detail__number__title'>Giá khám:</span>
                                    <span className='price__detail__desc__para'>Chưa bao gồm chi phí chụp chiếu, xét nghiệm</span>
                                </div>
                                <p className='price__detail__number__desc'>
                                    {`${price}đ`}
                                </p>
                            </div>
                            <div className='price__detail__payment'>
                                {`Người bệnh có thể thanh toán chi phí bằng ${methodPayment}`}
                            </div>
                        </div>
                        <div>
                            <span className='schedule__title'>GIÁ DỊCH VỤ LIÊN QUAN:</span>
                            <div className='price__detail__block__wrapper'>
                                <div className='price__detail__block'>
                                    <div className='price__detail__desc'>
                                        <span className='price__detail__number__title'>Giá khám:</span>
                                        <p className='price__detail__desc__para'>Tổng phân tích tế bào máu ngoại vi (bằng máy đếm laser)</p>
                                    </div>
                                    <p className='price__detail__number__desc'>70.000đ</p>
                                </div>
                                <div className='price__detail__block'>
                                    <div className='price__detail__desc'>
                                        <span className='price__detail__number__title'>Giá khám:</span>
                                        <p className='price__detail__desc__para'>Siêu âm ổ bụng</p>
                                    </div>
                                    <p className='price__detail__number__desc'>150.000đ</p>
                                </div>
                                <div className='price__detail__block'>
                                    <div className='price__detail__desc'>
                                        <span className='price__detail__number__title'>Giá khám:</span>
                                        <p className='price__detail__desc__para'>Chụp Xquang khớp gối thẳng, nghiêng hoặc chếch (2 phim)</p>
                                    </div>
                                    <p className='price__detail__number__desc'>320.000đ</p>
                                </div>
                                <div className='price__detail__block'>
                                    <div className='price__detail__desc'>
                                        <span className='price__detail__number__title'>Giá khám:</span>
                                        <p className='price__detail__desc__para'>SChụp Xquang xương cổ tay</p>
                                    </div>
                                    <p className='price__detail__number__desc'>320.000đ</p>
                                </div>
                                <div className='price__detail__block'>
                                    <div className='price__detail__desc'>
                                        <span className='price__detail__number__title'>Giá khám:</span>
                                        <p className='price__detail__desc__para'>Chụp Xquang xương bàn ngón tay</p>
                                    </div>
                                    <p className='price__detail__number__desc'>320.000đ</p>
                                </div>
                                <div className='price__detail__block'>
                                    <div className='price__detail__desc'>
                                        <span className='price__detail__number__title'>Giá khám:</span>
                                        <p className='price__detail__desc__para'>Chụp Xquang xương cẳng chân</p>
                                    </div>
                                    <p className='price__detail__number__desc'>320.000đ</p>
                                </div>
                            </div>

                        </div>
                        <div className='mb-3'>
                            <p className='schedule__desc--link text-end mt-2 mb-0' onClick={() => setIsDetail(false)}>Ẩn bảng giá</p>
                        </div>
                    </div>
                }

            </div>
            <div className='schedule__insurance'>
                <div className='d-flex'>
                    <span className='schedule__title'>LOẠI BẢO HIỂM ÁP DỤNG </span>
                    {!isShowInsurance &&
                        <p className='schedule__desc--link' onClick={() => setIsShowInsurance(true)}>Xem chi tiết</p>
                    }
                </div>
                {isShowInsurance &&
                    <div className='insurance__apply'>
                        <div className='insurance__detail__block'>
                            <p className='insurance__detail__block__title'>Bảo hiểm y tế nhà nước </p>
                            <p className='insurance__detail--desc'>Hiện tại phòng khám chưa áp dụng bảo hiểm y tế nhà nước </p>
                        </div>
                        <div className='insurance__detail__block'>
                            <p className='insurance__detail__block__title'>Bảo hiểm bảo lãnh </p>
                            <p className='insurance__detail--desc'>Đối với các đơn vị bảo hiểm không bảo lãnh trực tiếp: Phòng khám có xuất hoá đơn tài chính (hoá đơn điện tử) và hỗ trợ bệnh nhân hoàn thiện hồ sơ</p>
                            <p className='insurance__detail--desc text-info cursor-pointer'>Xem danh sách</p>
                        </div>
                    </div>
                }
                {isShowInsurance &&
                    <p className='schedule__desc--link mt-1 ' onClick={() => setIsShowInsurance(false)}>Thu gọn</p>
                }
            </div>
        </div>
    )
}

export default DoctorScheduleRelated;