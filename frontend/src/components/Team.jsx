import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
           At Aahar, our team is a passionate blend of chefs, developers, designers, and food enthusiasts who share a common goal: to revolutionize the way people experience food. Each member brings a unique set of skills, from crafting delicious recipes and ensuring nutritional balance to building smooth, user-friendly technology that connects food lovers with flavors they’ll never forget. We believe that great food and great experiences go hand in hand — and our collaborative spirit drives us to innovate constantly, deliver quality, and put our users at the heart of everything we do. With creativity in our kitchen and precision in our code, the Aahar team is committed to making food discovery smarter, faster, and tastier for everyone.


          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;