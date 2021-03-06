import { Container } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
import first from "../../../assets/images/swipperFir.svg";
import second from "../../../assets/images/swipperSec.svg";
export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "70px",
      slidesToShow: 2,
      speed: 500,
    };
    return (
      <Container>
        <div className="p-3">
          <Slider {...settings}>
            <div>
              <img src={first} alt="" />
            </div>
            <div>
              <img src={second} alt="" />
            </div>
            <div>
              <img src={first} alt="" />
            </div>
            <div>
              <img src={second} alt="" />
            </div>
            <div>
              <img src={first} alt="" />
            </div>
            <div>
              <img src={second} alt="" />
            </div>
          </Slider>
        </div>
      </Container>
    );
  }
}
