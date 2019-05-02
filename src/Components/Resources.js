import React, { Component } from 'react';
import '../CSS/Resources.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2> Resources </h2>
        <p className = "resources-p">
          <a href="https://www.interaction-design.org/literature/article/prototyping-learn-eight-common-methods-and-best-practices">https://www.interaction-design.org/literature/article/prototyping-learn-eight-common-methods-and-best-practices</a>
        </p>
        <p className = "resources-p">
          <a href="https://www.usability.gov/how-to-and-tools/methods/prototyping.html">https://www.usability.gov/how-to-and-tools/methods/prototyping.html</a>
        </p>
        <p className = "resources-p">
          <a href="https://www.interaction-design.org/literature/article/stage-4-in-the-design-thinking-process-prototype">https://www.interaction-design.org/literature/article/stage-4-in-the-design-thinking-process-prototype</a>
        </p>
        <p className = "resources-p">
          <a href="https://blog.prototypr.io/what-the-hell-is-rapid-prototyping-fe101e446a78">https://blog.prototypr.io/what-the-hell-is-rapid-prototyping-fe101e446a78</a>
        </p>
        <p className = "resources-p">
          <a href="https://www.asme.org/engineering-topics/articles/manufacturing-design/top-4-ancient-design-prototypes">https://www.asme.org/engineering-topics/articles/manufacturing-design/top-4-ancient-design-prototypes</a>
        </p>
        <p className = "resources-p">
          <a href="https://www.techeblog.com/10-early-and-rarely-seen-prototypes-of-now-famous-gadgets/">https://www.techeblog.com/10-early-and-rarely-seen-prototypes-of-now-famous-gadgets/</a>
        </p>
        <p className = "resources-p">
          <a href="https://www.wired.com/2010/08/ff-prototypes/">https://www.wired.com/2010/08/ff-prototypes/</a>
        </p>
      </div>
    );
  }
}

export default App;
