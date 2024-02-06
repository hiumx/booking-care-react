import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalUser.scss'

function ModalUser({ showModal, toggleShowModal, createNewUser }) {

    const [state, setState] = useState({})
    const closeBtn = (
        <button className='close-btn' onClick={toggleShowModal}>X</button>
    )

    const checkValidateInput = () => {
        let isValidate = true;
        const arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phoneNumber']
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

    const handleClickCreateBtn = () => {
        const isValidate = checkValidateInput();
        if (isValidate) {
            createNewUser(state)
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
                Create a new user
            </ModalHeader>
            <ModalBody>
                <div className='mb-3'>
                    <form className="row g-3" action="/store/create-new-user" method="POST">
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" value={state.email} placeholder="Email" id="email" name="email" onChange={e => handleChangeInput(e, 'email')} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" value={state.password} placeholder="Password" id="password" name="password" onChange={e => handleChangeInput(e, 'password')} />
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
                            <select id="gender" name="gender" className="form-select" value={state.gender} onChange={e => handleChangeInput(e, 'gender')}>
                                <option value="1">Male</option>
                                <option value="0">Female</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="roleId" className="form-label">Role</label>
                            <select id="roleId" name="roleId" className="form-select" value={state.roleId} onChange={e => handleChangeInput(e, 'roleId')}>
                                <option value="R1">Admin</option>
                                <option value="R2">Doctor</option>
                                <option value="R3">Patient</option>
                            </select>
                        </div>
                    </form>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" className='px-3' onClick={handleClickCreateBtn}>
                    Create
                </Button>{' '}
                <Button color="secondary" className='px-3 btn btn-danger' onClick={toggleShowModal}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalUser;