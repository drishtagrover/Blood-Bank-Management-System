import React from "react";
import bannerImage from "../assets/banner.jpg";
import { Link } from "react-router-dom";
const Donor = () => {
  return (
    <div className="row" style={{ marginTop: "20px", marginBottom: "20px" }}>
      <div className="col-sm-6">
        <div className="text-center">
          <h2 style={{ marginBottom: "20px", marginTop: "20px" }}>
            {" "}
            Become a Donor – Save Lives Today!
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "80%" }}>
            <p>
              Donating blood is one of the simplest and most powerful ways to
              help others. With just a single donation, you can save up to three
              lives. Every day, countless patients rely on generous donors for
              survival—whether it's during surgery, after an accident, or while
              fighting illness. Becoming a donor takes only a few minutes, but
              the impact lasts a lifetime. It's safe, easy, and deeply
              meaningful. Step forward today and become someone’s real-life
              hero. Your small act can give someone a future, a smile, a chance
              to live. Be the reason someone believes in kindness—be a blood
              donor.
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link
            to={"donor-request"}
            className="btn btn-danger "
            style={{ marginTop: "70px" }}
          >
            {" "}
            Join Us
          </Link>
        </div>
      </div>
      <div className="col-sm-6">
        <img src={bannerImage} style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Donor;
