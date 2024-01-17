import { useEffect, useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';

import './DoctorSchedule.scss';
import { getAllCode } from '../../../services/userService';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { FormattedMessage } from 'react-intl';
import { createDoctorSchedule } from '../../../services/doctorService';
import { toast } from 'react-toastify';

function DoctorSchedule({ getAllDoctors, listDoctors, getAllScheduleTime, doctorScheduleTimes, language }) {

    const [date, setDate] = useState(new Date());
    const [doctor, setDoctor] = useState(null);
    const [listTimes, setListTimes] = useState([]);
    const [listTimesActive, setListTimeActive] = useState([]);
    const options = listDoctors.map(doctor => (
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
        getAllDoctors();
    }, []);

    const handleClickItemTimeExamines = (timeId, keyMap) => {
        
        const isExit = listTimesActive.some(time => time.timeId === timeId);
        if(!isExit) {
            setListTimeActive([...listTimesActive, {timeId, keyMap}]);
        } else {
            const restList = listTimesActive.filter(time => time.timeId !== timeId);
            setListTimeActive(restList);
        }
    }
    
    const handleClickCreateSchedule = async () => {
        if(doctor === null || doctor.value === null) {
            toast.error('Please choose doctor!');
        } else if(listTimesActive.length === 0) {
            toast.error('Please choose least one period!')
        } else{
            const res = await createDoctorSchedule({
                doctorId: doctor.value,
                date,
                listTimeSelected: listTimesActive
            });
            if(res && res.errorCode === 0) {
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
                    <div className='col-lg-6 mb-3'>
                        <label htmlFor="doctor-name" className="form-label">
                            <FormattedMessage id="schedule-examines.select-doctor" />
                        </label>
                        <Select
                            defaultValue={doctor}
                            onChange={setDoctor}
                            options={options}
                        />
                    </div>
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
                                    className={listTimesActive.some(item => item.timeId === time.id) ? 'time-examines-item active' : 'time-examines-item'}
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
        doctorScheduleTimes: state.admin.doctorScheduleTimes
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