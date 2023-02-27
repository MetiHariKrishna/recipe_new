// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Component.css";
import React, { useState } from 'react'
import axios from 'axios'
// import Form from 'react-bootstrap/Form';
// import Product from '../pages/Product';
import ApiData from '../pages/ApiData';

function Header() {
  // const [search, setSearch] = useState("")
  // const [data, setData] = useState([])
  const [inputs, setInputs] = useState('')
  const [datas, setData] = useState([])
  const [a, setA] = useState('')
  console.log('aaaaaaaaaaa', a)
  console.log("data", datas)
  console.log("inputs data", inputs)
  // const [inputdata] =data;
  const onChangedata = ((e) => {
    e.preventDefault()
    setInputs({ ...inputs, [e.target.name]: e.target.value })
    console.log("onchange inputs", setInputs);
  })
  // useEffect(() => {
  //   submitHandler()
  // })
  const submitHandler = (e) => {
    e.preventDefault();
    axios.get(
      "http://localhost:5000/form/data"

      // "https://jsonplaceholder.typicode.com/posts"
    )
      .then(res => {
        console.log("this is the data response", res)
        setData(res.data.message)
      })
    const result = datas.filter(checkAdult);
    setA(result)
    function checkAdult(data) {
      return data?.body === inputs?.inputs;
    }
  }


  // const YOUR_APP_ID = "ebe54093";
  // const YOUR_APP_KEY = "89729ef006b202f5f4264bcfd5e01597";


  // console.log(inputs)


  //  fetch(
  //   // "http://localhost:5000/form/getdbdata"
  //   `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`
  //   )
  //   .then(
  //     Response => Response.json()
  //   ).then(
  //     // data => console.log(data.hits)
  //     data => setData(data.hits)
  //   )



  return (
    <>
      <Navbar className='bgcolor ' expand="lg" sticky="top" >
        <Container fluid>
          <Navbar.Brand href="#">
            <img className='logo' src='data:image/png;base64,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' alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navfont"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" >Home</Nav.Link>
              <Nav.Link className='space' href="/about" >About</Nav.Link>
              <Nav.Link className='space' href="#contact" >Register</Nav.Link>
              <Nav.Link href="/login" >Login</Nav.Link>

            </Nav>


            <Form onSubmit={submitHandler} className='d-flex' >
              <input type="text" name='inputs' value={inputs.message} onChange={onChangedata} class="form-control" id="exampleFormControlInput1" placeholder="search" />
              <input type="submit" name="submit" className='btn btn-primary serch-button' />
            </Form>



          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ApiData />

      <div >

        {
          a && a.map(item => <div className='backendimg' key={item.id}>
            <img src={item.title} alt=''/>
            <div className='buycard'>
              <h4>{item.body}</h4>
              <h5>Price: {item.price}</h5>
              <button type="submit" className='btn btn-primary'>{item.button}</button>
            </div>
          </div>)
        }

      </div>
    </>
  );
}

export default Header;