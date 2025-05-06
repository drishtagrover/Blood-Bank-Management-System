import React from "react";
import Header from "../components/header";
import blood from "../assets/blood.jpg";
import blood2 from "../assets/blood2.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="text-center mt-4 mb-4">
        <h3> About: Our Bank</h3>
      </div>
    <div className="container ">
        <div className="row">
          <div className="col-sm-6">
            <h4> </h4>
            <p><i>
              we believe that every drop of blood has the power to save a life.
              Founded with the mission to ensure safe, timely, and accessible
              blood for every patient in need, our blood bank stands as a beacon
              of hope and compassion for countless individuals and families. We
              are more than just a facility that collects and distributes
              blood—we are a community-driven initiative committed to saving
              lives through voluntary blood donations, innovative technology,
              and medical excellence. With a dedicated team of healthcare
              professionals, volunteers, and supporters, we strive to maintain
              the highest standards of safety, efficiency, and care in
              everything we do. Our operations are guided by core values of
              trust, transparency, quality, and empathy. From donor registration
              to rigorous testing and processing, we ensure that every unit of
              blood meets the strictest quality control standards before it
              reaches a patient. We work closely with hospitals, emergency
              services, and local health authorities to provide life-saving
              blood and components like plasma and platelets, whenever and
              wherever they are needed most. We are also deeply committed to
              raising awareness about the importance of regular blood donation.
              Through community outreach, educational programs, and donation
              drives, we aim to inspire a culture of giving and responsibility,
              encouraging more people to become regular donors. Whether you are
              a first-time donor, a returning hero, a patient in need, or a
              partner looking to support our cause, we welcome you to be part of
              our mission. Together, we can create a healthier, more
              compassionate world—one donation at a time. Join us. Donate blood.
              Save lives.</i>
            </p>
          </div>
          <div className="col-sm-6 text-center pt-4">
            <img src={blood} style={{ width: "85%" }} className="about-image" />
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-sm-6 text-center pt-4">
            <img
              src={blood2}
              style={{ width: "85%" }}
              className="about-image"
            />
          </div>
          <div className="col-sm-6">
            <h4> </h4>
            <p><i>
              {" "}
              we understand that time is often the most critical factor in
              medical emergencies. That’s why we have built an advanced,
              tech-enabled infrastructure to ensure that blood and its
              components are delivered swiftly and safely to those in urgent
              need. Our state-of-the-art facilities are equipped with modern
              storage and testing equipment, ensuring that every unit collected
              is handled with the utmost care and adheres to national and
              international standards. We maintain a digital database that
              allows us to track donations, monitor inventory levels, and match
              patients with suitable donors efficiently. Beyond logistics, our
              heart lies in the human connection we foster. Each donor who walks
              through our doors is treated with respect and gratitude, knowing
              they play a direct role in saving lives. We also support
              recipients and their families with empathy and information,
              guiding them through the process and providing reassurance during
              difficult times. Our team works tirelessly around the clock—during
              natural disasters, health crises, and everyday emergencies—to
              ensure no patient suffers due to a shortage of blood. In addition
              to our core services, we are passionate about innovation and
              research. We actively engage in studies to improve transfusion
              practices, donor retention strategies, and overall healthcare
              outcomes. Our collaborations with medical institutions,
              universities, and health departments help us stay at the forefront
              of transfusion medicine. As we grow, our goal remains clear: to
              build a self-sustaining, transparent, and inclusive blood
              ecosystem where no life is lost for want of blood.{" "}</i>
            </p>
          </div>
        </div>
        <div className="mb-4">
        <div>
            <h4 style={{marginTop:'20px', marginBottom:'20px', marginLeft:'50px'}}>Terms and conditions</h4>
        </div>
        <div> 
            <ol style={{marginLeft:'50px'}}>
                <li><b>Eligibility:</b> Donors must be 18+ and meet health requirements as per medical guidelines.</li>
                <li><b>Accurate Information:</b> All users must provide truthful and accurate personal and medical details.</li>
                <li><b>Privacy: </b>We respect your privacy. Your data is kept secure and is only used for blood bank-related services.</li>
                <li><b>No Medical Advice:</b> Our content is for informational purposes only and not a substitute for professional medical advice</li>
                <li><b>Service Access:</b> We aim to keep our services available at all times but are not responsible for any downtime.</li>
                <li><b>Changes:</b> We may update these terms at any time. Continued use means you accept any changes.</li>
            </ol>
        </div>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default About;
