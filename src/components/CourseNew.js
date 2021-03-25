import React, { useState, } from 'react'
import {withRouter} from 'react-router'
import axios from 'axios'
import '../css/coursenew.css'

const CourseNew = ({history}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [features, setFeatures] = useState('')
    const [image, setImage] = useState()
    const [video,setVideo] = useState()
    const [courseby, setCourseby] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const user=1

        
        let form_data = new FormData();
        form_data.append('user', user)
        form_data.append('thumbnail', image)
        form_data.append('title', title)
        form_data.append('video', video)
        form_data.append('description', description)
        form_data.append('features', features)
        form_data.append('courseby',courseby)
        
        
        axios.post('/api/course/', form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(() =>{
                
                history.push('/')
            }
        )
            .catch(err => console.log(err))
    }

        
        
    return (
        <div className='upload-cont'>
            <div className='upload-wrapper'>
                <div className='upload-title'>
                    <h3>Upload a New Course</h3>
                </div>
                <div className='upload-content'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label for="title">Title:</label>
                            <input type="text" name="title" placeholder="Enter the title of the course" onChange={(e) => setTitle(e.target.value)} required/>
                        </div>
                        <div>
                            <label for="title">Course By:</label>
                            <input type="text" name="title" placeholder="Enter the name you want display on the course" onChange={(e) => setCourseby(e.target.value)} required/>
                        </div>
                        <div>
                            <label for='description'>Description:</label>
                            <textarea name="description" placeholder="Enter the description of the course" onChange={(e) => setDescription(e.target.value)} required/>
                        </div>
                        <div>
                            <label for="features">Features:</label>
                            <input type="text" name="features" placeholder="Mention the salient features of the course" onChange={(e) => setFeatures(e.target.value)} required/>
                        </div>
                        <div>
                            <label  for="thumbnail">Thumbnail:</label>
                            <input className='upload-xcpt' name='thumbnail' type="file" accept='.jpeg, .jpg, .png' onChange={(e) => setImage(e.target.files[0])} required />
                        </div>
                        <div>
                            <label  for="video">Video:</label>
                            <input className='upload-xcpt' name='thumbnail' type="file" accept='.mp4' onChange={(e) => setVideo(e.target.files[0])} required />
                        </div>
                        <div>
                            <input className='upload-submit' type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CourseNew)
