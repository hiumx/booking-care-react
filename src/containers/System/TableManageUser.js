import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../utils/constant'
import * as actions from '../../store/actions'
import { useEffect, useState } from 'react';
import './TableManageUser.scss'

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt(/* Markdown-it options */);

function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}


function TableManageUser({ fetchAllUsersRedux, usersRedux, deleteUserRedux, getUserFromParent }) {
    const [arrUsers, setArrUsers] = useState([])

    useEffect(() => {

        fetchAllUsersRedux()
    }, [])

    useEffect(() => {
        setArrUsers(usersRedux)
    }, [usersRedux])

    const handleEditUser = (user) => {
        getUserFromParent(user)
    }

    const handleDeleteUser = (user) => {
        deleteUserRedux(user.id)
    }

    return (
        <div className='container'>
            <div>
                <h4 className='title'>List User</h4>
                <table className="table table-hover mt-3 mb-5">
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
                        {arrUsers.map((user, index) => (
                            <tr key={index}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-info px-2 mx-1"
                                        onClick={() => handleEditUser(user)}>Edit</button>
                                    <button
                                        type="button"
                                        className="btn btn-danger px-2 mx-1"
                                        onClick={() => handleDeleteUser(user)}>Delete</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        usersRedux: state.admin.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsersRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteUserRedux: (userId) => dispatch(actions.deleteUserStart(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);