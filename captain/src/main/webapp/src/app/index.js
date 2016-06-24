import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
        Hello World! Captain!
      </p>
    );
  }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<App />, app);