import React from 'react'
import { Container } from 'react-bootstrap'
import MainHeader from './MainHeader'

const MaınLayout = ({children}) => {

  return (
    <><MainHeader />
    
    <Container  className='mt-4' >

          {children}
      </Container></>
  )
}

export default MaınLayout