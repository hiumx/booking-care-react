
import FooterHome from '../../components/FooterHome';
import InfoContact from '../../components/Section/InfoContact';
import HeaderHome from '../../components/header/HeaderHome';
import './Appointment.scss';

function Appointment() {
    return (
        <div className='appointment__wrapper'>
            <HeaderHome />
            
            <div className='appointment__content'>
                <h3 className='appointment__title'>Lịch hẹn đã đặt</h3>
                <p className='appointment__schedule'>Bạn chưa đặt lịch hẹn trên trình duyệt này!</p>
            </div>

            <InfoContact />
            <FooterHome />
        </div>
    )
}

export default Appointment;