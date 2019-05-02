import React, { Component } from 'react';
import '../CSS/History.css';
import Image1 from "../Images/davinci.jpg";
import Image2 from "../Images/phone.jpg";
import Image3 from "../Images/ipad.jpg";
import Image4 from "../Images/iphone.jpg";
import Image5 from "../Images/nintendoplaystation.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <h2>
          Prototypes Throughout History
        </h2>
        <img src={Image1} className= "image-davinci"/>
        <h3 className = " header-history">
          Leonardo da Vinci's Robot
        </h3>
        <p className = "history-p">
          In 1495, Leonardo da Vinci was said to have created a functional robot that
          operated on a system of pulleys, cables, gears, and cranks. He presented this
          to Duke of Milan who wanted an indestructible mechanized soldier. Nobody was
          able to verify if the protoype actually existed. Working models of da Vinci's
          notes have been created by NASA in 2002 and Mario Taddei in 2007.
        </p>
        <img src={Image2} className= "image-davinci"/>
        <h3 className = " header-history">
          Push-Button Telephone
        </h3>
        <p className = "history-p">
          In the 1940's Bell Labs engineers wanted to move past the laborious
          dialing of rotary phones. They took an old Western Electric 302 tabletop rotary
          and installed a set of 10 metal reeds. The test units were deployed to 35 homes
          in Pennsylvania, but the technology was not ready and never made it out of the
          testing phase. Push button phones would not see consumer use until 1963.
        </p>
        <img src={Image3} className= "image-davinci"/>
        <h3 className = "header-history">
          iPad
        </h3>
        <p className = "history-p">
          Apple had begun working on the concept of the iPad long before most people
          are aware. Prototypes of the iPad can be found as far back as 1983, 27 years
          before the 1st generation iPad would eventually release. In 1983, Steve Jobs said he
          wanted to "put an incredibly great computer in a book that you can carry around
          with you"
        </p>
        <img src={Image4} className= "image-davinci"/>
        <h3 className = "header-history">
          iPhone
        </h3>
        <p className = "history-p">
          Not only did Apple begin prototyping the iPad decades ago, but also
          the iPhone. While it wasn't portable, it did feature a touchscreen and
          was shown using an accounting app.
        </p>
        <img src={Image5} className= "image-davinci"/>
        <h3 className = "header-history">
          The Nintendo Playstation
        </h3>
        <p className = "history-p-last">
          Some prototypes never enter production. The Nintendo Playstation was created
          through a partnership between Nintendo and Sony, two of the major video game
          hardware manufacturers. Originally, they had begun working with each other
          to create a CD-ROM add-on for the SNES. This eventually fell through and Nintendo
          decided to partner with Philips instead. Sony went on to develop there own hardware
          which eventually became the original Playstation.
        </p>
      </div>
    );
  }
}

export default App;
