import { useEffect, useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';

import './DoctorSchedule.scss';
import { getAllCode } from '../../../services/userService';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { FormattedMessage } from 'react-intl';

function DoctorSchedule({ getAllDoctors, listDoctors, getAllScheduleTime, doctorScheduleTimes, language }) {

    const [date, setDate] = useState(new Date());
    const [doctor, setDoctor] = useState(null);
    const [listTimes, setListTimes] = useState([]);
    const [listTimesActive, setListTimeActive] = useState([]);
    console.log(listTimesActive);

    console.log(listTimes);

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

    const handleClickItemTimeExamines = (timeId) => {
        if(!listTimesActive.includes(timeId)) {
            setListTimeActive([...listTimesActive, timeId]);
        } else {
            const restList = listTimesActive.filter(time => time != timeId);
            setListTimeActive(restList);
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
                                    onClick={() => handleClickItemTimeExamines(time.id)}
                                    className={listTimesActive.includes(time.id) ? 'time-examines-item active' : 'time-examines-item'}
                                    key={index}>{language === 'en' ? time.valueEn : time.valueVi}
                                </li>
                            )
                        }
                    </ul>
                </div>
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