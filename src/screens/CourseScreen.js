import React from 'react'
import CourseDetail from '../components/CourseDetail'

const CourseScreen = ({ match }) => {
    return (
        <div>
            <CourseDetail match={match} />
        </div>
    )
}

export default CourseScreen
