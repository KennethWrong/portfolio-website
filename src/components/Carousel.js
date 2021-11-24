import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import Modal from "./Modal";

const data = require('../data/contents.js')
const information = data.array

let slides = [
  {
    key: uuidv4(),
    content: 
    <div>
    <Modal keys={3} project={information[0]}> </Modal>
      <img src="/images/3.png" alt="Merck RFID"/>
    </div>
  },//2145
  {
    key: uuidv4(),
    content:
    <div>
    <Modal keys={2} project={information[1]}> </Modal>
      <img src="/images/2.png" alt="Zensocial"/>
    </div>
  },
  {
    key: uuidv4(),
    content:
    <div>
    <Modal keys={1} project={information[2]}> </Modal>
      <img src="/images/1.png" alt="KChat"/>
    </div>
  },
  {
    key: uuidv4(),
    content: 
    <div>
      <Modal keys={4} project={information[3]}> </Modal>
      <img src="/images/4.png" alt="GROW" />
    </div>
  },
  {
    key: uuidv4(),
    content: 
    <div>
      <Modal keys={5} project={information[4]}> </Modal>
      <img src="/images/5.png" alt="EVE Holdings" />
    </div>
  },
];

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
    </div>
      </div>
    );
  }
}
