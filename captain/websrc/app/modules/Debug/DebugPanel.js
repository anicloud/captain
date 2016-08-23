/**
 * Created by huangbin on 7/6/16.
 */
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import {MdPlayArrow, MdStop, MdPause} from 'react-icons/lib/md';
import './DebugPanel.less';

class DebugPanel extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onTogglePre = this.onTogglePre.bind(this);
    this.state = {
      input: '[]',
      inputPre: '[]',
      inputPreOpen: false
    }
  }

  onInputChange() {
    let input = this.refs.input.value;
    this.setState({input});
  }

  onStart() {
    let inputArgs;
    try {
      inputArgs = JSON.parse(this.state.input);
    } catch (e) {
      inputArgs = [];
    }
    this.props.onInvoke(this.props.function, inputArgs);
  }

  onPause() {

  }

  onStop() {

  }

  onTogglePre() {
    let inputPreOpen = this.state.inputPreOpen;
    inputPreOpen = !inputPreOpen;
    this.setState({inputPreOpen});
    if (inputPreOpen) {
      let inputPre = this.state.inputPre;
      try {
        inputPre = JSON.parse(this.state.input);
      } catch (e) {
        inputPre = {格式错误: e.message}
      }
      inputPre = JSON.stringify(inputPre, null, 2);
      this.setState({inputPre});
    }
  }

  render() {
    const state = this.state;
    const props = this.props;
    return (
      <div className="debug-panel-wrapper">
        <div className="debug-panel container-fluid">
          <div className="row">
            <div className="input col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-22">
              <div className="caption">
                输入参数（JSON格式）
              </div>
            <textarea
              ref="input"
              onChange={this.onInputChange}
              maxlength="2000"
              // rows="20"
              // cols="32"
              placeholder='[]'
                        >
            </textarea>
              <div className="toggle">
                <button className="btn btn-default" onClick={this.onTogglePre}>
                  预览
                </button>
              </div>
              <div className={classNames({
              'input-pre': 1,
              'open': state.inputPreOpen})}>
                <div className="caption">输入参数预览</div>
                <pre>
                  {state.inputPre}
                </pre>
              </div>
            </div>
            <div className="tool-bar col-lg-3 col-md-3 col-sm-3 col-xs-22">
              <div className="">
                <div className="tool">
                  <button className="btn btn-default" onClick={this.onStart}>
                    <span className="text">运行</span>
                      <span className="icon">
                        {` `}<MdPlayArrow></MdPlayArrow>
                      </span>
                  </button>
                </div>
                <div className="tool">
                  <button className="btn btn-default" onClick={this.onPause}>
                    <span className="text">暂停</span>
                      <span className="icon">
                        {` `}<MdPause></MdPause>
                      </span>
                  </button>
                </div>
                <div className="tool">
                  <button className="btn btn-default" onclick={this.onStop}>
                    <span className="text">停止</span>
                      <span className="icon">
                        {` `}<MdStop></MdStop>
                      </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="output col-lg-8 col-md-8 col-sm-8 col-xs-22">
              <div className="output-pre">
                <div className="caption">输出结果</div>
                  <pre>
                    {
                      props.invocation && JSON.stringify(props.invocation, null, 2)
                    }
                  </pre>
              </div>
            </div>
          </div>
        </div>
        {
          props.disable &&
          <div className="debug-panel-mask">
            <div className="hint">
              正在等待调用返回结果...
            </div>
          </div>
        }
      </div>
    );
  }
}

DebugPanel.propTypes = {
  disable: PropTypes.bool,
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  function: PropTypes.object,
  invocation: PropTypes.object,
  onInvoke: PropTypes.func
};

DebugPanel.defaultProps = {
  disable: false,
  loading: false,
  loaded: true,
  function: {},
  invocation: {},
  onInvoke: () => {}
};


export default DebugPanel;
