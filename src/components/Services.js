import React, { useEffect, useState } from "react";
import helpImage from "../assets/handshake.png"
import bloodTube from "../assets/blood-tube.png"
import check from "../assets/check.png"
import user from "../assets/user.png"
import axios from "axios";

const Services = () => {
  const [serviceList,setServiceList] = useState([]);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}services`).then((resp)=>{
      setServiceList(resp.data.data)
    })
  },[])
  return (
    <div className="service-container">
        <div className="text-center">
           <h2 className="service-title">Our Services</h2>
        </div>
      <div className="row">
        {serviceList && serviceList.map((ele)=>{
          return(<div className="col-sm-3 text-center service-card">
            <div class="card w-80" style={{marginLeft:'10px'}}>
              <div className="text-center">
              <img src={ele.image} style={{height:'100px', width:'100px'}} class="card-img-top" alt="..." />
              </div>  
              <div class="card-body">
                <h5 class="card-title">{ele.name}</h5> 
              </div>
            </div>
          </div>)
        })}
        
      </div>
    </div>
  );
};

export default Services;
