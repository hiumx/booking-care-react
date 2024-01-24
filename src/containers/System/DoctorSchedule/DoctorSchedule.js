import { useEffect, useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import "react-datepicker/dist/react-datepicker.css";

import './DoctorSchedule.scss';
import { getAllCode, getUser, getUserByEmail } from '../../../services/userService';
import * as actions from '../../../store/actions';
import { createDoctorSchedule, getDoctorSchedule } from '../../../services/doctorService';

function DoctorSchedule({ getAllDoctors, listDoctors, getAllScheduleTime, doctorScheduleTimes, language, userInfo }) {

    const [date, setDate] = useState(new Date());
    const [doctor, setDoctor] = useState(null);
    const [listTimes, setListTimes] = useState([]);
    const [listTimesActive, setListTimeActive] = useState([]);

    const selectDoctorRef = useRef();


    const { roleId } = userInfo;
    const options = roleId && roleId === 'R1' && listDoctors.map(doctor => (
        {
            value: doctor.id,
            label: `${doctor.lastName} ${doctor.firstName}`
        }
    ));

    useEffect(() => {
        const fetchAllCodeData = async () => {
            const res = await getAllCode('TIME');
            setListTimes(res.data);
        }

        fetchAllCodeData();
        // getAllScheduleTime();
        roleId && roleId === 'R1' && getAllDoctors();

        if(roleId && roleId !== 'R1') {
            const fetchUserData = async () => {
                const res = await getUserByEmail(userInfo.email);
                setDoctor({
                    value: res.users.id,
                    label: `${res.users.lastName} ${res.users.firstName}`
                })
            }
            fetchUserData();

        }

    }, []);

    useEffect(() => {
        if (doctor && doctor.value) {
            const fetchScheduleExist = async () => {
                const res = await getDoctorSchedule({
                    doctorId: doctor.value,
                    date
                });

                if (res && res.code === 0) {
                    const resListExistSchedule = res.data.map(doctorScheduleData => {
                        return {
                            timeId: doctorScheduleData.timeTypeId,
                            keyMap: doctorScheduleData.timeType
                        }
                    })

                    setListTimeActive([...resListExistSchedule]);
                }
            }
            fetchScheduleExist();
        }
    }, [doctor, date]);

    const handleClickItemTimeExamines = (timeId, keyMap) => {
        if(doctor === null) {
            toast.error('Please choose doctor first!');
            selectDoctorRef.current.focus();
        } else {
            const isExit = listTimesActive.some(time => time.timeId === timeId);
            if (!isExit) {
                setListTimeActive([...listTimesActive, { timeId, keyMap }]);
            } else {
                const restList = listTimesActive.filter(time => time.timeId !== timeId);
                setListTimeActive(restList);
            }
        }
    }

    const handleClickCreateSchedule = async () => {
        if (doctor === null || doctor.value === null) {
            toast.error('Please choose doctor!');
        } else if (listTimesActive.length === 0) {
            toast.error('Please choose least one period!')
        } else {
            console.log(listTimesActive);
            const res = await createDoctorSchedule({
                doctorId: doctor.value,
                date,
                listTimeSelected: listTimesActive
            });
            if (res && res.errorCode === 0) {
                toast.success(res.message);
            } else {
                toast.error(res?.message);
            }
        }
    }

    return (
        <div className='doctor-schedule-wrapper'>
            <h4 className='title'>
                <FormattedMessage id="schedule-examines.title" />
            </h4>
            <div className='container'>
                <div className='row'>
                    {roleId && roleId === 'R1' &&
                        <div className='col-lg-6 mb-3'>
                            <label htmlFor="doctor-name" className="form-label">
                                <FormattedMessage id="schedule-examines.select-doctor" />
                            </label>
                            <Select
                                defaultValue={doctor}
                                onChange={setDoctor}
                                options={options}
                                ref={selectDoctorRef}
                            />
                        </div>
                    }
                    <div className='col-lg-6'>
                        <label htmlFor="doctor-schedule-date" className="form-label">
                            <FormattedMessage id="schedule-examines.choose-date-examines" />
                        </label><br />
                        <DatePicker
                            className="form-control"
                            selected={date}
                            onChange={(date) => setDate(date)}
                            minDate={new Date()}
                        />
                    </div>
                </div>
                <div className='schedule-desc-time'>
                    <ul className='list-times-examines'>
                        {
                            listTimes.map((time, index) =>
                                <li
                                    onClick={() => handleClickItemTimeExamines(time.id, time.keyMap)}
                                    className={listTimesActive && listTimesActive.some(item => item.timeId === time.id) ? 'time-examines-item active' : 'time-examines-item'}
                                    key={index}>{language === 'en' ? time.valueEn : time.valueVi}
                                </li>
                            )
                        }
                    </ul>
                </div>
                <button
                    className='create-schedule-btn'
                    onClick={handleClickCreateSchedule}

                >
                    <FormattedMessage id="schedule-examines.create-schedule-btn" />
                </button>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        listDoctors: state.doctor.allDoctors,
        doctorScheduleTimes: state.admin.doctorScheduleTimes,
        userInfo: state.user.userInfo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctors: () => dispatch(actions.getAllDoctors()),
        saveDetailDoctorRedux: (data) => dispatch(actions.saveDetailDoctor(data)),
        getAllScheduleTime: () => dispatch(actions.getAllScheduleTime())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);