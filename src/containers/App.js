import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';

import { history } from '../redux'
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { path } from '../utils'
import { CustomToastCloseButton } from '../components/CustomToast';
import CustomScrollbars from '../components/CustomScrollbars';
import DetailDoctor from './HomePage/patient/detailDoctor';

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

import './App.scss';
import AppDownload from './HomePage/site/AppDownload/AppDownload';
import HelpPage from './HomePage/patient/HelpPage/HelpPage';
import GoToTop from './HomePage/components/Section/GoToTop/GoToTop';
import Appointment from './HomePage/patient/Appointment/Appointment';
import HealthEnterPrise from './HomePage/patient/HealthEnterPrise/HealthEnterPrise';

console.warn = () => { }

function App() {

    return (
        <>
            <Router history={history}>
                <div className="main-container">
                    <span className="content-container" style={{ overflow: 'auto', height: 'inherit' }}>
                        {/* <CustomScrollbars style={{ width: '100%', height: '100vh' }}> */}
                        <GoToTop />
                        <Switch>
                            <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                            <Route path={path.HOMEPAGE} exact component={(HomePage)} />
                            <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                            <Route path={path.DOCTOR} exact component={DoctorOutstanding} />
                            <Route path={path.DETAIL_DOCTOR} component={DetailDoctor} />
                            <Route path={path.BOOKING_SCHEDULE} component={BookingSchedule} />
                            <Route path={path.VERIFY_SCHEDULE} component={VerifySchedule} />
                            <Route path={path.SPECIALTY} exact component={Specialties} />
                            <Route path={path.DETAIL_SPECIALTY} component={SpecialtyDetail} />
                            <Route path={path.COOPERATE} component={Cooperate} />
                            <Route path={path.APP} component={AppDownload} />
                            <Route path={path.HELP} component={HelpPage} />
                            <Route path={path.APPOINTMENT} component={Appointment} />
                            <Route path={path.HEALTH_ENTERPRISE} component={HealthEnterPrise} />
                        </Switch>
                        {/* </CustomScrollbars> */}

                    </span>
                    
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
        </>
    )
}

export default App;