/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import RenderInBody from '../RenderInBody';

import './Modal.less';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    const state = this.state;
    const props = this.props;
    const classes = {
      'modal': 1,
      [props.className]: !!props.className
    };
    return (
      <RenderInBody>
        <div className={classNames(classes)}>
          {props.children}
        </div>
        <div className="modal-backdrop"></div>
      </RenderInBody>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

Modal.propTypes = {};

Modal.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Modal)