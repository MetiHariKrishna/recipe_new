import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';


 function Login() {
    const [log, setLog] =useState({ 
        email:"",
        password:""
    })
    
    const { name } = useParams();
    console.log("N:::",name);

    const {email,password} =log;
    const changeHandler = e =>{
        setLog({...log,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
       
        const log = {
           
            email: email,
            password: password
           
        }
        axios.post('http://localhost:5000/form/login', log)
        .then(res => alert("login successfully",res.log))
        setLog({ 
            email:"",
            password:""
            
        })
        let url = 'http://localhost:5000/form/login'
        console.log("api url is here", url);
         
            console.log(log)

    }

  return (
    <>
    <div>
      
        <Header />
      
      <Container>
      <Row>
        <Col>
        <img className='img-radius' src='https://cdn.learnwoo.com/wp-content/uploads/2019/11/image1-5.jpg'  alt=""/>
        </Col>
        <Col className='login'>  
        <div className='login-space'>
        <h1 className='login-space1'>Login Form</h1>
      <form onSubmit={submitHandler} >
      <Form.Label className='login-space1'>Email address</Form.Label>
      <input className="mb-3" controlId="formBasicEmail" class="form-control newinput" id="exampleFormControlInput1" type="email" name="email" value={email}  onChange={changeHandler} />
      <Form.Label className='login-space1'>Password</Form.Label>
      <input className="mb-3" controlId="formBasicPassword" class="form-control newinput" id="exampleFormControlInput1" type="password" name="password" value={password}  onChange={changeHandler} />
      <Button variant="primary" type="submit" className='login-button' >
        Submit
      </Button>
      
      </form>
      </div></Col>
      </Row>
      
    </Container>
 
       <Pagination />
      
      
      <Footer />
    </div>
    </>
  )
}
export default Login;