import { useEffect, useState } from 'react';
import './DoctorAppointment.scss';
import { confirmAppointment, getAppointmentsByDate } from '../../../services/doctorService';
import { dateFormat } from '../../../utils';
import { useSelector } from 'react-redux';

export default function DoctorAppointment() {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [appoints, setAppoints] = useState([]);
    const [hideState, setHideState] = useState(0);

    const user = useSelector(state => state.user.userInfo);

    useEffect(() => {
        let spread = date.split('-');
        const dateFormat = `${spread[0]}-${spread[1]}-${spread[2]}`
        const fetchListAppoint = async () => {
            const res = await getAppointmentsByDate(user?.id, dateFormat);
            if (res?.code === 0) {
                setAppoints(res.data)
            }
        }

        fetchListAppoint();
    }, [date, hideState]);

    const handleChangeDate = (e) => {
        setDate(e.target.value);
    }

    const handleClickConfirm = (bookingId) => {
        confirmAppointment({ doctorId: user.id, bookingId }).then().catch();
        setHideState(Math.random())
    }

    return (
        <div className="doctor__app__wrapper container">
            <h4 className="doctor__app__title">Appointment management</h4>
            <div>
                <div className='row'>
                    <label htmlFor='date'>Chọn ngày</label>
                    <input type='date' id='date' className='col-lg-6 form-control mt-3' value={date} onChange={handleChangeDate} />
                </div>
                <table className="table table-hover mt-4">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Thời gian</th>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">Giới tính</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appoints.length > 0 ? appoints?.map((appoint, idx) =>
                            <tr key={idx}>
                                <th scope="row">{idx + 1}</th>
                                <td>{appoint.timeTypeData.valueVi}</td>
                                <td>{appoint.Patient.name}</td>
                                <td>{appoint.Patient.genderDataPatient.valueVi}</td>
                                <td>{appoint.Patient.address}</td>
                                <td>
                                    {appoint.statusId === 'S2'
                                        ? <button className='btn btn-success px-2' onClick={() => handleClickConfirm(appoint.id)}>Xác nhận</button>
                                        : <button className='btn btn-success px-2' disabled>Đã xác nhận</button>
                                    }
                                    <button className='btn btn-info mx-2 px-2'>Gửi hóa đơn</button>
                                </td>
                            </tr>
                        ) : <td colSpan='6' className='text-center pt-3'>Chưa có lịch hẹn vào ngày này.</td>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}