import React, { useContext, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/whole (1).png";
import { BsSearch, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { MdArrowDropDown } from "react-icons/md";
import loginImage from '../../assets/Login/Group 3.png'

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import { useForm, SubmitHandler } from "react-hook-form";

const Header = () => {

  const [show, setShow] = useState(false);
  const [log, setLog] = useState(false);
 


  const handleClose = () => setShow(false);
  const handleCloseLog = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSubmitReg = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;
    
    

  }
     const {
       register,
       handleSubmit,
       watch,
       formState: { errors },
     } = useForm();
  const onSubmit = (data) => {
   
  }
 
  return (
    <Container className="my-3 d-lg-block  d-none">
      <Row>
        <Col>
          <div>
            <Link>
              <img src={logo} alt="" />
            </Link>
          </div>
        </Col>
        <Col>
          <div className="src_area fw-medium">
            <BsSearch className="me-2" />
            Search for your favorite groups in ATG
          </div>
        </Col>

        <Col>
          <p className="login_btn" onClick={handleShow}>
            Create account.
            <strong className="fw-bold blue">
              It's free! <MdArrowDropDown size="33px" />
            </strong>
          </p>
          {log === true ? (
            <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header closeButton className="form_header">
                <h3>
                  Let's learn, share & inspire each other with our passion for
                  computer engineering. Sign up now 🤘🏼
                </h3>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h3 className="sign_in">Sign In</h3>
                      <div>
                        <input
                          type="email"
                          className="from_input"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                          {...register("email", { required: true })}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          placeholder="Password"
                          className="from_input"
                          {...register("password", { required: true })}
                        />
                      </div>

                      <input
                        type="submit"
                        value="Sign In"
                        className=" full_btn"
                      />
                      <div className="social_btn">
                        <button className="d-block">
                          <BsFacebook size="16px" className="me-2" />
                          Sign in with Facebook
                        </button>
                        <button onClick={""}>
                          <FcGoogle size="16px" className="me-2" />
                          Sign in with Google
                        </button>
                      </div>
                      <button className="d-block forgot">
                        Forgot Password?
                      </button>
                    </form>
                  </Col>
                  <Col>
                    <div className="form-image">
                      <h4 className="text-end">
                        Don't have an account yet? {""}
                        <strong onClick={() => setLog(!log)}>
                          Create New for free!
                        </strong>
                      </h4>
                      <img src={loginImage} alt="" />
                    </div>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
          ) : (
            <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header closeButton className="form_header">
                <h3>
                  Let's learn, share & inspire each other with our passion for
                  computer engineering. Sign up now 🤘🏼
                </h3>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col>
                    <form onSubmit={handleSubmitReg}>
                      <h3 className="sign_in">Create Account</h3>
                      <div className="d-flex name_area">
                        <input
                          type="text"
                          className="from_input"
                          aria-describedby="emailHelp"
                          placeholder="First Name"
                        />{" "}
                        <input
                          type="text"
                          className="from_input"
                          aria-describedby="emailHelp"
                          placeholder="Last Name"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          className="from_input"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                          name="email"
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          placeholder="Password"
                          className="from_input"
                          name="password"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          className="from_input"
                        />
                      </div>

                      <input
                        type="submit"
                        value="Sign In"
                        className=" full_btn"
                      />
                      <div className="social_btn">
                        <button className="d-block">
                          <BsFacebook size="16px" className="me-2" />
                          Sign in with Facebook
                        </button>
                        <button onClick={""}>
                          <FcGoogle size="16px" className="me-2" />
                          Sign in with Google
                        </button>
                      </div>
                    </form>
                  </Col>
                  <Col>
                    <div className="form-image">
                      <h4 className="text-end">
                        Already have an account?{" "}
                        <strong onClick={() => setLog(!log)}>Sign In</strong>
                      </h4>
                      <img src={loginImage} alt="" />
                      <p className="form_buttom text-end mt-5">
                        By signing up, you agree to our Terms & conditions,
                        Privacy policy
                      </p>
                    </div>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
          )}
          <></>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
