/**
 * Created by huangbin on 6/30/16.
 */

import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import Loading from 'components/Loading';
import './DeviceStatus.less'

class DeviceStatus extends Component {
  constructor(props) {
    super(props);
    this.onToggleStatus = this.onToggleStatus.bind(this);
    this.onShow = this.onShow.bind(this);
    this.onHidden = this.onHidden.bind(this);
    this.state = {
      collapse: true,
      fix: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({collapse: false});
    // if (this.props.device !== nextProps.device) {
    //   this.setState({collapse: false});
    // }
  }

  onToggleStatus() {
    // this.setState({collapse: !this.state.collapse});
    this.setState({fix: !this.state.fix});
  }

  onShow() {
    this.setState({collapse: false});
  }

  onHidden() {
    this.setState({collapse: true});
  }

  render() {
    const state = this.state;
    const props = this.props;
    const classes = {
      'device-status collapse': 1,
      'in': state.fix || !state.collapse
    };
    return (
      <div className={classNames(classes)}
           onMouseLeave={this.onHidden}
           onMouseEnter={this.onShow}>
        <div className="title">
          <span className="name">设备详情</span>
          <span className="more">
            <button className="btn btn-default" onClick={this.onToggleStatus}>
              {state.fix ? '取消固定' : '固定'}
            </button>
          </span>
        </div>
        {props.device.deviceId ?
          <div className="info">
            <div className="info-item">
              <div className="key">类型：</div>
              <div className="value">{props.device.masterId ? '从设备' : '主设备'}</div>
            </div>
            <div className="info-item">
              <div className="key">ID：</div>
              <div className="value">{props.device.deviceId}</div>
            </div>
            <div className="info-item">
              <div className="key">状态：</div>
              <div className="value">{props.device.state}</div>
            </div>
            <div className="info-item">
              <div className="key">名称：</div>
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
              <div className="key">序列号：</div>
              <div className="value">{props.device.physicalId}</div>
            </div>
            <div className="info-item">
              <div className="key">MAC：</div>
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
          <Loading>未选择设备</Loading>
        }
      </div>
    );
  }
}

DeviceStatus.propTypes = {
  device: PropTypes.object
};

DeviceStatus.defaultProps = {
  device: {}
};

export default DeviceStatus;