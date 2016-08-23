/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import './ApiRegister.less';

class ApiRegisterApi extends Component {
  constructor(props) {
    super(props);
    this.getArgRow = this.getArgRow.bind(this);
    this.onCreateArg = this.onCreateArg.bind(this);
    this.onDeleteArg = this.onDeleteArg.bind(this);
    this.state = {
      inputArgs: [],
      outputArgs: []
    };
  }

  componentDidMount() {

  }

  getArgRow() {

  }

  onCreateArg(tag) {
    const date = `${Date.now()}`;
    const newArg =
      <div className="arg" key={date}>
        <div className="name">
          <input className="input-arg" type="text" placeholder="参数名称"/>
        </div>
        <div className="type">
          <select>
            <option>参数类型</option>
            <option>Short</option>
            <option>Integer</option>
            <option>Long</option>
            <option>Float</option>
            <option>Double</option>
            <option>Boolean</option>
          </select>
        </div>
        <div className="action-btn">
          <button className="btn btn-default" onClick={e => this.onDeleteArg(date, tag)}>删除参数</button>
        </div>
      </div>;

    if (tag === 'input') {
      let inputArgs = this.state.inputArgs;
      inputArgs.push(newArg);
      this.setState({inputArgs});
    } else if (tag === 'output') {
      let outputArgs = this.state.outputArgs;
      outputArgs.push(newArg);
      this.setState({outputArgs});
    }
  }

  onDeleteArg(key, tag) {
    if (tag === 'input') {
      let inputArgs = this.state.inputArgs;
      const index = inputArgs.findIndex(child => {
        return child.key === key;
      });
      if (index !== -1) {
        inputArgs.splice(index, 1);
        this.setState({inputArgs});
      }
    } else if (tag === 'output') {
      let outputArgs = this.state.outputArgs;
      const index = outputArgs.findIndex(child => {
        return child.key === key;
      });
      if (index !== -1) {
        outputArgs.splice(index, 1);
        this.setState({outputArgs});
      }
    }
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
              <div className="description">API显示名称，用于界面显示</div>
            </div>
            <div className="item-value col-lg-8">
              <input type="text" placeholder="中英文字符，长度不超过64个字符"/>
            </div>
          </div>
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">原型名称</div>
              <div className="description">API原型名称，用于后台调用</div>
            </div>
            <div className="item-value col-lg-8">
              <input type="text" placeholder="英文字母或下划线，长度不超过64个字符"/>
            </div>
          </div>
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">描述</div>
              <div className="description">API的用途说明</div>
            </div>
            <div className="item-value col-lg-8">
              <textarea placeholder="长度不超过255个字符"/>
            </div>
          </div>
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">所属组</div>
              <div className="description">API所属组</div>
            </div>
            <div className="item-value col-lg-8">
              <select>
                <option>电源</option>
                <option>温湿度</option>
                <option>照明</option>
                <option>蓝牙(BLE)</option>
                <option>ZigBee</option>
                <option>红外</option>
              </select>
            </div>
          </div>
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">返回类型</div>
              <div className="description">API返回类型</div>
            </div>
            <div className="item-value col-lg-8">
              <select>
                <option>Short</option>
                <option>Integer</option>
                <option>Long</option>
                <option>Float</option>
                <option>Double</option>
                <option>Boolean</option>
              </select>
            </div>
          </div>
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">输入参数</div>
              <div className="description">API输入参数，最多不超过32个</div>
            </div>
            <div className="item-value col-lg-10 args">
              {state.inputArgs}
              <div className="arg">
                <div className="name">
                  <input className="input-arg" type="text" placeholder="参数名称"/>
                </div>
                <div className="type">
                  <select>
                    <option>参数类型</option>
                    <option>Short</option>
                    <option>Integer</option>
                    <option>Long</option>
                    <option>Float</option>
                    <option>Double</option>
                    <option>Boolean</option>
                  </select>
                </div>
                <div className="action-btn">
                  <button className="btn btn-default" onClick={e => this.onCreateArg('input')}>添加参数</button>
                </div>
              </div>
            </div>
          </div>
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">输出参数</div>
              <div className="description">API输入参数，最多不超过32个</div>
            </div>
            <div className="item-value col-lg-10 args">
              {state.outputArgs}
              <div className="arg">
                <div className="name">
                  <input className="input-arg" type="text" placeholder="参数名称"/>
                </div>
                <div className="type">
                  <select>
                    <option>参数类型</option>
                    <option>Short</option>
                    <option>Integer</option>
                    <option>Long</option>
                    <option>Float</option>
                    <option>Double</option>
                    <option>Boolean</option>
                  </select>
                </div>
                <div className="action-btn">
                  <button className="btn btn-default" onClick={e => this.onCreateArg('output')}>添加参数</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="action">
          <button className="btn btn-default">提交申请</button>
        </div>
      </div>
    )
      ;
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

ApiRegisterApi.propTypes = {};

ApiRegisterApi.defaultProps = {};

export default connect(mapStateToProps)(ApiRegisterApi)