import { getAllSpecialties, getSpecialty } from "../../services/specialty.service";
import actionTypes from "./actionTypes";

export const fetchAllSpecialties = () => {
    return async (dispatch) => {
        try {
            const res = await getAllSpecialties();
            if(res?.code === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_SPECIALTY_SUCCESS,
                    payload: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_SPECIALTY_FAILURE
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.FETCH_ALL_SPECIALTY_FAILURE
            })
        }
    }
}

export const getSpecialtyById = (id) => {
    return async (dispatch) => {
        try {
            const res = await getSpecialty(id);
            if(res?.code === 0) {
                dispatch({
                    type: actionTypes.GET_SPECIALTY_BY_ID_SUCCESS,
                    payload: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.GET_SPECIALTY_BY_ID_FAILURE
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.GET_SPECIALTY_BY_ID_FAILURE
            })
        }
    }
}

