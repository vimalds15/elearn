import React from 'react'
import CoursesList from '../components/CoursesList'
import styled from 'styled-components'

const HomeScreen = () => {
    return (
        <Container>
            <CoursesList />
        </Container>
    )
}

export default HomeScreen

const Container = styled.div`
    display:flex;
`

