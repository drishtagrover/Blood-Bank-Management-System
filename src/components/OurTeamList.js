import React from "react";
import user from "../assets/profile.png";

const OurTeamList = () => {
  const team = [
    {
      id: 1,
      name: "user 1",
      image: user,
    },
    {
      id: 2,
      name: "user 2",
      image: user,
    },
    {
      id: 3,
      name: "user 3",
      image: user,
    },
    {
      id: 4,
      name: "user 4",
      image: user,
    },
    {
      id: 5,
      name: "user 5",
      image: user,
    },
    {
      id: 6,
      name: "user 6",
      image: user,
    },
    {
      id: 7,
      name: "user 7",
      image: user,
    },
    {
      id: 8,
      name: "user 8",
      image: user,
    },
    {
      id: 9,
      name: "user 9",
      image: user,
    },
    {
      id: 10,
      name: "user 10",
      image: user,
    },
    {
      id: 11,
      name: "user 11",
      image: user,
    },
    {
      id: 12,
      name: "user 12",
      image: user,
    },
  ];
  return (
    <div className="row" style={{ background: "f4f4f4" }}>
      <div className="text-center">
        <h2 style={{marginTop:'20px', marginBottom:'20px'}}> Our Team</h2>
      </div>
        {team.map((item) => {
          return (
            <div className="col-sm-4">
              <div class="card" style={{ margin: "20px" }}>
                <div className="text-center">
                  <img
                    src={item.image}
                    style={{ height: "100px", width: "100px" }}
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title text-center">{item.name}</h5>
                </div>
              </div>
            </div>
          );
        })}
      
    </div>
  );
};

export default OurTeamList;
