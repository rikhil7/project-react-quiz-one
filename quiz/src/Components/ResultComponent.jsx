import React, { Component } from 'react'

export default class ResultComponent extends Component {
  render() {
    return (
      <div id='result-parent'>
        <div id='heading'>RESULT</div>
        <div id='result-box'>
            <div id='tagline'>You need more practice!</div>
            <div id='score'>Your score is 20%</div>
            <div id='stats'>
                <div id='stat'>
                    <div className='stat-name'>Total No. of Questions</div>
                    <div className='stat-number'>15</div>
                </div>
                <div id='stat'>
                    <div className='stat-name'>No. of Attempted Questions</div>
                    <div className='stat-number'>9</div>
                </div>
                <div id='stat'>
                    <div className='stat-name'>No. of correct answers</div>
                    <div className='stat-number'>3</div>
                </div>
                <div id='stat'>
                    <div className='stat-name'>No. of Wrong Answers</div>
                    <div className='stat-number'>6</div>
                </div>
            </div>
            <div id='buttons'>
                <button className='play-again'>Play Again</button>
                <button className='home'>Back to Home</button>
            </div>
        </div>
      </div>
    )
  }
}
