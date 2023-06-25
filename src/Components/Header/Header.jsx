import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/whole (1).png";
import { BsSearch, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { MdArrowDropDown } from "react-icons/md";
import loginImage from "../../assets/Login/Group 3.png";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
// import { useForm, SubmitHandler } from "react-hook-form";

const Header = () => {
  const [show, setShow] = useState(false);
  const [log, setLog] = useState(false);
  const [pass, setPass] = useState(false);
const [user,setUser] = useState(false)

  const handleClose = () => setShow(false);
  const handleCloseLog = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmitReg = (event) => {
    event.preventDefault();
    const form = event.target;
   const email = form.email.value;
    const fstName = form.fstName.value;
    const lstName = form.lstName.value;
    const password = form.pass.value;
    const fullName = fstName + lstName;
    const registerUser = {
      email,
      password,
      fullName,
    };

    fetch("http://localhost:3000/add-users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(registerUser),
    })
      .then((res) => res.json())
      .then((data) => {
       
        if (data.message == "user already exists") {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: " Oops user already exists",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration sucessfully Done..",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          fetch("http://localhost:3000/user", {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(registerUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
          setUser(!user)
          
         
        }
      });
  };
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const loginInfo = {
      email,
      password,
    };
    fetch("http://localhost:3000/login-verify", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "true") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successful",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
           fetch("http://localhost:3000/user", {
             method: "PATCH",
             headers: {
               "content-type": "application/json",
             },
             body: JSON.stringify(loginInfo),
           })
             .then((res) => res.json())
             .then((data) => {
               console.log(data);
             });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: " Please enter Your valid Password and Email",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
        reset();
      });
  };

  const handleForget = () => {
    setPass(!pass);
  };

  const handleForgetServer = (e) => {
    e.preventDefault();
    const passwordUpdate = e.target.changePass.value;
    const email = e.target.email.value;
    const allUpdate = {
      email,
      passwordUpdate
    }
    axios
      .patch("http://localhost:3000/update-password", { allUpdate })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Password Change..",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    setPass(!pass)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: " Email address does not match, !",
      footer: 'Please Create account',
    });
  };
 
console.log(user);
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
                    {pass == true ? (
                      <form onSubmit={handleForgetServer}>
                        <input
                          type="email"
                          placeholder="Enter your Email"
                          className="from_input mb-4"
                          required
                          name="email"
                        />
                        <input
                          type="password"
                          placeholder="Enter Your new Password"
                          className="from_input mb-4"
                          required
                          name="changePass"
                        />
                        <input
                          type="submit"
                          value="Change password"
                          className=" full_btn"
                        />
                      </form>
                    ) : (
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
                        <button
                          className="d-block forgot mb-2"
                          onClick={handleForget}
                        >
                          Forgot Password?
                        </button>
                      </form>
                    )}
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
                          name="fstName"
                        />{" "}
                        <input
                          type="text"
                          className="from_input"
                          aria-describedby="emailHelp"
                          placeholder="Last Name"
                          name="lstName"
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
                          name="pass"
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
