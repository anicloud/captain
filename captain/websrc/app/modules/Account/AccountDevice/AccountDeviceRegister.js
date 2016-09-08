/**
 * Created by huangbin on 7/29/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import MdPerson from 'react-icons/lib/md/person';
import MdHome from 'react-icons/lib/md/home';
import MdAssignment from 'react-icons/lib/md/assignment';
import {updateAccountDevice} from '../actions';

class AccountDeviceRegister extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {

    };
  }

  componentWillMount() {
    this.redirectToSettings(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.redirectToSettings(nextProps);
  }


  redirectToSettings(props) {
    if (!!props.account.entity.vendor) {
      props.push('/account/device');
    }
  }

  onSubmit() {
    const refs = this.refs;
    const accountData = {
      vendor: refs.vendor.value,
      intro: refs.intro.value,
      home: refs.home.value
    };
    this.props.updateAccountDevice(accountData);
  }

  render() {
    const state = this.state;
    const props = this.props;

    return (
      <div className="account-register">
        <div className="title">设备开发者申请</div>
        <div className="description">欢迎加入Anicloud成为设备开发者，轻松实现和分享您的创意，让更多人受益！</div>
        <div className="form">
          <div className="input-row">
            <div className="input-label">
              <span className="icon"><MdPerson/></span>
            </div>
            <div className="input-box"><input ref="vendor" type="text" placeholder="公司/机构"/></div>
          </div>
          <div className="input-row">
            <div className="input-label"><span className="icon"><MdHome/></span></div>
            <div className="input-box"><input ref="home" type="text" placeholder="主页"/></div>
          </div>
          <div className="input-row">
            <div className="input-label"><span className="icon"><MdAssignment/></span></div>
            <div className="input-box"><textarea ref="intro" placeholder="简介"/></div>
          </div>
        </div>
        <div className="action">
          <button className="btn btn-default" onClick={this.onSubmit}>提交申请</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    account: state.account.device
  };
}

AccountDeviceRegister.propTypes = {};

AccountDeviceRegister.defaultProps = {};

export default connect(mapStateToProps, {
  push,
  updateAccountDevice
})(AccountDeviceRegister)