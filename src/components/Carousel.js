import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {v4 as uuidv4} from "uuid";
import { config } from "react-spring";
import Modal from "./Modal";

const data = require('../data/contents.js')
const information = data.array

let imageWidth = "w-2/4"
let divStyling = "flex flex-col-reverse content-center justify-center justify-items-center items-center mt-6"
let slides = [
  {
    key: uuidv4(),
    content: 
    <div class={`${divStyling}`}>
    <Modal keys={3} project={information[0]}> </Modal>
      <img src="/images/3.png" alt="Merck RFID" class={`${imageWidth}`}/>
    </div>
  },//2145
  {
    key: uuidv4(),
    content:
    <div class={`${divStyling}`}>
    <Modal keys={2} project={information[1]}> </Modal>
      <img src="/images/2.png" alt="Zensocial" class={`${imageWidth}`}/>
    </div>
  },
  {
    key: uuidv4(),
    content:
    <div class={`${divStyling}`}>
    <Modal keys={1} project={information[2]}> </Modal>
      <img src="/images/1.png" alt="KChat" class={`${imageWidth}`}/>
    </div>
  },
  {
    key: uuidv4(),
    content: 
    <div class={`${divStyling}`}>
      <Modal keys={4} project={information[3]}> </Modal>
      <img src="/images/4.png" alt="GROW" class={`${imageWidth}`}/>
    </div>
  },
  {
    key: uuidv4(),
    content: 
    <div class={`${divStyling}`}>
      <Modal keys={5} project={information[4]}> </Modal>
      <img src="/images/5.png" alt="EVE Holdings" class={`${imageWidth}`}/>
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
      <div class="grid grid-cols-1">
        {slides[0]["content"]}
        {slides[1]["content"]}
        {slides[2]["content"]}
        {slides[3]["content"]}
        {slides[4]["content"]}
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
