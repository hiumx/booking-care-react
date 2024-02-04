import { getAllSpecialties } from "../../services/specialty.service";
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