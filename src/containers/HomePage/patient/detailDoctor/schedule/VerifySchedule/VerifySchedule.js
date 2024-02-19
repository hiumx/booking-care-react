import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import './VerifySchedule.scss';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from 'query-string';
import { verifySchedule } from '../../../../../../services/patientService';

function VerifySchedule() {
    const [status, setStatus] = useState({});

    const { search } = useLocation();

    const { token, doctorId } = queryString.parse(search);

    console.log(token, doctorId);
    useEffect(() => {
        const fetchVerifySchedule = async () => {
            const res = await verifySchedule({ token, doctorId: +doctorId });
            if (res) {
                setStatus({
                    code: res.code,
                    message: res.message
                });
            }
        }
        fetchVerifySchedule();
    }, []);

    return (
        <div className='verify__schedule__wrapper'>
            <h5>Verifying medical appointment</h5>
            {!status.message &&
                <div className='verify__schedule__loading'>
                    <ReactLoading type='spin' color='#33b0e3' height={28} width={28} />
                </div>
            }
            {status.message &&
                <p className={status.code === 0 ? 'verify__success__message' : 'verify__failed__message'}>{status.message}</p>
            }
        </div>
    )
}

export default VerifySchedule;