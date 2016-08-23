/**
 * Created by huangbin on 8/16/16.
 */
import React, {PropTypes, Component} from 'react';
import {Menu, MenuItem} from '../../components/Menu';
import {noop} from '../../components/utils'; 
import './FuncInfo.less';

class FuncInfo extends Component {
  constructor(props) {
    super(props);
    this.onSelectFunc = this.onSelectFunc.bind(this);
    this.state = {
      curFunc: undefined
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.device !== nextProps.device) {
      this.setState({curFunc: undefined});
    }
  }

  onSelectFunc(info) {
    const curFunc = this.props.functions.entities[info.key];
    this.setState({curFunc});
    this.props.onSelectFunc(curFunc);
  }

  render() {
    const state = this.state;
    const props = this.props;

    return (
      <div className="func-info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-23">
              <div className="func-list">
                <div className="title">
                  {props.device.name ? props.device.name : '无设备'}
                </div>
                <div className="content">
                  {props.device.functions && props.device.functions.length > 0 ?
                    <Menu onSelect={this.onSelectFunc}>
                      {props.device.functions.map(func => {
                        const funcDetails = props.functions.entities[func.functionId];
                        return (
                          <MenuItem key={func.functionId}>
                            <span>{funcDetails.name}</span>
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
            <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-23">
              <div className="func-details">
                <div className="title">
                  API详情
                </div>
                <div className="content">
                  {state.curFunc ?
                    <ul>
                      <li>
                        <div className="key">名称：</div>
                        <div className="value ">{state.curFunc.name}</div>
                      </li>
                      <li>
                        <div className="key">功能ID：</div>
                        <div className="value">{state.curFunc.functionId}</div>
                      </li>
                      <li>
                        <div className="key">功能组：</div>
                        <div className="value">{state.curFunc.groupName}</div>
                      </li>
                      <li>
                        <div className="key">功能组ID：</div>
                        <div className="value">{state.curFunc.groupId}</div>
                      </li>
                      <li>
                        <div className="key">描述：</div>
                        <div className="value">{state.curFunc.description}</div>
                      </li>
                      <li>
                        <div className="key">输入参数：</div>
                        <div className="value">
                          {!state.curFunc.inputArguments || state.curFunc.inputArguments.length == 0 ? '无' :
                            <table>
                              {state.curFunc.inputArguments.map(arg => {
                                return (
                                  <tr>
                                    <td>arg.name</td>
                                    <td>arg.type</td>
                                  </tr>);
                              })}
                            </table>
                          }
                        </div>
                      </li>
                      <li>
                        <div className="key">输出参数：</div>
                        <div className="value">
                          {!state.curFunc.outputArguments || state.curFunc.outputArguments.length == 0 ? '无' :
                            <table>
                              {state.curFunc.outputArguments.map(arg => {
                                return (
                                  <tr>
                                    <td>arg.name</td>
                                    <td>arg.type</td>
                                  </tr>);
                              })}
                            </table>
                          }
                        </div>
                      </li>
                    </ul>
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

    );
  }
}

FuncInfo.propTypes = {
  device: PropTypes.object,
  functions: PropTypes.object,
  onSelectFunc: PropTypes.func
};

FuncInfo.defaultProps = {
  device: {},
  functions: {},
  onSelectFunc: noop
};

export default FuncInfo;