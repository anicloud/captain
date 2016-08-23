/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import './ApiRegister.less';

class ApiRegisterGroup extends Component {
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
      <div className="api-register">
        <div className="form-group container-fluid">
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">显示名称</div>
              <div className="description">API Group显示名称，用于界面显示</div>
            </div>
            <div className="item-value col-lg-8">
              <input type="text" placeholder="中英文字符，长度不超过64个字符"/>
            </div>
          </div>
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">原型名称</div>
              <div className="description">API Group原型名称，用于后台调用</div>
            </div>
            <div className="item-value col-lg-8">
              <input type="text" placeholder="英文字母或下划线，长度不超过64个字符"/>
            </div>
          </div>
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">描述</div>
              <div className="description">组的用途说明</div>
            </div>
            <div className="item-value col-lg-8">
              <textarea placeholder="长度不超过255个字符"/>
            </div>
          </div>
          <div className="action">
            <button className="btn btn-default">提交申请</button>
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

ApiRegisterGroup.propTypes = {};

ApiRegisterGroup.defaultProps = {};

export default connect(mapStateToProps)(ApiRegisterGroup)