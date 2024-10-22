
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import localization from 'moment/locale/vi';

import './DoctorScheduleHomePage.scss';
import { getDoctorSchedule, getTimeDetailById } from '../../../../../services/doctorService';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function DoctorSchedule() {

    const [listDate, setListDate] = useState([]);
    const [listTimes, setListTimes] = useState([]);
    const [date, setDate] = useState(new Date());
    const history = useHistory();
    const { id } = useParams();

    const language = useSelector(state => state.app.language);

    useEffect(() => {
        const arrDate = [];
        for (let i = 0; i < 7; i++) {
            const date = {};
            if (language === 'vi') {
                date.label = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
            } else if (language === 'en') {
                date.label = moment(new Date()).locale('en').add(i, 'days').format('dddd - MM/DD');
            }
            date.value = moment(new Date()).add(i, 'days').toDate();
            arrDate.push(date);
        }
        setListDate(arrDate);
    }, []);

    useEffect(() => {
        const fetchDoctorSchedule = async () => {
            const res = await getDoctorSchedule({
                doctorId: +id,
                date
            });

            if (res && res.code === 0) {
                const listTimeIds = res?.data?.map(time => time.timeTypeId);

                const response = await getTimeDetailById(listTimeIds);
                if (response && response.code === 0) {
                    const listTimeDetail = response.data.map(timeDetail => language === 'vi'
                        ? {
                            timeKey: timeDetail.keyMap,
                            timeValue: timeDetail.valueVi
                        }
                        : {
                            timeKey: timeDetail.keyMap,
                            timeValue: timeDetail.valueEn
                        });
                    setListTimes(listTimeDetail);
                }

            }
        }
        fetchDoctorSchedule();

    }, [date, id]);

    const handleChangeDate = (e) => {
        setDate(e.target.value);
    }

    const handleClinkSpecificTime = ({ doctorId, time, date }) => {
        history.push(`/booking-schedule?doctorId=${doctorId}&time=${time.timeValue}&timeType=${time.timeKey}&date=${date}`);
    }

    return (
        <div className='doctor-schedule-container'>
            <div className='schedule-date'>
                <select className='schedule-date-select' onChange={e => handleChangeDate(e)}>
                    {
                        listDate.map((date, index) =>
                            <option
                                className='schedule-date-option'
                                key={index}
                                value={date.value}
                            >
                                {date.label}
                            </option>
                        )
                    }
                </select>
            </div>
            <div className='schedule-title'>
                <svg className='schedule-title-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                </svg>
                <span>LỊCH KHÁM</span>
            </div>
            <ul className='schedule-specific-time-list'>
                {
                    listTimes && listTimes.length > 0
                        ?
                        listTimes.map((time, index) =>
                            <li className='schedule-specific-time-item' key={index}>
                                <div className='schedule-specific-item-link' onClick={() => handleClinkSpecificTime({
                                    doctorId: id, time, date
                                })}>
                                    <span>{time.timeValue}</span>
                                </div>
                            </li>
                        )
                        :
                        <p>There is no doctor's appointment scheduled for this day.</p>
                }

            </ul>
            <div className='schedule-subtitle'>
                {listTimes && listTimes.length > 0 &&
                    <span>Chọn
                        <svg className='schedule-subtitle-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M64 64V241.6c5.2-1 10.5-1.6 16-1.6H96V208 64c0-8.8-7.2-16-16-16s-16 7.2-16 16zM80 288c-17.7 0-32 14.3-32 32c0 0 0 0 0 0v24c0 66.3 53.7 120 120 120h48c52.5 0 97.1-33.7 113.4-80.7c-3.1 .5-6.2 .7-9.4 .7c-20 0-37.9-9.2-49.7-23.6c-9 4.9-19.4 7.6-30.3 7.6c-15.1 0-29-5.3-40-14c-11 8.8-24.9 14-40 14H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h40c8.8 0 16-7.2 16-16s-7.2-16-16-16H120 80zM0 320s0 0 0 0c0-18 6-34.6 16-48V64C16 28.7 44.7 0 80 0s64 28.7 64 64v82c5.1-1.3 10.5-2 16-2c25.3 0 47.2 14.7 57.6 36c7-2.6 14.5-4 22.4-4c20 0 37.9 9.2 49.7 23.6c9-4.9 19.4-7.6 30.3-7.6c35.3 0 64 28.7 64 64v64 24c0 92.8-75.2 168-168 168H168C75.2 512 0 436.8 0 344V320zm336-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v48 16c0 8.8 7.2 16 16 16s16-7.2 16-16V256zM160 240c5.5 0 10.9 .7 16 2v-2V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h16zm64 24v40c0 8.8 7.2 16 16 16s16-7.2 16-16V256 240c0-8.8-7.2-16-16-16s-16 7.2-16 16v24z" />
                        </svg>
                        và đặt (Phí đặt lịch 0đ)</span>
                }
            </div>
        </div>
    )
}
export default DoctorSchedule;