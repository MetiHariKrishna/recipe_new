import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import Carousel from 'react-bootstrap/Carousel';
import "./Pages.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Product from './Product';
import Menu from './Menu';

// import {usercontext} from '../App'




function Home() {
  return (
    <>
      <div >
        <Header />
        <Carousel >
          <Carousel.Item interval={1000}>
            <img
              className="carousal"
              src="https://www.carousel-bars.co.uk/wp-content/uploads/2022/11/CarouselFoodAug2022-73-1200x480.jpg"
              alt="First slide"
            />
            {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="carousal"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXcjvEEVrTczyQ2ODS4gbtAWZpVVxGwl9_-Lec1qOX2JA1d8JvwsYqlGwAX6-3Wfy5TQE&usqp=CAU"
              alt="Second slide"
            />
            {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousal"
              src="https://cdn.winsightmedia.com/platform/files/public/fsd/global-food.jpg"
              alt="Third slide"
            />
            {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
        <div className='menu-bar'>
          <h1>MENU ITEMS </h1>
          <img src="https://img.icons8.com/external-those-icons-fill-those-icons/24/null/external-down-arrows-those-icons-fill-those-icons-7.png" alt='' style={{width:'40px'}}/>
         
        </div>
        <div className='card-menu'>
        <Menu />
        </div>
        
        <section>
          <Container>
            <Row>
              <Col>
                <div className='Twist'>


                  <h1>Farm-to-Table</h1>
                  <h1 className='Twist5'>With a Twist</h1>
                  <span >I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.I'm a paragraph.let your bout you.I'm a paragraph Click here to add your own text and edit me.</span>
                </div>
              </Col>
              <Col >
                <img className='img1' src='https://static.wixstatic.com/media/11062b_6bb8118a7b474bea9096972752da343f~mv2.jpg/v1/crop/x_0,y_323,w_3333,h_4355/fill/w_601,h_785,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Roasted%20Cauliflower%20Salad.jpg' alt='' />
              </Col>
            </Row>
          </Container></section>
          {/* <usercontext.Consumer>
            {value=><center> {value}</center>}
          </usercontext.Consumer> */}

        <Footer />
      </div>
    </>
  )
}
export default Home;