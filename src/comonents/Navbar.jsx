import { useEffect, useRef, useState } from "react";
import logo from "../../public/images/logo.png";
import user from "../../public/images/user.png";
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {


const inputRef = useRef(null);



  const [scroll, setScrollNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollNav(window.scrollY > 10);
    });
  });



  const scrollToTop = () => {
    scroll.scrollToTop();
  };



  return (
    <>
     <section className="navigation">
     <nav className={`navbar navbar-expand-lg ${scroll ? "sticky" : ""}`}>
        <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#" >
        <img src={logo} alt="logo" srcSet=""  onClick={scrollToTop} />
        Portfolio
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div ref={inputRef} className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto my-3 my-lg-0">
        <li className="nav-item">

            <Link className="nav-link"
                data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-0}
                duration={500}
              >
                Home
              </Link>
        </li>
        <li className="nav-item">

        <Link className="nav-link"
               data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About me
              </Link>


        </li>
        <li className="nav-item">

        <Link className="nav-link"
                 data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               Resume
              </Link>

        </li>
            <li className="nav-item">

                <Link className="nav-link" 
                  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                Skills
                </Link>

            </li>
        <li className="nav-item">
        <Link className="nav-link" 
          data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               Works
              </Link>
        </li>
        <li className="nav-item">
        
         <Link className="nav-link"
           data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                activeClass="active"
                to="conact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               Conact
              </Link>
        </li>
        </ul>
        <div className="user">
          <img src={user} alt="vinod patil" srcSet="" />
        </div>
        </div>
        </div>
    </nav>
    </section>
   </>
  )
}

export default Navbar;