import React, { useEffect, useState } from 'react'
import axios from "axios"

import Header from '../components/Header'
import Footer from "../components/Footer"
// import Button from 'react-bootstrap/Button';
// import  Button  from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import Product from './Product';
import ApiData from './ApiData';
// import ReactLogo from  '../imges/tree-736885__480.jpg'
// import AudioFile from  '../imges/file_example_MP3_700KB.mp3'
// import VideoFile from  '../imges/istockphoto-1218838426-640_adpp_is.mp4'




function About() {


  const [posts, setPosts] = useState([false])

  console.log("posts", posts)
  useEffect(() => {
    axios.get("http://localhost:5000/form/data"

      // "https://jsonplaceholder.typicode.com/posts"
    )
      .then(res => {
        console.log(res)
        setPosts(res.data.message)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>


      <div className='about'>
        <Header />

        <section >
          <div className='hari'>


            <div >
              <img className='imag' src='https://static.wixstatic.com/media/45d10e_9cefd5d5a1ab43ef8f3cae850e39b81a~mv2_d_2977_3759_s_4_2.jpg/v1/fill/w_299,h_299,q_90/45d10e_9cefd5d5a1ab43ef8f3cae850e39b81a~mv2_d_2977_3759_s_4_2.jpg'alt='' />
              <img className='imag' src='https://static.wixstatic.com/media/84770f_d6055d34eb504de2b7a7857a016ae82ef003.jpg/v1/fill/w_299,h_299,q_90/84770f_d6055d34eb504de2b7a7857a016ae82ef003.jpg' alt=''/>
              <img className='imag' src='https://static.wixstatic.com/media/45d10e_9dbb89fb72fc4cd6be4921d8e7657bd6~mv2_d_1601_1803_s_2.jpg/v1/fill/w_300,h_299,q_90/45d10e_9dbb89fb72fc4cd6be4921d8e7657bd6~mv2_d_1601_1803_s_2.jpg'alt='' />
              <img className='imag' src='https://static.wixstatic.com/media/45d10e_fa26e665fe3143d3910378ee44631f0b~mv2_d_3168_4752_s_4_2.jpeg/v1/fill/w_299,h_299,q_90/45d10e_fa26e665fe3143d3910378ee44631f0b~mv2_d_3168_4752_s_4_2.jpeg' alt=''/>
              <img className='imag' src='https://static.wixstatic.com/media/45d10e_e57bbd49ca524e4781051285cd971b3a~mv2_d_3338_5000_s_4_2.jpg/v1/fill/w_299,h_299,q_90/45d10e_e57bbd49ca524e4781051285cd971b3a~mv2_d_3338_5000_s_4_2.jpg' alt=''/>
              <img className='imag' src='https://static.wixstatic.com/media/45d10e_d17d624126f34630af2885c15549b5f4~mv2_d_7360_4912_s_4_2.jpeg/v1/fill/w_299,h_299,fp_0.31_0.23,q_90/45d10e_d17d624126f34630af2885c15549b5f4~mv2_d_7360_4912_s_4_2.jpeg'alt='' />
              <img className='imag' src='https://static.wixstatic.com/media/45d10e_5f1aaf7501104bb19804ed078b7c39f0~mv2_d_2778_2667_s_4_2.jpg/v1/fill/w_300,h_299,q_90/45d10e_5f1aaf7501104bb19804ed078b7c39f0~mv2_d_2778_2667_s_4_2.jpg' alt=''/>
              <img className='imag' src='https://static.wixstatic.com/media/45d10e_5520a45f59114be7bf2ac660bbe26e01~mv2_d_5493_3620_s_4_2.jpg/v1/fill/w_299,h_299,q_90/45d10e_5520a45f59114be7bf2ac660bbe26e01~mv2_d_5493_3620_s_4_2.jpg' alt=''/>
            </div>
          </div>
        </section>
        <ApiData />

        <div className='bgcolor1'>

          {
            posts.map(post => <div className='backendimg' key={post.id}>
              <img src={post.title} alt='' />
              <div className='buycard'>
                <h4>{post.body}</h4>
                <h5>Price: {post.price}</h5>
                <button type="submit" className='btn btn-primary'>{post.button}</button>
              </div>
            </div>)
          }

        </div>


        {/* <img src={ReactLogo}  alt=''/> */}
        {/* <audio controls>
          <source src={AudioFile} type="audio/ogg" />
        </audio> */}
        {/* <video width="500" height="200" controls>
          <source src={VideoFile} type="" />
        </video> */}


        <Footer />

      </div>




    </>

  )
}
export default About;