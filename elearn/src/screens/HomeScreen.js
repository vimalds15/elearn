import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import CoursesList from '../components/CoursesList'
import { listCourses } from '../redux/actions/CourseActions'
import styled from 'styled-components'
import CourseNewIcon from '../components/CourseNewIcon'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const courseList = useSelector(state => state.courseList)
    const {error,loading,courses} = courseList


    useEffect(() => {
        dispatch(listCourses())
    }, [])
    
    return (
        <Container>
            <CourseWrapper>
            <Heading>
                <div className='course-title-cont'>
                    <h1>Courses</h1>
                    <hr />    
                </div>
            </Heading>
            <CourseCont>
            {courses?.map(course =>
                <CoursesList data={course} />
                    )
                    }
            </CourseCont>
            </CourseWrapper>
            <CourseNewIcon />
        </Container>
    )
}

export default HomeScreen

const Container = styled.div`
    background-color:#171717;
    min-height:80vh;
    
`
const CourseWrapper = styled.div`
    @media(min-width:1200px){
        margin-left:15%;
        margin-right:15%;
    }
`

const Heading = styled.div`
    display:flex;
    flex-direction:column;
    
    h1{
    color:#dfdfdf;
    font-weight:bold;
    margin-left:39px;
    margin-top:20px;
    
    
    }

    hr{
        margin-top:-10px;
        align-self:center;
        background-color:gray;
        
    }

    .course-title-cont{
        align-self:center;
        width:80%;
    }

 `  
    
 const CourseCont = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 flex-wrap:wrap;

`
