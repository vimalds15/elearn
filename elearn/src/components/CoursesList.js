import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
                                <div className='course-rating-container '>
                                <h6>Rating: </h6>
                                <div className='course-rat'>
                                    <Rating value={data.rating} />    
                        </div>
                        </div>
                    <div className='enroll'>
                        <h6>Watch</h6>
                        <PlayArrowIcon />
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
    
    height:300px;
    width:350px;
    min-width:300px;
    margin:30px;
    background:#3c4040;
    padding-bottom:50px;
    box-shadow: -1px 5px 13px 2px rgba(0,0,0,0.81);
    -webkit-box-shadow: -1px 5px 13px 2px rgba(0,0,0,0.81);
    -moz-box-shadow: -1px 5px 13px 2px rgba(0,0,0,0.81);

    :hover{
        transition:all .5s;
        transform:translateY(10px);
    }

    @media(min-width:1112px){
        
    height:300px !important;
    max-width:350px;
    

    box-shadow: -1px 5px 13px 2px rgba(0,0,0,0.81);
    -webkit-box-shadow: -1px 5px 13px 2px rgba(0,0,0,0.81);
    -moz-box-shadow: -1px 5px 13px 2px rgba(0,0,0,0.81);
    }

    @media(max-width:500px){
        height:300px;
    }

    :hover{
        box-shadow: 0px 5px 20px 3px rgba(68,222,255,0.75);
        -webkit-box-shadow: 0px 0px 10px 4px rgba(239,239,239,0.81);
        -moz-box-shadow: 0px 0px 20px 3px rgba(68,222,255,0.75);
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
    position:relative;
    background:#3c4040;
    margin:5px;

    p{
        color:#dfdfdf;
        padding:5px 0 0 5px;
    }

    i{
        color:rgb(251,225,0);
    }

    .course-rating{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding-left:5px;
        h6{
            margin-top:8px;
            color:white;
            text-transform:capitalize;
        }
        .course-rating-container{
            
            display:flex;
            align-items:center;
        }

        .course-rat{
            margin-left:5px;
            margin-bottom:2px;
        }
        .enroll{
            cursor:pointer;
            padding:8px 2px 8px 10px;
            width:100px;
            position:absolute;
            bottom:-5px;
            right:10px;
            background:#171717;
            border-radius:10px;
            display:flex;
            align-items:center;
            justify-content:center;
            box-shadow: 0px 1px 5px 0px rgba(68,222,255,0.75);
-webkit-box-shadow: 0px 1px 5px 0px rgba(68,222,255,0.75);
-moz-box-shadow: 0px 1px 5px 0px rgba(68,222,255,0.75);

            :hover{
                transition:.5s;
                background-color:aqua;
                box-shadow: 0px 1px 5px 0px rgba(191,191,191,0.75);
-webkit-box-shadow: 0px 1px 15px 0px rgba(191,191,191,0.75);
-moz-box-shadow: 0px 1px 5px 0px rgba(191,191,191,0.75);

                h6,svg{
                    color:grey;
                }
            }

            h6{
                text-align:center;
                color:aqua;
                text-transform:capitalize;
            }
            
            svg{
                color:aqua;
            }
        }
    }
    
`
