/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import './DeviceProducts.less';

class DeviceProducts extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    
    return (
      <div className="device-products">
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

DeviceProducts.propTypes = {};

DeviceProducts.defaultProps = {};

export default connect(mapStateToProps)(DeviceProducts)