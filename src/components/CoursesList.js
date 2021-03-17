import React from 'react'
import styled from 'styled-components';
import img from '../images/courses/img.jpg'
import img2 from '../images/courses/img2.jpg'
import img3 from '../images/courses/img3.jpg'
import img4 from '../images/courses/img4.jpg'
import img5 from '../images/courses/img5.jpg'
import img6 from '../images/courses/img6.jpg'
import img7 from '../images/courses/img7.jpg'
import img8 from '../images/courses/img8.jpg'
import img9 from '../images/courses/img9.jpg'
import img10 from '../images/courses/img10.jpg'
import img11 from '../images/courses/img11.jpg'
import img12 from '../images/courses/img12.jpg'

const CoursesList = () => {
    return (
        <Container>
            <Heading>
                <div className='course-title-cont'>
                    <h1>Courses</h1>
                    <hr />    
                </div>
                
            </Heading>
            <CourseCont>
            <Course>
            <Image>
                    <img src={img} alt='imag' />
                </Image>
                    <Title>
                    
                    <p>C++ Course in 4 hours</p>
                </Title>
                    <Description>
                        <p>Course by: FreeCodeCamp </p>
                        <h6>Rating <span><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i></span></h6>
                    </Description>
                </Course>
                
                <Course>
            <Image>
                    <img src={img2} alt='imag' />
                </Image>
                <Title>
                    <p>Java tutorial for beginners</p>
                </Title>
                    <Description>
                        <p>Course by: Programming with Mosh </p>
                        <h6>Rating<span><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i></span></h6>
                    </Description>
                
                </Course>
                
                <Course>
            <Image>
                    <img src={img3} alt='imag' />
                </Image>
                <Title>
                    <p>JavaScript Crash Course</p>
                    </Title>
                    <Description>
                        <p>Course by: Traversy Media </p>
                        <h6>Rating<span><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i></span></h6>
                    </Description>
                    
                
                </Course>
                

                <Course>
            <Image>
                    <img src={img4} alt='imag' />
                </Image>
                <Title>
                    <p>Slack Clone (React)</p>
                </Title>
                <Description>
                        <p>Course by: Clever Programmer </p>
                        <h6>Rating<span><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i></span></h6>
                    </Description>
                
                </Course>
                

                <Course>
            <Image>
                    <img src={img5}  alt='imag' />
                </Image>
                <Title>
                    <p>Android Studio Full Course</p>
                </Title>
                <Description>
                        <p>Course by: Code with Harry </p>
                        <h6>Rating<span><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i></span></h6>
                    </Description>
                
                </Course>
                

                <Course>
            <Image>
                    <img src={img6}  alt='imag' />
                </Image>
                <Title>
                    <p>React Native Full tutorial</p>
                </Title>
                <Description>
                        <p>Course by: Academind </p>
                        <h6>Rating<span><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i></span></h6>
                    </Description>
                
                </Course>
                

                <Course>
            <Image>
                    <img src={img7}  alt='imag' />
                </Image>
                <Title>
                    <p>Django Full Course</p>
                </Title>
                <Description>
                        <p>Course by: Clever Programmer </p>
                        <h6>Rating<span><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i></span></h6>
                    </Description>
                
                </Course>
                

                <Course>
            <Image>
                <img src={img8} alt='imag' />
                </Image>
                <Title>
                    <p>PHP Full Course</p>
                </Title>
                <Description>
                        <p>Course by: Matt Engineering Equipments </p>
                        <h6>Rating<span><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i></span></h6>
                    </Description>
                
                </Course>
                

                <Course>
            <Image>
                    <img src={img9} alt='imag' />
                </Image>
                <Title>
                    <p>Flutter Course for Beginners</p>
                </Title>
                <Description><p>Course by: Vetri Bright </p><h6>Rating<span><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i></span></h6></Description>
                
                </Course>
                
                <Course>
            <Image>
                    <img src={img10}  alt='imag' />
                </Image>
                <Title>
                    <p>Angular Complete Course</p>
                </Title>
                <Description><p>Course by: Vetri Bright </p><h6>Rating<span><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i></span></h6></Description>

                
                </Course>


                <Course>
            <Image>
                    <img src={img11}  alt='imag' />
                </Image>
                <Title>
                    <p>Node JS Full Course</p>
                </Title>
                <Description><p>Course by: VJ TECHNO WIZARD </p><h6>Rating<span><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i></span></h6></Description>

                
                </Course>


                <Course>
            <Image>
                    <img src={img12}  alt='imag' />
                </Image>
                <Title>
                    <p>Asp.Net MVC Full Course</p>
                </Title>
                <Description><p>Course by: CodeBinX </p><h6>Rating<span><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i></span></h6></Description>

                
                </Course>

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
    box-shadow: -1px 5px 13px 2px rgba(0,0,0,0.81);
    -webkit-box-shadow: -1px 5px 13px 2px rgba(0,0,0,0.81);
    -moz-box-shadow: -1px 5px 13px 2px rgba(0,0,0,0.81);

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
    height:27%;
    background:#f1f1f1;
    padding:7px;
    margin-bottom:2px;
    overflow:hidden;

    i{
        color:rgb(251,225,0);
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

