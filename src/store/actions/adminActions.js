import actionTypes from "./actionTypes";
import { getAllCode } from "../../services/userService";

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
            dispatch(getRoleFailed)
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