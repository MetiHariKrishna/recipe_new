import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Product = ({ data }) => {
    return (
        <div>
            
        <div className='row'>
           
         {data.map(data =>  
         <div className='col-md-4'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.recipe.image}/>
      <Card.Body>
        <Card.Title>{data.recipe.label}</Card.Title>
        <Card.Text>
         Total Amount of calories :{data.recipe.calories}
        </Card.Text>
        <Button variant="primary">buy</Button>
      </Card.Body>
    </Card>
    </div>
    )} 
    
    </div>
    </div>
    )
}
export default Product;