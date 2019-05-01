import React, { Component } from 'react';
import '../CSS/Concepts.css';
import Image1 from "../Images/prototyping1.jpeg";

class App extends Component {
  render() {
    return (
      <div>
        <h2 className="padding-left: 20px">
          What is Prototyping?
        </h2>
        <img src={Image1} className= "images"/>
        <p>
        A prototype is an early sample,
        model, or release of a product or idea
        built to test a concept or process or
        to act as a thing to be replicated or
        learned from. To put it simply, it is an experimental model
        of a proposed solution that is intended to test and validate ideas.
        They allow us to test our ideas quickly and improve them in a timely fashion
        and at a low cost.
      </p>
      <p>
        These prototypes can take many forms and don't necessarily need to be
        functional products. Sketches and storyboards are examples of prototypes that
        are used to illustrate a proposed to solution to a given problem. Paper
        prototypes of digital interfaces can be used to evaluate a potential user
        interface before a single line of code is written. These can take the form of
        low-fidelity, high-fidelity prototype or somwhere in the middle.
      </p>
        <p className="p3">
          Examples of low-fidelity:
          <ul>
            <li>Storyboards</li>
            <li>Sketches</li>
            <li>Paper interfaces</li>
          </ul>
        </p>

        <p className="p2">
        Examples of high-fidelity:
          <ul>
            <li>Functional Website</li>
            <li>Functional Software(Alpha and Beta versions)</li>
            <li>A device that closely resemble the final product</li>
          </ul>
        </p>

      </div>
    );
  }
}

export default App;
