import React from 'react'
import {Container} from './styles'

const Status = ({icon, name, value}) =>(

        <Container>
            {icon}
            <h4>{name} : <span>{value}</span></h4>
        </Container>
    )

export default Status;