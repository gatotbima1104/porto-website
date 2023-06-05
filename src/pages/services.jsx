import React from "react";
import CardServices from "../components/card";
import { FaCode, FaReact, FaBug } from "react-icons/fa";
import Menu from "../components/navigasi";

const Services = () => {
  const services = [
    {
      title: "What I can do for you",
      description:
        "I can help you to solve your problem with coding, and make your life easier",
      icon: <FaCode />,
      listItems: [
        "Web Development",
        "Machine Learning",
        "Web Scrapping",
      ],
    },
    {
      title: "What I'm intermediet on",
      description:
        "I'm intermediet on this programming language, and I'm still learning to master it",
      listItems: ["React", "Python", "Javascript"],
      icon: <FaReact />,
    },
    {
      title: "What you can expect me",
      description:
        "I will give you the best service, and make sure you are satisfied with my work",
      listItems: ["Clean code", "Functionality", "User Friendly"],
      icon: <FaBug />,
    },
  ];

  return (
    <div>
      <Menu />
      <div className=" text-center my-5">
        <h4 className="title">Services</h4>
        <h2 className="fw-bold">
          Solving your problem with coding,
          <br />
          and make your life easier.
        </h2>
      </div>
      <div className="container d-flex justify-content-evenly">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-xs-12 mb-5 d-flex justify-content-center">
              <CardServices key={index} card={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
