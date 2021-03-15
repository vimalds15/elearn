import React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'
import c1 from '../images/carousel/c1.jpg'
import c2 from '../images/carousel/c2.jpg'
import c4 from '../images/carousel/c4.jpg'



const Caroussel = () => {
    return (
        <MasterCont>
        <Container id="cars">
            <Carousel  pause='false'>
                <Carousel.Item interval={3200}>
                    <img
                    className="d-block w-100"
                    src={c1}
                    alt="First slide" 
                       
                    />
                </Carousel.Item>
                <Carousel.Item interval={3200}>
                    <img
                    className="d-block w-100"
                    src={c2}
                    alt="Second slide"
                      
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={3200}>
                    <img
                    className="d-block w-100"
                    src={c4}
                    alt="Third slide"
                     
                    />
                </Carousel.Item>
            </Carousel>
            </Container>
            </MasterCont>
    )
}

export default Caroussel

const MasterCont = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    
     
    img{
        height:200px;
        width:100%;
    }

     @media(min-width:1150px){
     img{
        height:300px;
        
     }
    }
`


const Container = styled.div`
-webkit-box-shadow: -1px 1px 10px 5px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 1px 10px 5px rgba(0,0,0,0.75);
box-shadow: -1px 1px 10px 5px rgba(0,0,0,0.75);
@media(min-width:1150px){
    margin:25px 0;
    width:70%;
`
