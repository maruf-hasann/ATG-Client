import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { MdArrowDropDown, MdExitToApp } from "react-icons/md";
import locationIcon from '../../../assets/Icon/outline-location_on-24px 2.png'
import groupIcon from '../../../assets/Icon/baseline-group_add-24px.png'
import editIcon from '../../../assets/Icon/baseline-edit-24px.svg'
import errorIcon from '../../../assets/Icon/baseline-error_outline-24px.svg'
import thumbIcon from '../../../assets/Icon/twotone-thumb_up-24px.svg'
import imgOne from '../.../../../../assets/Image/Rectangle 6.png'
import imgTwo from '../.../../../../assets/Image/Rectangle 6 (1).png'

// import SingleTab from './SingleTab';
const TabSection = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://atg-server-dusky.vercel.app/post")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [])
  // console.log(posts);
const {user} = useContext(AuthContext)
  return (
    <Container>
      <Row>
        <Col lg="7" sm="12">
          <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
            <TabList className="d-none d-lg-block">
              <Tab>All Posts(32)</Tab>
              <Tab>Article</Tab>
              <Tab>Event</Tab>
              <Tab>Education</Tab>
              <Tab>Job</Tab>
            </TabList>
            <div className="d-block d-lg-none">
              <div className="d-flex justify-content-between mb-4">
                <h2>Post (368)</h2>
                <div className="filter">
                  Filter: All <MdArrowDropDown />
                </div>
              </div>
            </div>
            <TabPanel>
              <div>
                {posts?.map((p) => (
                  <TabCard key={p._id} post={p}></TabCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <h1>a</h1>
            </TabPanel>{" "}
            <TabPanel>
              <h1>e</h1>
            </TabPanel>{" "}
            <TabPanel>
              <h1>E</h1>
            </TabPanel>{" "}
            <TabPanel>
              <h1>J</h1>
            </TabPanel>
          </Tabs>
        </Col>
        <Col lg="5" className="right_col">
          <div className="d-none d-lg-block">
            {user ? (
              <div className="ms-5 mb-5">
                <button className="btn_left">Write a Post</button>
                <button className="leave_btn">
                  <MdExitToApp />
                  Leave Group
                </button>
              </div>
            ) : (
              <div className="ms-5 mb-5">
                <button className="btn_left">Write a Post</button>
                <button className="btn_blue">
                  <img src={groupIcon} alt="" /> Join Group
                </button>
              </div>
            )}
            <div className="user_area ms-5">
              <div className="d-flex justify-content-between location_area">
                <div>
                  <img src={locationIcon} alt="" /> Noida, India{" "}
                  <hr className="hr" />
                </div>
                <img src={editIcon} className="mb-4" alt="" />
              </div>
              <p className="error">
                <img src={errorIcon} alt="" className="me-2" />
                Your location will help us serve better and extend a
                personalised experience.
              </p>
              {user && (
                <div className="user_info">
                  <h4 className="mb-3">
                    {" "}
                    <img src={thumbIcon} alt="" className="me-2 mb-2" />
                    REcommended Groups
                  </h4>
                  <div>
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <div className="d-flex">
                          <img src={imgOne} className="me-3" />
                          <h4>Leisure</h4>
                        </div>
                      </div>
                      <div>
                        <strong>Follow</strong>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="d-flex">
                          <img src={imgTwo} className="me-3" />
                          <h4>Activism</h4>
                        </div>
                      </div>
                      <div>
                        <strong>Follow</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TabSection;
