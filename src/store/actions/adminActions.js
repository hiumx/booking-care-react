import actionTypes from "./actionTypes";
import { getAllCode, createNewUserService, getAllUsers, EditUserService, deleteUser } from "../../services/userService";
import { toast } from 'react-toastify';
// get gender
export const getGenderStart = () => {
    return async (dispatch) => {
        try {
            const res = await getAllCode('gender');
            if (res && res.errorCode === 0) {
                dispatch(getGenderSuccess(res.data))
            } else {
                dispatch(getGenderFailed())
            }
        } catch (error) {
            dispatch(getGenderFailed())
            console.log(error);
        }
    }
}

export const getGenderSuccess = (dataGender) => ({
    type: actionTypes.GET_GENDER_SUCCESS,
    data: dataGender
})

export const getGenderFailed = () => ({
    type: actionTypes.GET_GENDER_FAILED
})

// get position
export const getPositionStart = () => {
    return async (dispatch) => {
        try {
            const res = await getAllCode('position')
            if (res && res.errorCode === 0) {
                dispatch(getPositionSuccess(res.data))
            } else {
                dispatch(getPositionFailed())
            }
        } catch (error) {
            dispatch(getPositionFailed())
            console.log(error);
        }
    }
}

export const getPositionSuccess = (dataPosition) => ({
    type: actionTypes.GET_POSITION_SUCCESS,
    data: dataPosition
})

export const getPositionFailed = () => ({
    type: actionTypes.GET_POSITION_FAILED
})

// roles

export const getRoleStart = () => {
    return async (dispatch) => {
        try {
            const res = await getAllCode('role');
            if (res && res.errorCode === 0) {
                dispatch(getRoleSuccess(res.data))
            } else {
                dispatch(getRoleFailed())
            }
        } catch (error) {
            dispatch(getRoleFailed())
            console.log(error);
        }
    }
}

export const getRoleSuccess = (dataRole) => ({
    type: actionTypes.GET_ROLE_SUCCESS,
    data: dataRole
})

export const getRoleFailed = () => ({
    type: actionTypes.GET_ROLE_FAILED
})

export const createNewUser = (data) => {
    return async (dispatch) => {
        try {
            const res = await createNewUserService(data)
            if (res && res.errorCode === 0) {
                toast.success("Create new user success ");
                dispatch(createUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error("Create new user failed !");
                dispatch(createUserFailed())
                alert(res.message)
            }
        } catch (error) {
            toast.error("Create new user failed !");
            dispatch(createUserFailed())
            console.log(error);
        }
    }
}

export const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})

export const createUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED,
})

export const editUserStart = (data) => {
    return async (dispatch) => {
        try {
            const res = await EditUserService(data)
            if (res && res.errorCode === 0) {
                toast.success('Update user success')
                dispatch(editUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error('Update user failed!')
                dispatch(editUseFailed())
            }
        } catch (error) {
            toast.error('Update user failed!')
            dispatch(editUseFailed())
            console.log(error);
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUseFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})

export const deleteUserStart = (userId) => {
    return async (dispatch) => {
        try {
            const res = await deleteUser(userId)
            if (res && res.errorCode === 0) {
                toast.success("Deleted user success ");
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error("Deleted user failed !");
                dispatch(deleteUserFailed())
            }
        } catch (error) {
            toast.error("Deleted user failed !");
            dispatch(deleteUserFailed())
            console.log(error);
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

export const fetchAllUsersStart = () => {
    return async (dispatch) => {
        try {
            const res = await getAllUsers('ALL');
            if (res && res.errorCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()))
            } else {
                toast.error("Get users failed");
                dispatch(fetchAllUsersFailed())
            }
        } catch (error) {
            toast.error("Get users failed");
            dispatch(fetchAllUsersFailed())
            console.log(error);
        }
    }
}

export const fetchAllUsersSuccess = (usersData) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    usersData
})

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED
})


