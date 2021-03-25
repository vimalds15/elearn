import React, {  useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import '../css/coursescreen.css'
import { detailCourses } from '../actions/CourseActions'

const CourseDetail = ({match}) => {
    const dispatch = useDispatch()
    const courseDetail = useSelector(state => state.courseDetail)
    const {loading,error,course} = courseDetail

    useEffect(() => {
        
        dispatch(detailCourses(match.params.id))
       
    },[dispatch,match])


    return (
        
        <div> 
                <div className='course-det-cont'>
                    <div className='course-det-head'>
                        <h3>{course.title}</h3>
                        <hr />
                    </div>
                    <div className='course-det-video'>
                        <video  src={course.video} controls ></video>
                    </div>
                    <div className='course-det-description'>
                        <h4>Course Description</h4>
                        <hr />
                        <p>This course video covers entire C++ concepts including data types, Object Oriented Programming, and full aspects of C++. This is taught by FreeCodeCamp.org</p>
                    </div>
                    <div className='course-det-features'>
                        <h4>Course Features</h4>
                        <hr />
                        <ul>
                            <li>C++ Language.</li>
                            <li>Absolutely Complete Course.</li>
                            <li>Perfect for beginners.</li>
                        </ul>
                    </div>
                    <div className='course-det-rating'>
                        <h4>Rating</h4>
                        <hr />
                        <label for='rating'>Give Your Rating:</label>
                        <select name='rating'>
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="1" >Poor</option>
                            <option value="2" >Not Bad</option>
                            <option value="3" >Average</option>
                            <option value="4" >Good</option>
                            <option value="5" >Excellent</option>
                        </select>
                    </div>
                </div >
            )
        </div>
    )
}

export default CourseDetail
