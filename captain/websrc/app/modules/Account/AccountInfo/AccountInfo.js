/**
 * Created by huangbin on 7/29/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import FileInput from 'components/FileInput';
import {host} from '../../constants';
import './AccountInfo.less'

class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
    this.state = {};
  }

  componentDidMount() {
  }

  onLogout() {
  }

  render() {
    const state = this.state;
    const props = this.props;

    return (
      <div className="account-info">
        <div className="account-form">
          <div className="form-content container-fluid">
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">头像</div>
                <div className="description">个人头像</div>
              </div>
              <div className="item-value col-lg-8">
                <FileInput imgSrc={props.info.entity.avatarUrl}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">名称</div>
                <div className="description">个人名称。</div>
              </div>
              <div className="item-value col-lg-8">
                <input type="text" defaultValue={props.info.entity.name}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">邮箱</div>
                <div className="description">用户注册的邮箱。</div>
              </div>
              <div className="item-value col-lg-8">
                <input type="text" defaultValue={props.info.entity.email}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">电话</div>
                <div className="description">用户注册的电话号码。</div>
              </div>
              <div className="item-value col-lg-8">
                <input type="text" defaultValue={props.info.entity.phoneNumber}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">登出</div>
                <div className="description">登出当前账号</div>
              </div>
              <div className="item-value col-lg-8">
                <a href={host + '/logout/cas'}>
                  <button className="btn btn-error">登出账号</button>
                </a>
              </div>
            </div>
          </div>
          <div className="form-action">
            <button className="btn btn-default btn-save">保存</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    info: state.account.info
  };
}

AccountInfo.propTypes = {};

AccountInfo.defaultProps = {};

export default connect(mapStateToProps)(AccountInfo)