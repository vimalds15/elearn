import {
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL,
    COURSE_LIST_REQUEST,

    COURSE_DETAIL_SUCCESS,
    COURSE_DETAIL_FAIL,
    COURSE_DETAIL_REQUEST,
} from '../constants/CourseConstants'

import axios from 'axios'

export const listCourses = () => async (dispatch) => {
    try {
        dispatch({ type: COURSE_LIST_REQUEST })
        
        const { data } = await axios.get('/api/courselist/')
        
        dispatch({type:COURSE_LIST_SUCCESS,payload: data})
    } catch (error) {
        dispatch({
            type: COURSE_LIST_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message
                :error.message,
        })
    }
}

export const detailCourses = (id) => async (dispatch) => {
    try {
        dispatch({type: })
    }
} 