import React from "react";
import CardServices from "../components/card";
import { FaCode, FaReact, FaBug } from "react-icons/fa";
import Menu from '../components/navigasi'


const Services = () => {
  return (
    <div>
      <Menu />
      
      <div className=" text-center my-5">
        <h2>Services</h2>
        <h4>
          Solving your problem with coding,
          <br />
          and make your life easier
        </h4>
      </div>

      <div className="container justify-content-evenly d-flex">
        <div className="row d-flex">
          <div className="col-lg-4 col-md-6 col-xs-12 mb-5 d-flex justify-content-center">
            <CardServices
              title="What I can do for you"
              description="I can help you to solve your problem with coding, and make your life easier"
              icon={<FaCode />}
              listItems={[
                "Web Development",
                "Mobile Development",
                "Desktop Development",
              ]}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mb-5 d-flex justify-content-center">
            <CardServices
              title="What I am intermediet with"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
              listItems={["React", "Machine Learning", "Web Scrapping"]}
              icon={<FaReact />}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mb-5 d-flex justify-content-center">
            <CardServices
              title="What you can expect me"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
              listItems={["Clean code", "Functionality", "User Friendly"]}
              icon={<FaBug />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
