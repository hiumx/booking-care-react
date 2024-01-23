
import './DoctorScheduleRelated.scss';

function DoctorScheduleRelated() {
    return (
        <div className='schedule__related__container'>
            <div className='schedule__address'>
                <h6 className='schedule__address__title'>ĐỊA CHỈ PHÒNG KHÁM</h6>
                <p className='schedule__address__desc'>Phòng khám Chuyên khoa Da Liễu</p>
                <p className='schedule__address__desc--link'>207 Phố Huế - Hai Bà Trưng - Hà Nội</p>
            </div>
            <div className='schedule__price'>
                <span className='schedule__price__title'>GIÁ KHÁM:</span>
                <span className='schedule__price__desc'> 300.000đ - 400.000đ </span>
                <a className='schedule__price__desc--link' href='#'>Xem chi tiết</a>
            </div>
            <div className='schedule__insurance'>
                <span className='schedule__insurance__title'>LOẠI BẢO HIỂM ÁP DỤNG. </span>
                <a className='schedule__insurance--link' href='#'>Xem chi tiết</a>
            </div>
        </div>
    )
}

export default DoctorScheduleRelated;