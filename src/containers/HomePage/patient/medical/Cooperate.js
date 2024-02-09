
import { useState } from 'react';
import FooterHome from '../../components/FooterHome';
import InfoContact from '../../components/Section/InfoContact';
import HeaderHome from '../../components/header/HeaderHome';
import './Cooperate.scss';

function Cooperate() {

    const [peopleContact, setPeopleContact] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [healthFacilities, setHealthFacilities] = useState('');
    const [content, setContent] = useState('');

    return (
        <div className='cooperate__wrapper'>
            <HeaderHome />
            <div className='cooperate__content'>
                <h3 className='cooperate__content__title'>Hợp tác cùng BookingCare</h3>
                <hr />
                <p className='ç'>BookingCare rất hân hạnh được hợp tác với bác sĩ và cơ sở y tế. Vui lòng gửi thông tin, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.</p>
                <div className='cooperate__form'>
                    <div className="mb-3">
                        <label for="people-contact" className="form-label">Người liên hệ</label>
                        <input
                            type="text"
                            className="form-control"
                            value={peopleContact}
                            id="people-contact"
                            placeholder='(bắt buộc)'
                            onChange={e => setPeopleContact(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Số điện thoại</label>
                        <input
                            type="text"
                            className="form-control"
                            value={phoneNumber}
                            id="phone"
                            placeholder='(bắt buộc)'
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Địa chỉ email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            id="email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="base-medial" className="form-label">Tên cở sở y tế</label>
                        <input
                            type="text"
                            className="form-control"
                            value={healthFacilities}
                            id="base-medial"
                            onChange={e => setHealthFacilities(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="address" className="form-label">Địa chỉ</label>
                        <input
                            type="text"
                            className="form-control"
                            value={address}
                            id="address"
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="content" className="form-label">Nội dung</label>
                        <textarea
                            className="form-control"
                            id="content"
                            onChange={e => setContent(e.target.value)}
                        >
                            {content}
                        </textarea>
                    </div>
                    <button type='button' className='send__btn'>Gửi thông tin</button>
                </div>
            </div>
            <InfoContact />
            <FooterHome />
        </div>
    )
}

export default Cooperate;
