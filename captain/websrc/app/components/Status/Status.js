/**
 * Created by huangbin on 6/30/16.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight
} from 'react-icons/lib/md'
import './status.less'

class Status extends Component {
  constructor(props) {
    super(props);
    this.onClickSlider = this.onClickSlider.bind(this);
    this.state = {
      collapsed: true
    }
  }

  onClickSlider(e) {
    let collapsed = this.state.collapsed;
    collapsed = !collapsed;
    this.setState({collapsed});
  }

  render() {
    const state = this.state;
    const props = this.props;
    const classes = {
      'status collapse': 1,
      'in': !state.collapsed 
    };
    return (
      <div className={classNames(classes)}>
        <div className="title">设备信息</div>
        {props.device.deviceId ?
          <div className="info">
            <div className="info-item">
              <div className="key">设备类型：</div>
              <div className="value">{props.device.masterId ? '从设备' : '主设备'}</div>
            </div>
            <div className="info-item">
              <div className="key">设备ID：</div>
              <div className="value">{props.device.deviceId}</div>
            </div>
            <div className="info-item">
              <div className="key">设备状态：</div>
              <div className="value">{props.device.state}</div>
            </div>
            <div className="info-item">
              <div className="key">设备名称：</div>
              <div className="value">{props.device.name}</div>
            </div>
            <div className="info-item">
              <div className="key">描述：</div>
              <div className="value">{props.device.description}</div>
            </div>
            <div className="info-item">
              <div className="key">提供商：</div>
              <div className="value">{props.device.vendor}</div>
            </div>
            <div className="info-item">
              <div className="key">版本号：</div>
              <div className="value">{props.device.version}</div>
            </div>
            <div className="info-item">
              <div className="key">出厂序列号：</div>
              <div className="value">{props.device.physicalId}</div>
            </div>
            <div className="info-item">
              <div className="key">MAC地址：</div>
              <div className="value">{props.device.physicalAddress}</div>
            </div>
            <div className="info-item">
              <div className="key">功能数：</div>
              <div className="value">{props.device.functions ? props.device.functions.length : 0}</div>
            </div>
            {props.device.masterId &&
              <div className="info-item">
                <div className="key">主设备ID：</div>
                <div className="value">{props.device.masterId}</div>
              </div>
            }
            {!props.device.masterId &&
              <div className="info-item">
                <div className="key">从设备数：</div>
                <div className="value">{props.device.slaves ? props.device.slaves.length : 0}</div>
              </div>
            }
          </div>
          :
          <div className="init">
            <div className="hint">未选择设备</div>
          </div>
        }
        <div className="slider" onClick={this.onClickSlider}>
          {state.collapsed ?
            <MdKeyboardArrowLeft></MdKeyboardArrowLeft> :
            <MdKeyboardArrowRight></MdKeyboardArrowRight>
          }
        </div>
      </div>
    );
  }
}

Status.propTypes = {
  loaded: PropTypes.bool,
  loading: PropTypes.bool,
  device: PropTypes.object
};

Status.defaultProps = {
  loaded: true,
  loading: false,
  device: {}
};

export default connect()(Status);