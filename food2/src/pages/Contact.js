// import React, { useState } from 'react'
// import Header from '../components/Header'
// import Footer from "../components/Footer"
// // import Button from 'react-bootstrap/Button';
// // import  Button  from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import Product from './Product';

    

//  function Contact() {
//     const [search,setSearch] =useState("")
//     const [data,setData] =useState([])
//     const YOUR_APP_ID ="ebe54093";
//     const YOUR_APP_KEY = "89729ef006b202f5f4264bcfd5e01597";

//     const submitHandler = (e) =>{
//         e.preventDefault();
//         fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`)
//         .then(
//             Response => Response.json()
//         ).then(
//           // data => console.log(data.hits)
//             data => setData(data.hits)
//         )
        
//     }
    
//   return (
//     <>
//     <div>
//       <Header />
//       <center>
//       <h1>search page</h1><br />
//       <Form onSubmit={submitHandler}>
//       <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/><br /><br />
//       <input  type="submit" className='btn btn-primary' value="search" />
//       </Form>
//       {data.length>=1 ? <Product data={data}/>:null}
//       </center>
//       <Footer />
      
//     </div>
//     </>
//   )
// }
// export default Contact;