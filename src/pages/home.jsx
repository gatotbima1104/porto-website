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
            <h2 className="title mb-3 fw-bold">A Web Developer focus on Machine Learning and Websites</h2>
            <p className="mb-5">
              A passionate programmer, born and brought up in Indonesia. I am a
              Full Stack Web Developer with React.js, Express.js, Node.js,
              and PostgreSQL as my tech stack.
            </p>

            <a
              href="https://www.linkedin.com/in/muhamad-gatot-s-7b08491aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="me-5 button-56 fs-5 fw-bold mb-5">Hire me !</button>
            </a>

            <button onClick={handleButtonClick} className="cv fs-5 fw-bold">
              Download CV <FaArrowRight />
            </button>
          </div>
          <div className="col-md-6 text-center mb-5">
            <img src={poto} alt="poto" className="img-fluid w-50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
