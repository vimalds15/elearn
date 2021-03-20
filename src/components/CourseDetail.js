import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../css/coursescreen.css'

const CourseDetail = () => {
    const [state, setstate] = useState([])
    
    async function dat() {
        const { data } = await axios.get(`/api/courselist/${2}/`)
        setstate(data)
        console.log(data)
    }

    useEffect(() => {
        dat()
        console.log(state)
    },[])


    return (
        
        <div> 
                <div className='course-det-cont'>
                    <div className='course-det-head'>
                        <h3>{state.title}</h3>
                        <hr />
                    </div>
                    <div className='course-det-video'>
                        <video  src={state.video} controls ></video>
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
