/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {createGroup} from './actions';

import './ApiRegister.less';

class ApiRegisterGroup extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {};
  }

  componentDidMount() {

  }

  onSubmit() {
    this.props.createGroup({
      // description: this.refs.description.value,
      name: this.refs.name.value
    });
  }

  render() {
    const state = this.state;
    const props = this.props;
    return (
      <div className="api-register">
        <div className="form-group container-fluid">
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">名称</div>
              <div className="description">API Group原型名称，用于后台调用</div>
            </div>
            <div className="item-value col-lg-8">
              <input ref="name" type="text" placeholder="英文字母或下划线，长度不超过64个字符"/>
            </div>
          </div>
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">描述</div>
              <div className="description">组的用途说明</div>
            </div>
            <div className="item-value col-lg-8">
              <textarea ref="description" placeholder="长度不超过255个字符"/>
            </div>
          </div>
          <div className="action">
            <button className="btn btn-default" onClick={this.onSubmit}>提交申请</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

ApiRegisterGroup.propTypes = {};

ApiRegisterGroup.defaultProps = {};

export default connect(mapStateToProps, {
  createGroup
})(ApiRegisterGroup)