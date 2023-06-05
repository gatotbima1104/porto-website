import React from "react";
import { Container } from "react-bootstrap";
import Menu from "../components/navigasi";

const Project = () => {
  return (
    <div>
      <Menu />
      <Container className="mt-3">
        <h5 className="fw-bold">PROJECT</h5>
        <div className="row d-flex">
          <h3 className="fw-bold">
            I bring results. <br /> My clients are proof.
          </h3>
          <a
            href="https://github.com/gatotbima1104"
            target="_blank"
            rel="noopener noreferrer"
            className="text-end"
          >
            <button className="me-5 button-56 fs-5 fw-bold">
              view all project
            </button>
          </a>
        </div>

        <div>
          <div class="section full-height over-hide px-4 px-sm-0">
            <div class="container">
              <div class="row full-height justify-content-center">
                <div class="col-lg-10 col-xl-8 align-self-center padding-tb">
                  <div class="section mx-auto text-center slider-height-padding">
                    <input
                      class="checkbox frst"
                      type="radio"
                      id="slide-1"
                      name="slider"
                      checked
                    />
                    <label for="slide-1"></label>
                    <input
                      class="checkbox scnd"
                      type="radio"
                      name="slider"
                      id="slider-2"
                    />
                    <label for="slider-2"></label>
                    <input
                      class="checkbox thrd"
                      type="radio"
                      name="slider"
                      id="slider-3"
                    />
                    <label for="slider-3"></label>
                    <input
                      class="checkbox foth"
                      type="radio"
                      name="slider"
                      id="slider-4"
                    />
                    <label for="slider-4"></label>
                    <ul>
                      <li>
                        <span>SEEMA COFFE</span>
                      </li>
                      <li>
                        <span>WEVENT US</span>
                      </li>
                      <li>
                        <span>EVENT KAMI</span>
                      </li>
                      <li>
                        <span>PORGRAMMER FACE</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Project;
