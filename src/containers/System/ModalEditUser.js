import { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash'

function ModalEditUser({ showModal, toggleShowModal, currentUser, updateUser }) {
    const [state, setState] = useState({})
    const closeBtn = (
        <button className='close-btn' onClick={toggleShowModal}>X</button>
    )

    useEffect(() => {
        const user = currentUser;
        if (user && !_.isEmpty(user)) {
            setState(user)
        }
    }, [currentUser])



    const checkValidateInput = () => {
        let isValidate = true;
        const arrInput = ['email', 'firstName', 'lastName', 'address', 'phoneNumber']
        for (let i = 0; i < arrInput.length; i++) {
            if (!state[arrInput[i]]) {
                isValidate = false
                alert('Missing parameter ' + arrInput[i])
                break;
            }
        }
        return isValidate;
    }

    const handleChangeInput = (e, id) => {
        const copyState = { ...state }
        copyState[id] = e.target.value;
        setState(copyState)
    }

    const handleClickUpdateBtn = () => {
        const isValidate = checkValidateInput();
        if (isValidate) {
            updateUser(state)
        }
    }

    return (
        <Modal
            isOpen={showModal}
            toggle={toggleShowModal}
            className={'modal-user'}
            size="lg"
        >
            <ModalHeader toggle={toggleShowModal} close={closeBtn}>
                Update user
            </ModalHeader>
            <ModalBody>
                <div className='mb-3'>
                    <form className="row g-3" action="/store/create-new-user" method="POST">
                        <div className="col-md-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" value={state.email} placeholder="Email" id="email" name="email" onChange={e => handleChangeInput(e, 'email')} disabled />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" value={state.firstName} placeholder="First Name" id="firstName" name="firstName" onChange={e => handleChangeInput(e, 'firstName')} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" value={state.lastName} placeholder="Last Name" id="lastName" name="lastName" onChange={e => handleChangeInput(e, 'lastName')} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" value={state.address} placeholder="Address" id="address" name="address" onChange={e => handleChangeInput(e, 'address')} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" value={state.phoneNumber} placeholder="Phone Number" id="phoneNumber" name="phoneNumber" onChange={e => handleChangeInput(e, 'phoneNumber')} />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <select id="gender" name="gender" value={state.gender} className="form-select" onChange={e => handleChangeInput(e, 'gender')}>
                                <option value="1">Male</option>
                                <option value="0">Female</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="roleId" className="form-label">Role</label>
                            <select id="roleId" name="roleId" value={state.roleId} className="form-select" onChange={e => handleChangeInput(e, 'roleId')}>
                                <option value="1">Admin</option>
                                <option value="2">Doctor</option>
                                <option value="3">Patient</option>
                            </select>
                        </div>
                    </form>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" className='px-3' onClick={handleClickUpdateBtn}>
                    Update
                </Button>{' '}
                <Button color="secondary" className='px-3 btn btn-danger' onClick={toggleShowModal}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalEditUser;