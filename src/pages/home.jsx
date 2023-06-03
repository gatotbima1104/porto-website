import "bootstrap/dist/css/bootstrap.min.css";
import poto from "../asset/poto.jpg";
import { FaArrowRight } from "react-icons/fa";
import Menu from "../components/navigasi";


function Home() {
  const handleButtonClick = () => {
    const url =
      "https://drive.google.com/file/d/1u8IR6LIYS2dMXUkltslUBtQDluQj7EXn/view?usp=sharing";
    window.open(url, "_blank");
  };
  return (
    <div>
      
      <Menu />

      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 mb-5">
            <h2>I’m web developer Focus on Machine Learning and Websites</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem perferendis dolorem non eligendi iste veniam
              officia hic corrupti modi numquam!
            </p>

            <a
              href="https://www.linkedin.com/in/muhamad-gatot-s-7b08491aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="me-3">Hire me !</button>
            </a>

            <button onClick={handleButtonClick}>
              Download CV <FaArrowRight />
            </button>
          </div>
          <div className="col-md-6 text-center">
            <img src={poto} alt="poto" className="img-fluid w-50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
