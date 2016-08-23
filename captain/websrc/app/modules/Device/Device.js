/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Link from 'react-router/lib/Link';
import {loadDevice} from './actions';

import './Device.less'

class Device extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const products = this.props.products;
    if (!products.loaded && !products.loading) {
      this.props.loadDevice();
    }
  }

  render() {
    const state = this.state;
    const props = this.props;

    return (
      <div className="device">
        <div className="navs">
          <ul>
            <Link to="/device/products" activeClassName="active"><li>设备产品线</li></Link>
            <Link to="/device/reports" activeClassName="active"><li>统计信息</li></Link>
          </ul>
        </div>
        {props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.device.products
  };
}

Device.propTypes = {
};

Device.defaultProps = {
};

export default connect(mapStateToProps, {
  loadDevice
})(Device)