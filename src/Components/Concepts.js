import React, { Component } from 'react';
import '../CSS/Concepts.css';
import Image1 from "../Images/prototyping1.jpeg";
import Image2 from "../Images/prototyping2.jpg";
import Image3 from "../Images/prototyping4.jpg";

class App extends Component {
  render() {
    return (
      <div>
      <div>
        <h2 className="concept-headers-left">
          What is Prototyping?
        </h2>
        <img src={Image1} className= "images-right"/>
        <p className="concept-p">
        A prototype is an early sample,
        model, or release of a product or idea
        built to test a concept or process or
        to act as a thing to be replicated or
        learned from. To put it simply, it is an experimental model
        of a proposed solution that is intended to test and validate ideas.
        They allow us to test our ideas quickly and improve them in a timely fashion
        and at a low cost.
      </p>
      <p className="concept-p">
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


      <div>
        <h2 class="concept-headers-right">
          High vs Low fidelity
        </h2>
        <img src={Image2} class="images-left"/>
        <p className="concept-p">
          Deciding when to use high-fideltiy prototypes vs low-fidelity prototypes
          is dependent on the purpose of the prototype. Low-fidelity prototypes are
          much less expensive and take much less time to develop. They are very useful
          for enabling early visualization of alternative design decision and if a
          change is suggested, it is very easy to implement. On the other hand,
          high-fidelity prototypes are usually computer based and are highly functional.
          They allow for user interaction and can track user tendencies that help
          influence future changes. They are much more effective than low-fidelity
          prototypes, but are much more expensive and take much more time to develop.
          Suggest changes to high-fiedelity prototypes require a significant amount of
          time to see implemented.
        </p>
        <p className="p3">
          When to use low-fidelity:
          <ul>
            <li>Early in Development</li>
            <li>Not much time</li>
            <li>Low budget</li>
          </ul>
        </p>

        <p className="p2">
        When to use high-fidelity:
          <ul>
            <li>Only room for a few iterations</li>
            <li>Much more feedback is necessary</li>
            <li>Large budget</li>
          </ul>
        </p>
      </div>
      <div class="margin-top: 1000px">
        <h2 class="concept-headers-left-2">
          Where does prototyping fall in the development cycle?
        </h2>
        <img src={Image3} class="images-right"/>
      </div>
      <p className="concept-p">
        Prototyping is an integral part of the development cycle. There are many
        different forms of the development cycle, but they all take a similar form:
        <ol class="list">
          <li>Define the problem</li>
          <li>Collect Information</li>
          <li>Brainstorm</li>
          <li>Prototype</li>
          <li>Feedback</li>
          <li>Improve the design based on feedback</li>
        </ol>
      </p>
      <p className="concept-p">
        Defining the problem and collecting information are essential to developing
        prototypes that will result in valuable feedback. After information has
        been gathered and ideas have been formulated, it's time to build a prototype.
        A test group will evaluate the effectiveness of the prototype and provide
        feedback for the designers to take back and apply to future designs.
        Each of these steps are key to developing a successful design. 
      </p>
      </div>
    );
  }
}

export default App;
