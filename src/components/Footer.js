import React from "react";
import { Link } from "react-router-dom";
const Footer=()=>{
    return(
    <div className="row">
        <div className="col-sm-4">
        <div className="text-center">
            <h2>Useful Links</h2>
        </div>
        <div className="text-center">
            <ul className="useful-links">
                <li><Link to={'/'}>Link1</Link></li>
                <li><Link to={'/'}>Link2</Link></li>
                <li><Link to={'/'}>Link3</Link></li>
            </ul>
            </div>
        </div>
        <div className="col-sm-4">
            <div>
                <p style={{color:'red', fontWeight:'bold',marginTop:'20px'}}>Contact Information:</p> <p>123 Maplewood Drive, Apt 4B
Springfield, IL 62704
USA</p>
                <p className="">Email: email@company.com</p>
                <p> Mobile number:+91 1234567890</p>
            </div>
        </div>
        <div className="col-sm-4">
            <p style={{marginTop:'10px'}}>Hey! please enter your email here</p>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter your mail"></input>
            </div>
            <div className="form-group" style={{marginTop:'20px'}}>
                <button className="btn btn-danger"> Subscribe</button>
            </div>
        </div>
    </div>
    )
}
export default Footer;