
// import React, { Component } from 'react'
// import "./Component.css";
// import {Button} from 'react-bootstrap/Button';
// import "bootstrap/dist/css/bootstrap.min.css"
// import axios from "axios";



// class Footer extends Component {
//     constructor() {
//         super()
//         this.state = {
//             fullName: "",
//             username: "",
//             email: "",
//             password: ""
//         }
//         this.changeFullName =this.changeFullName.bind(this)
//         this.changeUsername =this.changeUsername.bind(this)
//         this.changeEmail =this.changeEmail.bind(this)
//         this.changePassword =this.changePassword.bind(this)
//         this.onSubmit =this.onSubmit.bind(this)
//     }
//     changeFullName(event){
//         this.setState({
//             fullName:event.target.value
//         })
//     }

//     changeUsername(event){
//         this.setState({
//             username:event.target.value
//         })
//     }
//     changeEmail(event){
//         this.setState({
//             email:event.target.value
//         })
//     }
//     changePassword(event){
//         this.setState({
//             password:event.target.value
//         })
//     }
//     onSubmit(event){
//         event.preventDefault()  
//         const registered ={
//             fullName:this.state.fullName,
//             username:this.state.username,
//             email:this.state.email,
//             password:this.state.password
//         }  
//        axios.post('http://localhost:5000/form/postdbdata',registered)
//        .then(res =>console.log(res.data))

//        this.setState({
//         fullName:"",
//         username:"",
//         email:"",
//         password:""
//        })
//     }
//     render(){
//     return(
//         //   <section className='colorbg'>
//         //     <div className="container " id="contact">
//         //         <div class="row">
//         //             <div class="col">
//         //                 <div className='span'>
//         //                     <div>
//         //                         <span>Made with love<br />
//         //                             by Insieme</span>
//         //                     </div>
//         //                     <div className='text'>
//         //                         <span>123-456-7890<br />
//         //                             500 Terry Francois Street
//         //                             San Francisco,CA 94
//         //                             info@mysite.com</span>
//         //                     </div>

//         //                 </div>
//         //                 <p className='footbottom'>© 2035 by Insieme. Powered and secured by Wix</p>
//         //             </div>
//         //             <div class="col">
//         //                 <div className='contact'>
//         //                     <h2>Contact Insieme</h2>
//         //                     <form>
//         //                         <div className='inputtext'>
//         //                             <div className='align1'>


//         //                                 <label for="exampleInputEmail1" className="form-label1">First Name</label>
//         //                                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//         //                                 <label for="exampleInputPassword1" className="form-label2">Last Name</label>
//         //                                 <input type="text" className="form-control" id="exampleInputPassword1" />
//         //                             </div>
//         //                             <div className='align2'>


//         //                                 <label for="exampleInputPassword1" class="form-label3">Email</label>
//         //                                 <input type="text" class="form-control" id="exampleInputPassword1" />
//         //                                 <label for="exampleInputPassword1" class="form-label4">password</label>
//         //                                 <input type="password" class="form-control" id="exampleInputPassword1" />
//         //                             </div>
//         //                             <div class="Textmessage">
//         //                                 <label for="exampleFormControlTextarea1" className="form-label5">Text message...</label>
//         //                                 <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>

//         //                             </div>
//         //                         </div>


//         //                         <div class="mb-3 form-check">
//         //                             <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//         //                             <label class="form-check-label" for="exampleCheck1">Check me out</label>
//         //                         </div>
//         //                         <button type="submit" class="btn btn-primary">Submit</button>
//         //                     </form>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </section>

// <div>
//     <div className='container'>
//     <div className='form-div'>
//         <form className={this.onSubmit}>
//             <input type='text' placeholder='Full Name' onChange={this.changeFullName} value={this.state.fullName}
//             className='form-control form-group'/>
//               <input type='text' placeholder='user Name' onChange={this.changeUsername} value={this.state.username}
//             className='form-control form'/>
//              <input type='text' placeholder='Email' onChange={this.changeEmail} value={this.state.email}
//             className='form-control form'/>
//             <input type='password' placeholder='password' onChange={this.changePassword} value={this.state.password}
//             className='form-control form'/>
//             <input type='submit' className='btn btn-danger' value='submit' />
//         </form>
//     </div>   
//     </div>
// </div>


//     )
// }
// }
// export default Footer;

import React, { useState } from 'react'
import axios from "axios";



const Footer = () => {

    const [data, setData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        Textmessage: ""
    })
    const { fullName, username, email, password, Textmessage } = data;
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submitHandler = e => {
        console.log("asdf")
        e.preventDefault()
        const data = {
            fullName: fullName,
            username: username,
            email: email,
            password: password,
            Textmessage: Textmessage
        }
        axios.post('http://localhost:5000/form/postdbdata', data)
            .then(res => alert(res.data))
        setData({
            fullName: "",
            username: "",
            email: "",
            password: "",
            Textmessage: ""

        })

        console.log(data)

    }

    return (
        //     <div>
        //     <form onSubmit={submitHandler}>
        //         <input type="text" name="fullName" value={fullName} onChange={changeHandler}/><br/>
        //         <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
        //         <input type="text" name="email" value={email} onChange={changeHandler}/><br/>
        //         <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
        //         <input type="submit" name="submit"  />
        //     </form>
        // </div>
        <section className='colorbg'>
            <div className="container " id="contact">
                <div class="row">
                    <div class="col">
                        <div className='span'>
                            <div>
                                <span>Made with love<br />
                                    by Insieme</span>
                            </div>
                            <div className='text'>
                                <span>123-456-7890<br />
                                    500 Terry Francois Street
                                    San Francisco,CA 94
                                    info@mysite.com</span>
                                <br />
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook " viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg> <br />
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>

                            </div>


                        </div>
                        <p className='footbottom'>© 2035 by Insieme. Powered and secured by Wix</p>
                    </div>
                    <div class="col">
                        <div className='contact'>
                            <h2>Contact Insieme</h2>
                            <form onSubmit={submitHandler}>
                                <div className='inputtext'>
                                    <div className='align1'>


                                        <label for="exampleInputEmail1" className="form-label1">Full Name</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" name="fullName" value={fullName} onChange={changeHandler} />
                                        <label for="exampleInputPassword1" className="form-label2">user Name</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" name="username" value={username} onChange={changeHandler} />
                                    </div>
                                    <div className='align2'>


                                        <label for="exampleInputPassword1" class="form-label3">Email</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" name="email" value={email} onChange={changeHandler} />
                                        <label for="exampleInputPassword1" class="form-label4">password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={password} onChange={changeHandler} />
                                    </div>
                                    <div class="Textmessage">
                                        <label for="exampleFormControlTextarea1" className="form-label5">Text message...</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="Textmessage" value={Textmessage} onChange={changeHandler} ></textarea>

                                    </div>
                                </div>


                                {/* <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div> */}
                                <button type="submit" className=" formbtn btn btn-primary" >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer; 