import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllUsers, createNewUserService, EditUserService, deleteUser } from '../../services/userService'
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';

function UserManage() {
    const [arrUsers, setArrUsers] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [dataUser, setDataUser] = useState({})

    useEffect(() => {
        fetchData()
    }, [])

    const toggleShowModal = () => {
        setShowModal(!showModal)
    }

    const toggleShowEditModal = () => {
        setShowEditModal(!showEditModal)
    }

    const fetchData = async () => {
        const response = await getAllUsers('ALL');
        setArrUsers(response.users)
    }

    const createNewUser = async (data) => {
        try {
            const response = await createNewUserService(data)
            if (response && response.errorCode !== 0) {
                alert(response.message);
            } else {
                await fetchData()
                setShowModal(false)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleClickEditBtn = (user) => {

        setShowEditModal(true)
        setDataUser(user)

    }

    const updateUser = async (data) => {
        try {
            const response = await EditUserService(data);
            if (response && response.errorCode === 0) {
                await fetchData()
                setShowEditModal(false)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteBtn = async (userId) => {
        try {
            const response = await deleteUser(userId);
            if (response && response.errorCode !== 0) {
                alert(response.message)
            } else {
                await fetchData()
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className='users-container'>
            <h3 className="title-users text-center mt-3">Manage users</h3>
            <button type="button" className="btn btn-primary mx-3 px-3" onClick={toggleShowModal}>Create a new user</button>
            <ModalUser showModal={showModal} toggleShowModal={toggleShowModal} createNewUser={createNewUser} />
            {showEditModal && <ModalEditUser showModal={showEditModal} toggleShowModal={toggleShowEditModal} currentUser={dataUser} updateUser={updateUser} />}

            <table className="table table-hover mt-3 mx-3">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {arrUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>
                                <button type="button" className="btn btn-info px-2 mx-1" onClick={() => handleClickEditBtn(user)}>Edit</button>
                                <button type="button" className="btn btn-danger px-2 mx-1" onClick={() => handleDeleteBtn(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    );
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
