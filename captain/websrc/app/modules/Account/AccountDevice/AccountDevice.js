/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {loadAccountDevice} from '../actions';
import Loading from 'components/Loading';

import './AccountDevice.less'

class AccountDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.loadAccountDevice();
  }

  render() {
    const state = this.state;
    const props = this.props;

    if (props.account.loading) {
      return (
        <Loading />
      );
    } else {
      return (
        <div className="device-account">
          {props.children}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    account: state.account.device
  };
}

AccountDevice.propTypes = {};

AccountDevice.defaultProps = {};

export default connect(mapStateToProps, {
  loadAccountDevice
})(AccountDevice)