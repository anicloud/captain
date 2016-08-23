/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import './DeviceAccount.less'

class DeviceAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    const state = this.state;
    const props = this.props;
    
    return (
      <div className="device-account">
        {props.children}
      </div>
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

DeviceAccount.propTypes = {

};

DeviceAccount.defaultProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(DeviceAccount)