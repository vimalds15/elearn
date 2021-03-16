import React from 'react'
import '../css/coursescreen.css'

const CourseDetail = () => {
    return (
        <div className='course-det-cont'>
            <div className='course-det-head'>
                <h3>C++ in 4 hours</h3>
                <hr />
            </div>
            <div className='course-det-video'>
                <iframe title='video' src="https://www.youtube.com/embed/vLnPwxZdW4Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                <hr/>
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
        </div>
    )
}

export default CourseDetail
