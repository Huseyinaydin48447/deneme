import React from 'react'
import Button from 'react-bootstrap/Button';
import { Col,Row ,Table} from 'react-bootstrap';
const Home = () => {
  return (
    <>
    
   


    <Table striped bordered hover>
      <thead>
        <tr>
          <th>name</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AHMET</td>
          <td style={{display:'flex', justifyContent:"flex-end" , alignContent:"flex-end" }}> <span style={{justifyContent:"space-evenly"}}  > <Button variant="secondary">Secondary</Button>   <Button variant="secondary">Secondary</Button>{' '}</span>  </td>
          
        </tr>
       
      
      </tbody>
    </Table>
    
    </>
  )
}

export default Home