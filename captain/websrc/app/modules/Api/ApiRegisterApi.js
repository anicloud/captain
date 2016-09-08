/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {createApi} from './actions';

import './ApiRegister.less';

class ApiRegisterApi extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCreateArg = this.onCreateArg.bind(this);
    this.onDeleteArg = this.onDeleteArg.bind(this);
    this.state = {
      inputArgs: {},
      outputArgs: {},
      inputArgKeys: [],
      outputArgKeys: []
    };
  }

  componentDidMount() {

  }

  onSubmit() {
    const apiData = {
      name: this.refs.name.value,
      group: {groupId: this.refs.groupId.value},
      input: Object.values(this.state.inputArgs),
      output: Object.values(this.state.outputArgs)
      // description: this.refs.description.value,
      // returnType: this.refs.returnType.value,

    };
    console.log(apiData);
    this.props.createApi(apiData);
  }

  onCreateArg(tag) {
    const key = `${Date.now()}`;
    if (tag === 'input') {
      let inputArgKeys = this.state.inputArgKeys;
      inputArgKeys.push(key);
      let inputArgs = this.state.inputArgs;
      inputArgs[key] = {name: this.refs.tempInputName.value, type: this.refs.tempInputType.value};
      this.setState({inputArgs, inputArgKeys});
    } else if (tag === 'output') {
      let outputArgKeys = this.state.outputArgKeys;
      outputArgKeys.push(key);
      let outputArgs = this.state.outputArgs;
      outputArgs[key] = {name: this.refs.tempOutputName.value, type: this.refs.tempOutputType.value};
      this.setState({outputArgs, outputArgKeys});
    }
  }

  onDeleteArg(key, tag) {
    if (tag === 'input') {
      let inputArgKeys = this.state.inputArgKeys.filter(argKey => argKey !== key);
      let inputArgs = this.state.inputArgs;
      delete inputArgs[key];
      this.setState({inputArgKeys, inputArgs});
    } else if (tag === 'output') {
      let outputArgKeys = this.state.outputArgKeys.filter(argKey => argKey !== key);
      let outputArgs = this.state.outputArgs;
      delete outputArgs[key];
      this.setState({outputArgKeys, outputArgs});
    }
  }

  render() {
    const state = this.state;
    const props = this.props;

    const inputArgElems = state.inputArgKeys.map(key => {
      const nameRef = `name_${key}`;
      const typeRef = `type_${key}`;
      return (
        <div className="arg" key={key}>
          <div className="name">
            <input ref={nameRef} defaultValue={state.inputArgs[key].name} className="input-arg" type="text"/>
          </div>
          <div className="type">
            <select ref={typeRef} defaultValue={state.inputArgs[key].type}>
              <option value="SHORT">Short</option>
              <option value="INTEGER">Integer</option>
              <option value="LONG">Long</option>
              <option value="FLOAT">Float</option>
              <option value="DOUBLE">Double</option>
              <option value="BOOLEAN">Boolean</option>
            </select>
          </div>
          <div className="action-btn">
            <button className="btn btn-default" onClick={e => this.onDeleteArg(key, "input")}>删除参数</button>
          </div>
        </div>
      );
    });
    const outputArgElems = state.outputArgKeys.map(key => {
      const nameRef = `name_${key}`;
      const typeRef = `type_${key}`;
      return (
        <div className="arg" key={key}>
          <div className="name">
            <input ref={nameRef} defaultValue={state.outputArgs[key].name} className="input-arg" type="text"/>
          </div>
          <div className="type">
            <select ref={typeRef} defaultValue={state.outputArgs[key].type}>
              <option value="SHORT">Short</option>
              <option value="INTEGER">Integer</option>
              <option value="LONG">Long</option>
              <option value="FLOAT">Float</option>
              <option value="DOUBLE">Double</option>
              <option value="BOOLEAN">Boolean</option>
            </select>
          </div>
          <div className="action-btn">
            <button className="btn btn-default" onClick={e => this.onDeleteArg(key, "output")}>删除参数</button>
          </div>
        </div>
      );
    });
    return (
      <div className="api-register">
        <div className="form-group container-fluid">
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">名称</div>
              <div className="description">API名称，用于显示及后台调用</div>
            </div>
            <div className="item-value col-lg-8">
              <input type="text" ref="name" placeholder="英文字母或下划线，长度不超过64个字符"/>
            </div>
          </div>
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">描述</div>
              <div className="description">API的用途说明</div>
            </div>
            <div className="item-value col-lg-8">
              <textarea ref="description" placeholder="长度不超过255个字符"/>
            </div>
          </div>
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">所属组</div>
              <div className="description">API所属组</div>
            </div>
            <div className="item-value col-lg-8">
              <select ref="groupId">
                {Object.values(props.groups.entities).map(group => {
                  return (
                    <option key={group.groupId} value={group.groupId}>{group.name}</option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">返回类型</div>
              <div className="description">API返回类型</div>
            </div>
            <div className="item-value col-lg-8">
              <select ref="returnType">
                <option value="SHORT">Short</option>
                <option value="INTEGER">Integer</option>
                <option value="LONG">Long</option>
                <option value="FLOAT">Float</option>
                <option value="DOUBLE">Double</option>
                <option value="BOOLEAN">Boolean</option>
              </select>
            </div>
          </div>
          <div className="form-item row">
            <div className="item-key col-lg-6 col-lg-offset-3">
              <div className="name">输入参数</div>
              <div className="description">API输入参数，最多不超过32个</div>
            </div>
            <div className="item-value col-lg-10 args">
              {inputArgElems}
              <div className="arg">
                <div className="name">
                  <input ref="tempInputName" className="input-arg" type="text" placeholder="参数名称"/>
                </div>
                <div className="type">
                  <select ref="tempInputType">
                    <option value="SHORT">Short</option>
                    <option value="INTEGER">Integer</option>
                    <option value="LONG">Long</option>
                    <option value="FLOAT">Float</option>
                    <option value="DOUBLE">Double</option>
                    <option value="BOOLEAN">Boolean</option>
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
              {outputArgElems}
              <div className="arg">
                <div className="name">
                  <input ref="tempOutputName" className="input-arg" type="text" placeholder="参数名称"/>
                </div>
                <div className="type">
                  <select ref="tempOutputType">
                    <option value="SHORT">Short</option>
                    <option value="INTEGER">Integer</option>
                    <option value="LONG">Long</option>
                    <option value="FLOAT">Float</option>
                    <option value="DOUBLE">Double</option>
                    <option value="BOOLEAN">Boolean</option>
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
          <button className="btn btn-default" onClick={this.onSubmit}>提交申请</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    groups: state.api.groups,
    functions: state.api.functions
  };
}

ApiRegisterApi.propTypes = {};

ApiRegisterApi.defaultProps = {};

export default connect(mapStateToProps, {
  createApi
})(ApiRegisterApi)