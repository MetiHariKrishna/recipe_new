import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Pages.css'



function Menu() {
    const cardDetails = [{
        header1: 'Classic Cheese Burger',
        text1: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price1: '$10'
    },
    {
        header1: 'Fried Chicken',
        text1: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price1: '$8'
    },
    {
        header1: 'French Fries',
        text1: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price1: '$2'
    },
    {
        header1: 'Cheese Fries',
        text1: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price1: '$5'
    },
    {
        header1: 'Green Salad',
        text1: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price1: '$41'
    },
    {
        header1: 'Onion Rings',
        text1: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price1: '$30'
    },
    {
        header1: 'Water',
        text1: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price1: '$44'
    },
    {
        header1: 'Soft Drink',
        text1: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price1: '$3'
    },
    {
        header1: 'Shakes',
        text1: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price1: '$7'
    },
    {
        header1: 'Beers',
        text1: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price1: '$50'
    },
    {
        header1: 'Chocolate Ball',
        text1: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price1: '$55'
    },
    {
        header1: 'Ice Cream',
        text1: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price1: '$4'
    },]
    return (
        <>

       {/* <div style={{backgroundColor:"dark", border:"1px solid red", width:'80%', height:"auto", display:'flex', flexDirection:'row'}}>
            {
              cardDetails.map((e) =>
                <div style={{textAlign:"center",margin:'5px', border:"1px solid black", borderRadius:"12px", backgroundColor:"lightblue", width:"30%"}}>
                <h3>{e.header1}</h3>
                <p style={{marginLeft:"17%",width:'300px', height:'100px', textAlign:'center'}}>{e.text1}</p>
                <span>{e.price1}</span>
                </div>
              
              )  
            }
        </div> */}
        <div className='menudata'>
            
       
        <Row xs={1} md={2} className="g-4">
      {cardDetails.map((e) => (
        <Col>
          <Card className='card-data'>
            
            <Card.Body>
              <Card.Title>{e.header1}</Card.Title>
              <Card.Text>
              {e.text1}
              </Card.Text>
              <Card.Title>{e.price1}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
            {/* <div className="container text-center border-primary">
                <div className="row row-cols-2 bg-secondary">
                    <div className=''>


                        <div className="col cardbox border-success">{cardDetails.map((card) =>
                            <div >
                                <p>{card.header1}</p>
                                <p>
                                    {card.text1}
                                </p>
                                <p>{card.price1}</p>
                            </div>

                        )}</div> </div>
                    
                    
                </div>
            </div> */}

            {/* <div class="container menu-card">
  <div class="row">
    <div className="col card22"> 
    
        
        </div>
        </div>
    <div class="row">
    <div class="col card22">
        
        
        </div>
    
  </div>
  </div> */}
            {/* <div class="container menu-card">
  <div class="row">
    <div class="col"> <Card border="secondary" style={{ width: '18rem',height:'200px' }}>
        {cardDetails.map((card) =>
        <Card.Body>
          <Card.Title>{card.header3}</Card.Title>
          <Card.Text>
          {card.text3}
          </Card.Text>
          <Card.Title>{card.price3}</Card.Title>
        </Card.Body>
        
        )}
        
        </Card></div>
    <div class="col"> <Card border="secondary" style={{ width: '18rem',height:'200px' }}>
        {cardDetails.map((card) =>
        <Card.Body>
          <Card.Title>{card.header4}</Card.Title>
          <Card.Text>
          {card.text4}
          </Card.Text>
          <Card.Title>{card.price4}</Card.Title>
        </Card.Body>
        
        )}
        
        </Card></div>
    
  </div>
  </div>
  <div class="container menu-card">
  <div class="row">
    <div class="col"> <Card border="secondary" style={{ width: '18rem',height:'200px' }}>
        {cardDetails.map((card) =>
        <Card.Body>
          <Card.Title>{card.header5}</Card.Title>
          <Card.Text>
          {card.text5}
          </Card.Text>
          <Card.Title>{card.price5}</Card.Title>
        </Card.Body>
        
        )}
        
        </Card></div>
    <div class="col"> <Card border="secondary" style={{ width: '18rem',height:'200px' }}>
        {cardDetails.map((card) =>
        <Card.Body>
          <Card.Title>{card.header6}</Card.Title>
          <Card.Text>
          {card.text6}
          </Card.Text>
          <Card.Title>{card.price6}</Card.Title>
        </Card.Body>
        
        )}
        
        </Card></div>
    
  </div>
  </div>
  <div class="container menu-card">
  <div class="row">
    <div class="col"> <Card border="secondary" style={{ width: '18rem',height:'200px' }}>
        {cardDetails.map((card) =>
        <Card.Body>
          <Card.Title>{card.header7}</Card.Title>
          <Card.Text>
          {card.text7}
          </Card.Text>
          <Card.Title>{card.price7}</Card.Title>
        </Card.Body>
        
        )}
        
        </Card></div>
    <div class="col"> <Card border="secondary" style={{ width: '18rem',height:'200px' }}>
        {cardDetails.map((card) =>
        <Card.Body>
          <Card.Title>{card.header8}</Card.Title>
          <Card.Text>
          {card.text8}
          </Card.Text>
          <Card.Title>{card.price8}</Card.Title>
        </Card.Body>
        
        )}
        
        </Card></div>
    
  </div>
  </div>
  <div class="container menu-card">
  <div class="row">
    <div class="col"> <Card border="secondary" style={{ width: '18rem',height:'200px' }}>
        {cardDetails.map((card) =>
        <Card.Body>
          <Card.Title>{card.header9}</Card.Title>
          <Card.Text>
          {card.text9}
          </Card.Text>
          <Card.Title>{card.price9}</Card.Title>
        </Card.Body>
        
        )}
        
        </Card></div>
    <div class="col"> <Card border="secondary" style={{ width: '18rem',height:'200px' }}>
        {cardDetails.map((card) =>
        <Card.Body>
          <Card.Title>{card.header10}</Card.Title>
          <Card.Text>
          {card.text10}
          </Card.Text>
          <Card.Title>{card.price10}</Card.Title>
        </Card.Body>
        
        )}
        
        </Card></div>
    
  </div>
  </div>
  <div class="container menu-card">
  <div class="row">
    <div class="col"> <Card border="secondary" style={{ width: '18rem',height:'250px' }}>
        {cardDetails.map((card) =>
        <Card.Body>
          <Card.Title>{card.header11}</Card.Title>
          <Card.Text>
          {card.text11}
          </Card.Text>
          <Card.Title>{card.price11}</Card.Title>
        </Card.Body>
        
        )}
        
        </Card></div>
    <div class="col"> <Card border="secondary" style={{ width: '18rem',height:'250px' }}>
        {cardDetails.map((card) =>
        <Card.Body>
          <Card.Title>{card.header12}</Card.Title>
          <Card.Text>
          {card.text12}
          </Card.Text>
          <Card.Title>{card.price12}</Card.Title>
        </Card.Body>
        
        )}
        
        </Card></div>
    
  </div>
  
</div> */}
        </>
    )
}

export default Menu
// import React from 'react'

// function Menu() {
//         // Define an array of card details
// const filteredCards = [  { type: 'food', header1: 'Pizza', text1: 'Delicious pizza with your choice of toppings', price1: '$12.99' },  { type: 'food', header1: 'Burger', text1: 'Juicy burger with lettuce, tomato, and cheese', price1: '$8.99' },  { type: 'drink', header1: 'Coke', text1: 'Refreshing cola drink in a can', price1: '$1.99' },  { type: 'drink', header1: 'Orange Juice', text1: 'Freshly squeezed orange juice in a bottle', price1: '$3.99' },{ type: 'drink', header1: 'Orange Juice', text1: 'Freshly squeezed orange juice in a bottle', price1: '$3.99' },{ type: 'drink', header1: 'Orange Juice', text1: 'Freshly squeezed orange juice in a bottle', price1: '$3.99' }];
//   return (
//     <div>
  


// <div style={{backgroundColor:"dark", border:"1px solid red", width:'80%', height:"auto", display:'flex', flexDirection:'row'}}>
//   {
//     filteredCards.map((card) =>
//       <div style={{textAlign:"center", margin:'5px', border:"1px solid black", borderRadius:"12px", backgroundColor:"lightblue", width:"30%"}}>
//         <h3>{card.header1}</h3>
//         <p style={{marginLeft:"17%",width:'300px', height:'100px', textAlign:'center'}}>{card.text1}</p>
//         <span>{card.price1}</span>
//       </div>
//     )  
//   }
// </div>

//     </div>
//   )
// }

// export default Menu

