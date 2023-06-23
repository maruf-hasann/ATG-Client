import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { AiOutlineArrowLeft } from "react-icons/ai";
const Hero = () => {
    return (
      <>
        <div className="hero d-none d-lg-block">
          <Container>
            <div className="hero_text d-flex justify-content-end flex-column">
              <h2 className="fw-bold text-white hero-heading">
                Computer Engineering
              </h2>
              <p className="text-white hero-info">
                142,765 Computer Engineers follow this
              </p>
            </div>
          </Container>
        </div>

        <div className="bg-danger d-lg-none hero-mobile mb-4">
          <Container>
            <div className='d-flex justify-content-between py-4'>
              <div><AiOutlineArrowLeft className='text-white ' size='30'/></div>
              <div>
                <button className='join'>Join Group</button>
              </div>
            </div>
            <div >
              <h2 className="fw-bold text-white hero-heading">
                Computer Engineering
              </h2>
              <p className="text-white hero-info">
                142,765 Computer Engineers follow this
              </p>
            </div>
          </Container>
        </div>
      </>
    );
};

export default Hero;