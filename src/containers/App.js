import React, { Component, Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';

import { history } from '../redux'
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { path } from '../utils'
import { CustomToastCloseButton } from '../components/CustomToast';
import CustomScrollbars from '../components/CustomScrollbars';
import DetailDoctor from './HomePage/patient/detailDoctor';

import Home from '../routes/Home';
import Login from './Auth/Login';
import System from '../routes/System';
import HomePage from './HomePage';
import BookingSchedule from './HomePage/patient/detailDoctor/BookingSchedule/BookingSchedule';
import { verifySchedule } from '../services/patientService';
import SpecialtyDetail from './HomePage/specialty/SpecialtyDetail/SpecialtyDetail';
import Cooperate from './HomePage/patient/medical/Cooperate';
import Specialties from './HomePage/specialty/Specialties/Specialties';
import DoctorOutstanding from './HomePage/doctor/DoctorOutstanding/DoctorOutstanding';
import VerifySchedule from './HomePage/patient/detailDoctor/schedule/VerifySchedule/VerifySchedule';
import ScrollToTop from './HomePage/components/Section/ScrollToTop/ScrollToTop';

import './App.scss';
import AppDownload from './HomePage/site/AppDownload/AppDownload';

console.warn = () => { }

function App({ persistor }) {

    const [isShowGoTopBtn, setIsShowGoTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPage);

        return () => {
            window.removeEventListener('scroll', handleScrollPage);
        }
    }, []);

    // useEffect(() => {
    //     handlePersistorState();
    // }, []);

    // const handlePersistorState = () => {
    //     let { bootstrapped } = persistor.getState();
    //     if (bootstrapped) {
    //         if (persistor.props.onBeforeLift) {
    //             Promise.resolve(persistor.props.onBeforeLift())
    //                 .then(() => persistor.setState({ bootstrapped: true }))
    //                 .catch(() => persistor.setState({ bootstrapped: true }));
    //         } else {
    //             persistor.setState({ bootstrapped: true });
    //         }
    //     }
    // };

    const handleScrollPage = (e) => {
        if (window.scrollY >= 100)
            setIsShowGoTopBtn(true);
        else
            setIsShowGoTopBtn(false);
    }


    const handleClickGoToTop = () => {
        window.scrollTo(0, 0);
    }


    return (
        <Fragment>
            <Router history={history}>
                <div className="main-container" onScroll={e => console.log(e)}>
                    <span className="content-container" style={{ overflow: 'auto', height: 'inherit' }}>
                        {/* <CustomScrollbars style={{ width: '100%', height: '100vh' }}> */}
                        <ScrollToTop />
                        <Switch>
                            <Route path={path.HOME} exact component={(Home)} />
                            <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                            <Route path={path.HOMEPAGE} component={(HomePage)} />
                            <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                            <Route path={path.DOCTOR} exact component={DoctorOutstanding} />
                            <Route path={path.DETAIL_DOCTOR} component={DetailDoctor} />
                            <Route path={path.BOOKING_SCHEDULE} component={BookingSchedule} />
                            <Route path={path.VERIFY_SCHEDULE} component={VerifySchedule} />
                            <Route path={path.SPECIALTY} exact component={Specialties} />
                            <Route path={path.DETAIL_SPECIALTY} component={SpecialtyDetail} />
                            <Route path={path.COOPERATE} component={Cooperate} />
                            <Route path={path.APP} component={AppDownload} />
                        </Switch>
                        {/* </CustomScrollbars> */}

                    </span>

                    {isShowGoTopBtn && <div className='go__to__top__btn__wrapper' onClick={handleClickGoToTop}>
                        <svg className='go__to__top__btn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192H96l0 288c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32l0-288h72c9.6 0 18.2-5.7 22-14.5z" />
                        </svg>
                    </div>}

                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            </Router>
        </Fragment>
    )
}

export default App;