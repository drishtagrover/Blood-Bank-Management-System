import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import bannerImage from "../assets/banner.jpg"

const DonorRequest=()=>{
    return(<>
    
    <Header />
    <div style={{background:'rgb(244,244,244)', paddingTop:'20px',paddingBottom:'20px'}}>
        <div className="container mt-4 mb-4"> 
            <div className="text-center">
                <h2>Become a Donor</h2>
            </div>
                <div class="card" style={{ padding: "20px" ,margin: "10px" }}>
                  <div className="row">
                  <div className="col-sm-6">
                  <img src={bannerImage} style={{width:'100%'}} />
                  </div>
                    <div className="col-sm-6">
                    <div className="form-group ">
                    <label for="name">Name:</label>
                    <input type="text "placeholder="Enter your Name" className="form-control" />
                    </div>
                    <div className="form-group">
                    <label for="name">Email:</label>
                    <input type="Email "placeholder="Enter your email"className="form-control" />
                    </div>
                    <div className="form-group mt-4">
                    <label for="name">Mobile Number:</label>
                    <input type="Email "placeholder="Enter your Mobile Number" className="form-control" />
                    </div>
                    <div className="form-group mt-4">
                    <label for="name">Blood Group:</label>
                    <input type="Email "placeholder="Enter your Blood Group" className="form-control" />
                    </div>
                    <div className="form-group mt-4">
                    <label for="name">Remarks:</label>
                    <textarea className="form-control" />
                    </div>
                    <button className="btn btn-danger">Submit Request</button>
                    </div>
                  </div>
                </div>   
        </div>
    </div>

    <Footer />
    </>)
}

export default DonorRequest;