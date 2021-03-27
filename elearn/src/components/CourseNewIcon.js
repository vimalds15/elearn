import React from 'react'
import styled from 'styled-components'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';


const CourseNewIcon = () => {
    return (
        <Container>
            <LinkContainer to='/courses/new'>
                <AddCircleIcon />
            </LinkContainer>
        </Container>
    )
}

export default CourseNewIcon

const Container = styled.div`
    

    svg{
        width:50px;
        height:50px;
        position:fixed;
        bottom:30px;
        right:30px;
        background:white;
        border-radius:50%;
        color:red;
        
        :hover{
            color:red;
            opacity:0.8;
            transition: .5s;
        }
    }
`