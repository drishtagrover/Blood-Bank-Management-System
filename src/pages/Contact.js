import React , { useState }from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import axios from 'axios';


const Contact=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [message,setMessage]=useState("");

    const submit=()=>{
        const payload ={
            "name":name,
            "email":email,
            "mobile":mobile,
            "message":message
        
        }
        if(name==="" || email==="" || mobile==="" || message===""){
            alert("please fill all fields")
        } else{
            axios.post(`${process.env.REACT_APP_BASE_URL}contact`, payload).then((ele)=>{
                setName("");
                setEmail("");
                setMobile("");
                setMessage("");
                alert("contact query successfully sent")
            })
        }
    }
    return(
        <>
        <Header />
        <div className="container">
            <div className="text-center mt-4"><h2>Connect With US</h2></div>           
            <div className="row contact-cont">
                <div className="col-sm-6"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7438700090347!2d77.32899271013503!3d28.577452975593502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce452a5193ffb%3A0xa2fec591efdad1f!2sBlood%20Bank%20Kailash%20Hospital!5e0!3m2!1sen!2sin!4v1744286460654!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-sm-6">
                    <div className="form-grp mt-4">
                        <label for="name">Name:</label>
                        <input value={name} type="text" onChange={(e)=>setName(e.target.value)} className="form-control"></input>
                    </div>
                    <div className="form-grp mt-4">
                        <label for="name">Email:</label>
                        <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control"></input>
                    </div>
                    <div className="form-grp mt-4 mb-4">
                        <label for="name">Mobile Number:</label>
                        <textarea value={mobile} onChange={(e)=>setMobile(e.target.value)} className="form-control"></textarea>
                    </div>
                    <div className="form-grp mt-4">
                        <label for="name">Message:</label>
                        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="form-control"></textarea>
                    </div>
                    <div className="form-grp mt-4">
                        <button className="btn btn-danger" onClick={submit}>Submit</button>
                    </div>
                </div>
                
            </div>
            </div>
            <div style={{background:'red', marginTop:'20px', marginBottom:'20px'}}>
                <div className="container">
                <div className="row">
                <div className="col-sm-12">
                <p className="mt-4 white"><b>Address:</b> 123 Maplewood Drive, Apt 4B
                Springfield, IL 62704</p>
                <p className="white"><b>Phone:</b>+91 1234567890</p>
                <p className="white"><b>Email:</b>email@company.com</p>
                </div>
            </div>
                </div>
            </div>
            
        
        <Footer />
        </>
    );
}

export default Contact;