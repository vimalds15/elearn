import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import styled from 'styled-components';
import { Link } from 'react-router-dom'


import Rating from './Rating';
import { listCourses } from '../actions/CourseActions';

const CoursesList = () => {
    
    const dispatch = useDispatch()
    const courseList = useSelector(state => state.courseList)
    const {error,loading,courses} = courseList

    useEffect(() => {
        dispatch(listCourses())
    },[])

    return (
        <Container>
            <Heading>
                <div className='course-title-cont'>
                    <h1>Courses</h1>
                    <hr />    
                </div>
                
            </Heading>
            <CourseCont>

                {courses.map(data => 
            <Course>
                <Link to={`course/${data.id}`} >    
                <Image>
                    <img src={data.thumbnail} alt='imag' />
                </Image>
                    <Title>
                        <p>{data.title}</p>
                    </Title>
                </Link>
                    <Description>
                            <p>Course by: {data.courseby}</p>
                            <div className='course-rating'>
                                <h6>Rating: </h6>
                                <div className='course-rat'>
                                    <Rating value={data.rating} />    
                                </div>
                                </div>    
                    </Description>
                </Course>
                )}

            </CourseCont>
        </Container>
    )
}

export default CoursesList

const Container = styled.div`
    
    @media(min-width:1200px){
        margin-left:15%;
        margin-right:15%;
    }
    
`

const Heading = styled.div`
    display:flex;
    flex-direction:column;
    
    h1{
    color:grey;
    font-weight:bold;
    margin-left:39px;
    margin-top:20px;
    
    
    }

    hr{
        margin-top:-10px;
        align-self:center;
        
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


const Image = styled.div`
height:180px;
width:100%;

img{
    cursor:pointer;
    height:180px;
    width:100%;
    object-fit:cover;
}
`

const Course = styled.div`
    
    height:30vh;
    width:350px;
    min-width:300px;
    margin:30px;
    background:white;
    padding-bottom:50px;
    box-shadow: -1px 5px 13px 2px rgba(0,0,0,0.81);
    -webkit-box-shadow: -1px 5px 13px 2px rgba(0,0,0,0.81);
    -moz-box-shadow: -1px 5px 13px 2px rgba(0,0,0,0.81);

    :hover{
        transition:all .5s;
        transform:translateY(10px);
    }

    @media(min-width:1110px){
        
    height:30vh;
    width:350px;
    min-width:300px;
    box-shadow: -1px 5px 13px 2px rgba(0,0,0,0.81);
    -webkit-box-shadow: -1px 5px 13px 2px rgba(0,0,0,0.81);
    -moz-box-shadow: -1px 5px 13px 2px rgba(0,0,0,0.81);
    }
`
const Title = styled.div`
    cursor:pointer;
    height:25px;
    background:white;
    margin-top:2px;
    text-decoration:underline;

    p{
        font-size:15px;
        font-variant:normal;
        color:black;
        margin-left:2%;
        font-weight:800;
    }
`

const Description = styled.div`
    
    background:#f1f1f1;
    padding:7px 7px 30px 7px;
   
    overflow:hidden;

    i{
        color:rgb(251,225,0);
    }

    .course-rating{
        display:flex;
        align-items:center;

        h6{
            margin-top:8px;
        }

        .course-rat{
            margin-left:5px;
            margin-bottom:2.px;
        }
    }
`

// const Share = styled.div`
//     display:flex;
//     justify-content:space-between;
//     height:10px;
//     background:;
//     margin:0px 0px;
    
// `
// const LeftCont = styled.div`
//     span{
//         cursor:pointer;
//         margin-left:28px;
//     }
// `

// const RightCont = styled.div`
//     span{
//         cursor:pointer;
//         margin-right:8px;
//     }
// `

