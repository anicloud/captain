/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import FileInput from 'components/FileInput';
import Loading from 'components/Loading';
import {loadAccountApp, updateAccountApp, destroyAccountApp} from '../actions';

class AccountAppSettings extends Component {
  constructor(props) {
    super(props);
    this.onDestroy = this.onDestroy.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.state = {};
  }

  componentWillMount() {
    this.redirectToRegister(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.redirectToRegister(nextProps);
  }

  redirectToRegister(props) {
    if (!props.account.entity.vendor) {
      props.push('/account/app/register');
    }
  }

  onDestroy() {
    this.props.destroyAccountApp();
  }

  onUpdate() {
    const accountData = {
      home: this.refs.home.value,
      vendor: this.refs.vendor.value,
      intro: this.refs.intro.value
    };
    this.props.updateAccountApp(accountData);
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
        <div className="account-manager">
          <div className="account-form">
            <div className="form-content container-fluid">
              <div className="form-item row">
                <div className="item-key col-lg-6 col-lg-offset-3">
                  <div className="name">图标</div>
                  <div className="description">开发者Logo，将显示在应用商店</div>
                </div>
                <div className="item-value col-lg-8">
                  <FileInput imgSrc={props.account.entity.logo}>上传图片</FileInput>
                </div>
              </div>
              <div className="form-item row">
                <div className="item-key col-lg-6 col-lg-offset-3">
                  <div className="name">开发者</div>
                  <div className="description">开发者名称，将显示在商店的作者栏。长度不超过32个字符。</div>
                </div>
                <div className="item-value col-lg-8">
                  <input type="text" ref="vendor" defaultValue={props.account.entity.vendor}/>
                </div>
              </div>
              <div className="form-item row">
                <div className="item-key col-lg-6 col-lg-offset-3">
                  <div className="name">主页</div>
                  <div className="description">开发者展示主页URL</div>
                </div>
                <div className="item-value col-lg-8">
                  <input type="text" ref="home" defaultValue={props.account.entity.home}/>
                </div>
              </div>
              <div className="form-item row">
                <div className="item-key col-lg-6 col-lg-offset-3">
                  <div className="name">简介</div>
                  <div className="description">开发者简介，将显示在产品的开发者简介。长度不超过255个字符。</div>
                </div>
                <div className="item-value col-lg-8">
                  <input type="text" ref="intro" defaultValue={props.account.entity.intro}/>
                </div>
              </div>
              <div className="form-item row">
                <div className="item-key col-lg-6 col-lg-offset-3">
                  <div className="name">开发者凭证</div>
                  <div className="description">应用开发者申请账号时平台颁发的凭证，用于验证应用开发者身份</div>
                </div>
                <div className="item-value col-lg-8">
                  <button className="btn btn-default">下载凭证</button>
                </div>
              </div>
              <div className="form-item row">
                <div className="item-key col-lg-6 col-lg-offset-3">
                  <div className="name">注销</div>
                  <div className="description">注销应用开发者账号，将删除该账号下所有内容。该操作不可恢复</div>
                </div>
                <div className="item-value col-lg-8">
                  <button className="btn btn-error" onClick={this.onDestroy}>注销账号</button>
                </div>
              </div>
            </div>
            <div className="form-action">
              <button onClick={this.onUpdate} className="btn btn-default btn-save">保存</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    account: state.account.app
  };
}


AccountAppSettings.propTypes = {};

AccountAppSettings.defaultProps = {};

export default connect(mapStateToProps, {
  push,
  loadAccountApp,
  updateAccountApp,
  destroyAccountApp
})(AccountAppSettings)