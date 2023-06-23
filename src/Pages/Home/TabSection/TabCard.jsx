import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsEye } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import dot from "../../../assets/Vector.png";
import iconDate from '../../../assets/Icon/baseline-today-24px.png'
import jobIcon from '../../../assets/Icon/outline-work_outline-24px.png'
const TabCard = ({ post }) => {
  const { icon,image, title, des, author_img, author_name, view, category,date,location } =
    post || {};
  // console.log(post);
  return (
    <Card className="w-sm-100">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        {category === "job" ? (
          <img className="jobIcon" src={icon} />
        ) : (
          <h4 className="d-flex gap-2">
            <div className="icon_card">
              <img src={icon} alt="" />
            </div>
            <p> {category}</p>
          </h4>
        )}
        <div className="d-flex justify-content-between ">
          <Card.Title>{title}</Card.Title>
          <div>
            <img src={dot} alt="" />
          </div>
        </div>
        {category == "Article" ? <Card.Text>{des}</Card.Text> : <span></span>}
        {category == "Education" ? <Card.Text>{des}</Card.Text> : <span></span>}
        {category == "Meetup" ? (
          <div className="d-flex dateArea">
            <p className="date">
              <img src={iconDate} alt="" /> {""}
              {date}
            </p>{" "}
            <p className="location">
              <GrLocation />
              {""}
              {location}
            </p>
          </div>
        ) : (
          <span></span>
        )}
        {category == "job" ? (
          <div className="d-flex">
            <p className="date">
              <img src={jobIcon} alt="" /> {""}
              {post.company_name}
            </p>{" "}
            <p className="location">
              <GrLocation />
              {location}
            </p>
          </div>
        ) : (
          <span></span>
        )}
        {category === "job" && (
          <div className="job ">
            <button className="w-100">Apply on Times jobs</button>
          </div>
        )}{" "}
        {category === "Meetup" && (
          <div className="meetup">
            <button className="w-100">Visit Website</button>
          </div>
        )}
        <div className="d-flex justify-content-between  align-items-center">
          <div className="d-flex gap-3 align-items-center  ">
            <img src={author_img} alt="" />
            <p className="author_name">{author_name}</p>
          </div>
          <div className="">
            <p className="view">
              <BsEye /> <strong className="ms-2">{view}k views</strong>
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TabCard;
