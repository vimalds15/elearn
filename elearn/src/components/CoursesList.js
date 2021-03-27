import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'


import Rating from './Rating';

const CoursesList = ({ data }) => {

    return (
            
            

                
            <Course>
                <Link to={`/course/${data._id}`} >    
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

  
    )
}

export default CoursesList









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
    padding:7px 7px 0px 7px;
   
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
