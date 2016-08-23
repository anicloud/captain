/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import FileInput from '../../../components/FileInput';

class DeviceAccountManager extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const state = this.state;
    const props = this.props;

    return (
      <div className="account-manager">
        <div className="account-form">
          <div className="form-content container-fluid">
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">图标</div>
                <div className="description">开发者Logo，将显示在设备商店</div>
              </div>
              <div className="item-value col-lg-8">
                <FileInput>上传图片</FileInput>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">主页</div>
                <div className="description">开发者展示主页URL</div>
              </div>
              <div className="item-value col-lg-8">
                <input type="text" placeholder="http://example.com"/>
              </div>
            </div>

            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">开发者凭证</div>
                <div className="description">设备开发者申请账号时平台颁发的凭证，用于验证设备开发者身份</div>
              </div>
              <div className="item-value col-lg-8">
                <button className="btn btn-default">下载凭证</button>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">注销</div>
                <div className="description">注销设备开发者账号，将删除该账号下所有内容。该操作不可恢复</div>
              </div>
              <div className="item-value col-lg-8">
                <button className="btn btn-error">注销账号</button>
              </div>
            </div>
          </div>
          <div className="form-action">
            <button onClick={this.onSave} className="btn btn-default btn-save">保存</button>
          </div>
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

DeviceAccountManager.propTypes = {};

DeviceAccountManager.defaultProps = {};

export default connect(mapStateToProps)(DeviceAccountManager)