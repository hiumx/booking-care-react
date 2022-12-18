/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './UserRedux.scss'

import { LANGUAGES } from '../../utils/constant'
import * as actions from '../../store/actions'
import TableManageUser from './TableManageUser';
import { CRUD_USER, CommonUtils } from '../../utils'

function UserRedux({
    getGenderStartRedux,
    getPositionStartRedux,
    getRoleStartRedux,
    createNewUser,
    editUserStart,
    language,
    genders,
    positions,
    roles,
    users,
    topDoctors
}) {
    const [arrGender, setArrGender] = useState([])
    const [arrPosition, setArrPosition] = useState([])
    const [arrRole, setArrRole] = useState([])
    const [previewImageUrl, setPreviewImageUrl] = useState('')
    const [isOpenPreviewImage, setIsOpenPreviewImage] = useState(false)
    const [action, setAction] = useState('CREATE')
    const [inputStates, setInputStates] = useState({
        id: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        gender: 'M',
        positionId: 'P0',
        roleId: 'R1',
        avatar: '',
    })
    // console.log(topDoctors);

    const { email, password, firstName, lastName, address, phoneNumber, gender, positionId, roleId, avatar } = inputStates
    useEffect(() => {
        getGenderStartRedux()
        getPositionStartRedux()
        getRoleStartRedux()
    }, [])

    useEffect(() => {
        setArrGender(genders)
        setArrPosition(positions)
        setArrRole(roles)
    }, [genders, positions, roles])

    useEffect(() => {
        setInputStates({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: 'M',
            roleId: 'R1',
            positionId: 'P0',
        })
        setPreviewImageUrl('')
    }, [users])

    const handleChangeUploadImage = async (e) => {
        const copyState = { ...inputStates }
        const file = e.target.files[0]
        const base64 = await CommonUtils.getBase64(file);
        copyState.avatar = base64;
        const objectUrl = URL.createObjectURL(file)
        setInputStates(copyState)
        setPreviewImageUrl(objectUrl)
    }

    const handleClickPreviewImage = () => {
        if (!previewImageUrl) return
        setIsOpenPreviewImage(true)
    }

    const handleChangeInput = (e, id) => {
        const copyState = { ...inputStates }
        copyState[id] = e.target.value
        setInputStates(copyState)
    }

    const handleValidateInput = () => {
        let isValidate = true
        const arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phoneNumber']
        for (let i = 0; i < arrInput.length; i++) {
            if (!inputStates[arrInput[i]]) {
                isValidate = false
                alert('Missing parameter: ' + arrInput[i])
                break;
            }
        }
        return isValidate;
    }


    const handleSaveUser = () => {
        const isValidate = handleValidateInput()
        if (!isValidate) return
        if (CRUD_USER.CREATE === action) {
            createNewUser({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                address: address,
                phoneNumber: phoneNumber,
                gender: gender,
                roleId: roleId,
                positionId: positionId,
                image: avatar ? avatar : '',
            })
        }

        if (CRUD_USER.UPDATE === action) {
            editUserStart({
                id: inputStates.id,
                firstName: firstName,
                lastName: lastName,
                address: address,
                phoneNumber: phoneNumber,
                gender: gender,
                roleId: roleId,
                positionId: positionId,
                image: avatar,
            })
            setAction('CREATE')
        }


    }

    const getUserFromParent = (user) => {
        setAction('UPDATE');
        let imageBase64;
        if (user.image) {
            imageBase64 = new Buffer(user.image, 'base64').toString('binary');
        }
        setPreviewImageUrl(imageBase64)
        console.log(user);
        setInputStates({
            id: user.id,
            email: user.email,
            password: 'hard code',
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
            roleId: user.roleId,
            positionId: user.positionId,
            avatar: '',
        })
    }

    const handleClickCreateNewUser = () => {
        setAction('CREATE')
        setInputStates({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: 'M',
            roleId: 'R1',
            positionId: 'P0',
        })
        setPreviewImageUrl('')
    }

    return (
        <div className='wrapper-user-redux container'>
            <div className="text-center title" ><FormattedMessage id="manage-user.title" /></div>
            <div className='form-create-user row mt-3'>
                <div className='col col-12'>
                    <div className='sub-title'>
                        <h3><FormattedMessage id={CRUD_USER.UPDATE === action ? "manage-user.update-title" : "manage-user.add-title"} /></h3>
                        {CRUD_USER.UPDATE === action ? <p className='sub-title-create-user' onClick={handleClickCreateNewUser}>Create a new user</p> : ''}
                    </div>

                    <form>
                        <div className="row">
                            <div className="email-user-redux form-group col-md-6">
                                <label htmlFor="email"><FormattedMessage id="manage-user.email" /></label>
                                <input
                                    type="email"
                                    className=" form-control"
                                    value={email} id="email"
                                    placeholder="Email"
                                    onChange={(e) => handleChangeInput(e, 'email')}
                                    disabled={CRUD_USER.UPDATE === action ? true : false}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="password"><FormattedMessage id="manage-user.password" /></label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => handleChangeInput(e, 'password')}
                                    placeholder={LANGUAGES.VI === language ? "Mật khẩu" : "Password"}
                                    disabled={CRUD_USER.UPDATE === action ? true : false}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="form-group col-md-6">
                                <label htmlFor="firstName"><FormattedMessage id="manage-user.first-name" /></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => handleChangeInput(e, 'firstName')}
                                    placeholder={LANGUAGES.VI === language ? "Tên" : "First Name"}
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4"><FormattedMessage id="manage-user.last-name" /></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    value={lastName}
                                    onChange={(e) => handleChangeInput(e, 'lastName')}
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
                                    value={address}
                                    onChange={(e) => handleChangeInput(e, 'address')}
                                    placeholder={LANGUAGES.VI === language ? "Địa chỉ" : "Address"}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="phoneNumber"><FormattedMessage id="manage-user.phone-number" /></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => handleChangeInput(e, 'phoneNumber')}
                                    placeholder={LANGUAGES.VI === language ? "Số điện thoại" : "Phone Number"}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="gender-user-redux form-group col-md-3">
                                <label htmlFor="gender"><FormattedMessage id="manage-user.gender" /></label>
                                <select id="gender" className="form-control" value={gender} onChange={(e) => handleChangeInput(e, 'gender')}>
                                    {arrGender && arrGender.length > 0 &&
                                        arrGender.map((item, index) => (
                                            <option key={index} value={item.keyMap}>{LANGUAGES.VI === language ? item.valueVi : item.valueEn}</option>
                                        ))}
                                </select>
                            </div>
                            <div className="position-user-redux form-group col-md-3">
                                <label htmlFor="position"><FormattedMessage id="manage-user.position" /></label>
                                <select id="position" className="form-control" value={positionId} onChange={(e) => handleChangeInput(e, 'positionId')}>
                                    {arrPosition && arrPosition.length > 0 &&
                                        arrPosition.map((item, index) => (
                                            <option key={index} value={item.keyMap}>{LANGUAGES.VI === language ? item.valueVi : item.valueEn}</option>
                                        ))}
                                </select>
                            </div>
                            <div className="roleId-user-redux form-group col-md-3">
                                <label htmlFor="roleId"><FormattedMessage id="manage-user.role-id" /></label>
                                <select id="roleId" className="form-control" value={roleId} onChange={(e) => handleChangeInput(e, 'roleId')}>
                                    {arrRole && arrRole.length > 0 &&
                                        arrRole.map((item, index) => (
                                            <option key={index} value={item.keyMap}>{LANGUAGES.VI === language ? item.valueVi : item.valueEn}</option>
                                        ))}
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="image"><FormattedMessage id="manage-user.image" /></label>
                                <div className='preview-img-container'>
                                    <label htmlFor='preview-img-upload' className='preview-img-upload-label'>
                                        <span>{LANGUAGES.VI === language ? "Tải ảnh" : "Upload photo"}</span>
                                        <div className='upload-img-icon-wrapper'>
                                            <svg className='upload-img-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
                                            </svg>
                                        </div>
                                    </label>
                                    <div className='preview-img-upload-desc'>
                                        <span className='text-preview-img'>
                                            {LANGUAGES.VI === language
                                                ? "Bạn có thể xem trước ảnh ở phía bên dưới"
                                                : "You can preview the image below"
                                            }
                                        </span>
                                        <svg className='preview-img-arrow-down-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                        </svg>
                                    </div>
                                </div>

                                <input
                                    type="file"
                                    className="upload-img-input form-control"
                                    id="preview-img-upload"
                                    hidden
                                    onChange={(e) => handleChangeUploadImage(e)}
                                />
                                <div
                                    className='preview-img-view'
                                    style={{ backgroundImage: `url(${previewImageUrl})` }}
                                    onClick={handleClickPreviewImage}
                                >
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary mt-3 px-2"
                            onClick={handleSaveUser}
                        >
                            <FormattedMessage id={CRUD_USER.UPDATE === action ? "manage-user.btn-edit" : "manage-user.btn-save"} />
                        </button>
                    </form>
                </div>
            </div>
            {isOpenPreviewImage && (
                <Lightbox
                    mainSrc={previewImageUrl}
                    onCloseRequest={() => setIsOpenPreviewImage(false)}
                />
            )}
            <TableManageUser getUserFromParent={getUserFromParent} />
        </div>

    );
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genders: state.admin.genders,
        positions: state.admin.positions,
        roles: state.admin.roles,
        users: state.admin.users,
        // topDoctors: state.admin.topDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStartRedux: () => dispatch(actions.getGenderStart()),
        getPositionStartRedux: () => dispatch(actions.getPositionStart()),
        getRoleStartRedux: () => dispatch(actions.getRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        editUserStart: (data) => dispatch(actions.editUserStart(data)),
        // fetchTopDoctorsHome: () => dispatch(actions.fetchTopDoctorsHomeStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
