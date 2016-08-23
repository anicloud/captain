/**
 * Created by huangbin on 7/29/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import MdPerson from 'react-icons/lib/md/person';
import MdEmail from 'react-icons/lib/md/email';
import MdHome from 'react-icons/lib/md/home';
import MdPhone from 'react-icons/lib/md/phone';
import MdAccountBox from 'react-icons/lib/md/phone';
// import {MdPerson, MdPhone, MdEmail, MdHome, MdAccountBox} from 'react-icons/lib/md'

class DeviceAccountRegister extends Component {
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
      <div className="account-register">
        <div className="title">设备开发者申请</div>
        <div className="description">欢迎加入Anicloud成为设备开发者，轻松实现和分享您的创意，让更多人受益！</div>
        <div className="form">
          <div className="input-row">
            <div className="input-label">
              <span className="icon"><MdPerson/></span>
            </div>
            <div className="input-box"><input type="text" placeholder="称呼"/></div>
          </div>
          <div className="input-row">
            <div className="input-label"><span className="icon"><MdEmail/></span></div>
            <div className="input-box"><input type="text" placeholder="邮箱"/></div>
          </div>
          <div className="input-row">
            <div className="input-label"><span className="icon"><MdPhone/></span></div>
            <div className="input-box"><input type="text" placeholder="手机号码"/></div>
          </div>
          <div className="input-row">
            <div className="input-label"><span className="icon"><MdHome/></span></div>
            <div className="input-box"><input type="text" placeholder="公司/机构"/></div>
          </div>
          <div className="input-row">
            <div className="input-label"><span className="icon"><MdAccountBox/></span></div>
            <div className="input-box"><textarea placeholder="个人简介"/></div>
          </div>
        </div>
        <div className="action">
          <button className="btn btn-default">提交申请</button>
        </div>
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

DeviceAccountRegister.propTypes = {
};

DeviceAccountRegister.defaultProps = {
};

export default connect(mapStateToProps)(DeviceAccountRegister)