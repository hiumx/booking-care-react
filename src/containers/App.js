import React, { Component, Fragment } from 'react';
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

console.warn = () => { }
class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container" onScroll={e => console.log(e)}>
                        <span className="content-container">
                            <CustomScrollbars style={{ width: '100%', height: '100vh' }}>
                                <Switch>
                                    <Route path={path.HOME} exact component={(Home)} />
                                    <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                    <Route path={path.HOMEPAGE} component={(HomePage)} />
                                    <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                    <Route path={path.DOCTOR} exact component={DoctorOutstanding} />
                                    <Route path={path.DETAIL_DOCTOR} component={DetailDoctor} />
                                    <Route path={path.BOOKING_SCHEDULE} component={BookingSchedule} />
                                    <Route path={path.VERIFY_SCHEDULE} component={verifySchedule} />
                                    <Route path={path.SPECIALTY} exact component={Specialties} />
                                    <Route path={path.DETAIL_SPECIALTY} component={SpecialtyDetail} />
                                    <Route path={path.COOPERATE} component={Cooperate} />
                                </Switch>
                            </CustomScrollbars>
                        </span>

                        {/* <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        /> */}
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
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);