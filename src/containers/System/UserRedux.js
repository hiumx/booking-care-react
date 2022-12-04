/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../utils/constant'
import * as actions from '../../store/actions'
import './ModalUser.scss'

function UserRedux({ getGenderStartRedux, getPositionStartRedux, getRoleStartRedux, language, gender, position, role }) {
    const [arrGender, setArrGender] = useState([])
    const [arrPosition, setArrPosition] = useState([])
    const [arrRole, setArrRole] = useState([])

    useEffect(() => {
        getGenderStartRedux()
        getPositionStartRedux()
        getRoleStartRedux()
    }, [])

    useEffect(() => {
        setArrGender(gender)
        setArrPosition(position)
        setArrRole(role)
    }, [gender, position, role])


    return (
        <div className='wrapper-user-redux container'>
            <div className="text-center title" ><FormattedMessage id="manage-user.title" /></div>
            <div className='form-create-user row mt-3'>
                <div className='col col-12'>
                    <h3><FormattedMessage id="manage-user.add" /></h3>
                    <form>
                        <div className="row">
                            <div className="email-user-redux form-group col-md-6">
                                <label htmlFor="email"><FormattedMessage id="manage-user.email" /></label>
                                <input type="email" className=" form-control" id="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="password"><FormattedMessage id="manage-user.password" /></label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder={LANGUAGES.VI === language ? "Mật khẩu" : "Password"}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="form-group col-md-6">
                                <label htmlFor="firstName"><FormattedMessage id="manage-user.first-name" /></label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="firstName"
                                    placeholder={LANGUAGES.VI === language ? "Tên" : "First Name"}
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4"><FormattedMessage id="manage-user.last-name" /></label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder={LANGUAGES.VI === language ? "Họ và tên đệm" : "Last Name"}
                                />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className="form-group col-md-6">
                                <label htmlFor="address"><FormattedMessage id="manage-user.address" /></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder={LANGUAGES.VI === language ? "Địa chỉ" : "Address"}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="phoneNumber"><FormattedMessage id="manage-user.phone-number" /></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phoneNumber"
                                    placeholder={LANGUAGES.VI === language ? "Số điện thoại" : "Phone Number"}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">

                            <div className="form-group col-md-3">
                                <label htmlFor="image"><FormattedMessage id="manage-user.image" /></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="image"
                                    placeholder={LANGUAGES.VI === language ? "Ảnh đại diện" : "Avatar"}
                                />
                            </div>
                            <div className="gender-user-redux form-group col-md-3">
                                <label htmlFor="gender"><FormattedMessage id="manage-user.gender" /></label>
                                <select id="gender" className="form-control">
                                    {arrGender && arrGender.length > 0 &&
                                        arrGender.map((item, index) => (
                                            <option key={index}>{LANGUAGES.VI === language ? item.valueVi : item.valueEn}</option>
                                        ))}
                                </select>
                            </div>
                            <div className="position-user-redux form-group col-md-3">
                                <label htmlFor="position"><FormattedMessage id="manage-user.position" /></label>
                                <select id="position" className="form-control">
                                    {arrPosition && arrPosition.length > 0 &&
                                        arrPosition.map((item, index) => (
                                            <option key={index}>{LANGUAGES.VI === language ? item.valueVi : item.valueEn}</option>
                                        ))}
                                </select>
                            </div>
                            <div className="roleId-user-redux form-group col-md-3">
                                <label htmlFor="roleId"><FormattedMessage id="manage-user.role-id" /></label>
                                <select id="roleId" className="form-control">
                                    {arrRole && arrRole.length > 0 &&
                                        arrRole.map((item, index) => (
                                            <option key={index}>{LANGUAGES.VI === language ? item.valueVi : item.valueEn}</option>
                                        ))}
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3 px-2"><FormattedMessage id="manage-user.btn-save" /></button>
                    </form>
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        gender: state.admin.gender,
        position: state.admin.position,
        role: state.admin.role
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStartRedux: () => dispatch(actions.getGenderStart()),
        getPositionStartRedux: () => dispatch(actions.getPositionStart()),
        getRoleStartRedux: () => dispatch(actions.getRoleStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
