/**
 * Created by huangbin on 6/30/16.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'

import {noop} from '../utils'
import Menu from '../Menu/Menu'
import MenuItem from '../Menu/MenuItem'
import Tabs from '../Tabs/Tabs'
import Tab from '../Tabs/Tab'
import DebugPanel from './DebugPanel'

import {MdPlayArrow, MdStop, MdPause} from 'react-icons/lib/md'
import './debug.less'

class Debug extends Component {
  constructor(props) {
    super(props);
    this.onSelectFunc = this.onSelectFunc.bind(this);
    this.onSelectTab = this.onSelectTab.bind(this);
    this.onCloseTab = this.onCloseTab.bind(this);
    this.loadFuncs = this.loadFuncs.bind(this);
    this.onInvoke = this.onInvoke.bind(this);
    this.state = {
      selectedFuncKey: '-1',
      selectedTabKey: '-1',
      tabs: []
    }
  }

  componentWillReceiveProps(nextProps) {
    const props = this.props;
    if (nextProps.device != props.device) {
      this.setState({
        selectedFuncKey: '-1',
        selectedTabKey: '-1',
        tabs: []
      });
    }
    if (nextProps.invocations.loadingKeys.length !== props.invocations.loadingKeys.length) {
      let tabs = this.state.tabs;
      tabs = tabs.map(tab => {
        if (nextProps.invocations.loadingKeys.includes(tab.key)) {
          let panel = React.Children.only(tab.props.children);
          if (!panel.props.disable) {
            const tabProps = Object.assign({}, tab.props, {
              key: tab.key
            });
            const panelProps = Object.assign({}, panel.props, {
              disable: true
            });
            return this.getTab(tabProps, panelProps);
          } else {
            return tab;
          }
        } else {
          let panel = React.Children.only(tab.props.children);
          if (panel.props.disable) {
            const tabProps = Object.assign({}, tab.props, {
              key: tab.key
            });
            const panelProps = Object.assign({}, panel.props, {
              disable: false,
              invocation: nextProps.invocations.entities[tab.key]
            });
            return this.getTab(tabProps, panelProps);
          } else {
            return tab;
          }
        }
      });
      this.setState({tabs});
    }
  }

  getInvocationKey(func) {
    const device = this.props.device;
    const masterId = device.masterId ? device.masterId : device.deviceId;
    const slaveId = device.masterId ? device.deviceId : -1;
    const key = `${masterId}_${slaveId}_${func.functionId}`;
    return key;
  }

  onSelectFunc(info) {
    const props = this.props;
    let selectedFuncKey = this.state.selectedFuncKey;
    if (selectedFuncKey !== info.key) {
      selectedFuncKey = info.key;
    }
    const selectedFunc = props.functions.find(func => func.functionId == selectedFuncKey);

    // now tabs
    let selectedTabKey = this.state.selectedTabKey;
    let tabs = this.state.tabs;
    const tabKey = this.getInvocationKey(selectedFunc);
    const tab = tabs.find(tab => tab.key === tabKey);
    if (!tab) {
      const invocation = props.invocations.entities[tabKey];
      const tabProps = {
        key: tabKey,
        elemKey: tabKey,
        tabName: selectedFunc.name
      };
      const panelProps = {
        disable: props.invocations.loadingKeys.some(key => key == tabKey),
        function: selectedFunc,
        invocation: invocation,
        onInvoke: this.onInvoke
      };
      tabs.push(
        this.getTab(tabProps, panelProps)
      );
    }

    if (selectedTabKey !== tabKey) {
      selectedTabKey = tabKey;
    }

    this.setState({selectedFuncKey, selectedTabKey, tabs});
  }

  onSelectTab(info) {
    let selectedTabKey = this.state.selectedTabKey;
    if (selectedTabKey !== info.tabKey) {
      selectedTabKey = info.tabKey;
      this.setState({selectedTabKey});
    }
  }

  onCloseTab(info) {
    let selectedTabKey = this.state.selectedTabKey;
    let nextIndex;
    this.state.tabs.forEach((tab, index) => {
      if (tab.key == info.tabKey) {
        nextIndex = index - 1;
      }
    });
    const tabs = this.state.tabs.filter(tab => tab.key != info.tabKey);
    if (selectedTabKey === info.tabKey && tabs.length > 0) {
      if (nextIndex < 0) {
        nextIndex = 0;
      }
      selectedTabKey = tabs[nextIndex].key;
    } else {
      selectedTabKey = '-1';
    }
    this.setState({selectedTabKey, tabs});
  }

  onInvoke(func, input) {
    const device = this.props.device;
    const key = this.getInvocationKey(func);
    return this.props.onInvoke(key, {
      deviceId: device.masterId ? device.masterId : device.deviceId,
      slaveId: device.masterId ? device.deviceId : -1,
      function: {
        functionId: func.functionId,
        groupId: func.group.groupId
      },
      inputValues: input
    });
  }

  getTab(tabProps, panelProps) {
    return (
      <Tab {...tabProps} >
        <DebugPanel {...panelProps}></DebugPanel>
      </Tab>
    )
  }

  loadFuncs() {

  }

  renderPreload() {
    const props = this.props;
    if (this.state.loading) {
      return (
        <div className="preload">
          <div className="loading">
            <div className="info">
              调试功能加载中...
            </div>
          </div>
        </div>
      )
    }
  }

  renderContent() {
    const state = this.state;
    const props = this.props;
    const selectedFunc = props.functions.find(
      func => func.functionId == state.selectedFuncKey);
    return (
      <div className="debug-content">
        <div className="func-window container-fluid">
          <div className="wrapper">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-22">
                <div className="func-list">
                  <div className="title">
                    {props.device.name ? props.device.name : '无设备'}
                  </div>
                  <div className="content">
                    {props.functions.length > 0 ?
                      <Menu onSelect={this.onSelectFunc}>
                        {props.functions.map(func => {
                          return (
                            <MenuItem key={func.functionId}>
                              <span>{func.name}</span>
                            </MenuItem>
                          );
                        })}
                      </Menu>
                      :
                      <div className="hint">无功能列表</div>
                    }
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-22">
                <div className="func-details">
                  <div className="title">
                    功能详细说明
                  </div>
                  <div className="content">
                    {selectedFunc ?
                      <Menu>
                        <MenuItem>
                          <div className="key">名称：</div>
                          <div className="value ">{selectedFunc.name}</div>
                        </MenuItem>
                        <MenuItem>
                          <div className="key">功能ID：</div>
                          <div className="value">{selectedFunc.functionId}</div>
                        </MenuItem>
                        <MenuItem>
                          <div className="key">功能组：</div>
                          <div className="value">{selectedFunc.group.name}</div>
                        </MenuItem>
                        <MenuItem>
                          <div className="key">功能组ID：</div>
                          <div className="value">{selectedFunc.group.groupId}</div>
                        </MenuItem>
                        <MenuItem>
                          <div className="key">描述：</div>
                          <div className="value">{selectedFunc.description}</div>
                        </MenuItem>
                        <MenuItem>
                          <div className="key">输入参数：</div>
                          <div className="value">
                            {!selectedFunc.input || selectedFunc.input.length == 0 ? '无' :
                              <table>
                                {selectedFunc.input.map(arg => {
                                  return (
                                    <tr>
                                      <td>arg.name</td>
                                      <td>arg.type</td>
                                    </tr>);
                                })}
                              </table>
                            }
                          </div>
                        </MenuItem>
                        <MenuItem>
                          <div className="key">输出参数：</div>
                          <div className="value">
                            {!selectedFunc.output || selectedFunc.output.length == 0 ? '无' :
                              <table>
                                {selectedFunc.output.map(arg => {
                                  return (
                                    <tr>
                                      <td>arg.name</td>
                                      <td>arg.type</td>
                                    </tr>);
                                })}
                              </table>
                            }
                          </div>
                        </MenuItem>
                      </Menu>
                      :
                      <div className="hint">
                        未选择功能
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="debug-window">
          <Tabs selectedKey={state.selectedTabKey} onSelectTab={this.onSelectTab} onCloseTab={this.onCloseTab}>
            {state.tabs}
          </Tabs>
        </div>
      </div>
    );
  }

  render() {
    const props = this.props;

    return (
      <div className="debug">
        {
          this.renderContent()
        }
        {
          this.renderPreload()
        }
      </div>
    );
  }
}


Debug.propTypes = {
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  device: PropTypes.object,
  functions: PropTypes.array,
  invocations: PropTypes.object,
  onInvoke: PropTypes.func
};

Debug.defaultProps = {
  loading: false,
  loaded: false,
  device: {},
  functions: [],
  invocations: {},
  onInvokeFunction: noop
};

export default connect()(Debug);