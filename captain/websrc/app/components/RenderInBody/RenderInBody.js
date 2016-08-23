/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import ReactDom from 'react-dom';

class RenderInBody extends Component {
  constructor(props) {
    super(props);
    this.elem = undefined;
  }

  componentDidMount() {
    this.elem = document.createElement("div");
    document.body.appendChild(this.elem);
    this._render();
  }

  componentWillUnmount() {
    document.body.removeChild(this.elem);
  }

  componentDidUpdate() {
    this._render();
  }

  _render() {
    ReactDom.render(<div {...this.props}> {this.props.children}</div>, this.elem);
  }

  render() {
    return null;
  }
}

RenderInBody.propTypes = {

};

RenderInBody.defaultProps = {

};


export default RenderInBody;