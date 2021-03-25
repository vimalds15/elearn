import {
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL,
    COURSE_LIST_REQUEST,
    COURSE_DETAIL_REQUEST,
    COURSE_DETAIL_SUCCESS,
    COURSE_DETAIL_FAIL
} from '../constants/CourseConstants'


export const courseListReducers = (state = { courses: [] }, action) => {
    switch (action.type) {
        case COURSE_LIST_REQUEST:
            return { loading: true, courses: [] }
        
        case COURSE_LIST_SUCCESS:
            return { loading: false, courses: action.payload }
        
        case COURSE_LIST_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const courseDetailReducers = (state = { course: [] }, action) => {
    switch (action.type) {
        case COURSE_DETAIL_REQUEST:
            return { loading: true, ...state }
        
        case COURSE_DETAIL_SUCCESS:
            return { loading: false, course: action.payload }
        
        case COURSE_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}