import React from 'react'
import '../css/coursenew.css'

const CourseNew = () => {
    return (
        <div className='upload-cont'>
            <div className='upload-wrapper'>
                <div className='upload-title'>
                    <h3>Upload a New Course</h3>
                </div>
                <div className='upload-content'>
                    <form>
                        <div>
                            <label for="title">Title:</label>
                            <input type="text" name="title" placeholder="Enter the title of the course" />                        
                        </div>
                        <div>
                            <label for='description'>Description:</label>
                            <textarea name="description" placeholder="Enter the description of the course" />
                        </div>
                        <div>
                            <label for="features">Features:</label>
                            <input type="text" name="features" placeholder="Mention the salient features of the course" />
                        </div>
                        <div>
                            <label  for="thumbnail">Thumbnail:</label>
                            <input className='upload-xcpt' name='thumbnail' type="file" accept='.jpeg, .jpg, .png'></input>
                        </div>
                        <div>
                            <label  for="video">Video:</label>
                            <input className='upload-xcpt' name='video' type="file" accept='.mp4, .avi'></input>
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

export default CourseNew
