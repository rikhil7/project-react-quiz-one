import React, { Component } from "react";

export default class QuizComponent extends Component {
  render() {
    return (
      <div id="quiz-parent">
        <div id="quiz-box">
          <div id="quiz-head">
            <div id="heading">Question</div>
            <div id="q-num">1 of 15</div>
            <div id="question">Which is the only mammal which can jump?</div>
          </div>
          <div id="options-div">
            <div className="opt-row">
              <div className="option">Dog</div>
              <div className="option">Elephant</div>
            </div>
            <div className="opt-row">
              <div className="option">Goat</div>
              <div className="option">Lion</div>
            </div>
          </div>
          <div id="buttons">
            <button className="prev">PREVIOUS</button>
            <button className="quit">QUIT</button>
            <button className="next">NEXT</button>
          </div>
        </div>
      </div>
    );
  }
}
