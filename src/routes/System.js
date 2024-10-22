import React from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import UserRedux from '../containers/System/UserRedux';
import Header from '../containers/Header/Header';
import ManageDoctor from '../containers/System/ManageDoctor';
import DoctorSchedule from '../containers/System/DoctorSchedule/DoctorSchedule';
import ManageSpecialty from '../containers/System/ManageSpecialty/ManageSpecialty';
import DoctorAppointment from '../containers/System/DoctorAppointment/DoctorAppointment';

function System({ systemMenuPath, isLoggedIn }) {
    return (
        <React.Fragment>
            {isLoggedIn && <Header />}
            <div className="system-container">
                <div className="system-list">
                    <Switch>
                        <Route path="/system/user-manage" component={UserManage} />
                        <Route path="/system/manage-doctor" component={ManageDoctor} />
                        <Route path="/system/user-redux" component={UserRedux} />
                        <Route path="/system/doctor-schedule" component={DoctorSchedule} />
                        <Route path="/system/appointment-management" component={DoctorAppointment} />
                        <Route path="/system/manage-specialty" component={ManageSpecialty} />
                        <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                    </Switch>
                </div>
            </div>
        </React.Fragment>
    );
}


const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
