/**
 * Created by huangbin on 6/27/16.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {noop} from 'components/utils';
import Loading from 'components/Loading';
import {Menu, SubMenu, MenuItem} from 'components/Menu';
import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right';
import MdKeyboardArrowDown from 'react-icons/lib/md/keyboard-arrow-down';
import MdDeviceHub from 'react-icons/lib/md/device-hub';
import './DeviceList.less';

class DeviceList extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onHover = this.onHover.bind(this);
    this.state = {
      selectedKeys: [],
      openKeys: []
    }
  }

  onSelect(info) {
    this.setState({selectedKeys: info.selectedKeys});
    this.props.onSelectSlave(info.key);
  }

  onOpen(info) {
    this.setState({openKeys: info.openKeys});
    this.props.onSelectMaster(info.key);
  }

  onHover(device) {
    this.props.onHover(device);
  }

  getTitle(device) {
    const openKeys = this.state.openKeys;
    return (
      <div>
        <div className="icon icon-left"><MdDeviceHub/></div>
        <div className="text">{device.name}</div>
        <div className="icon icon-right">
          { openKeys.includes(device.deviceId) ?
            <MdKeyboardArrowDown/>
            :
            <MdKeyboardArrowRight/>
          }
        </div>
      </div>
    );
  }

  render() {
    const state = this.state;
    const props = this.props;
    return (
      <div className="debug-device-list">
        <div className="title">
          <span>设备列表</span>
        </div>
        {props.devices.loaded ?
          <Menu onSelect={this.onSelect} onOpen={this.onOpen}>
            {Object.keys(props.devices.entities).map(key => {
              const device = props.devices.entities[key];
              return (
                <SubMenu key={key} 
                         title={this.getTitle(device)} 
                         onHover={e => this.onHover(device)}>
                  {device.slaves.map(slave => {
                    return (
                      <MenuItem key={device.deviceId + '_' + slave.deviceId}
                                onHover={e => this.onHover(slave)}>
                        <span>{slave.name}</span>
                      </MenuItem>
                    )
                  })}
                </SubMenu>
              )
            })
            }
          </Menu>
          :
          <Loading>
            {props.devices.loading ? '正在加载设备...' :
            <button className="btn btn-default" onClick={props.onLoad}>
              加载设备
            </button>
            }
          </Loading>
        }
      </div>
    )
  }
}

DeviceList.propTypes = {
  devices: PropTypes.object,
  onSelectMaster: PropTypes.func,
  onSelectSlave: PropTypes.func,
  onHover: PropTypes.func,
  onLoad: PropTypes.func
};

DeviceList.defaultProps = {
  devices: {},
  onSelectMaster: noop,
  onSelectSlave: noop,
  onHover: noop,
  onLoad: noop
};

export default connect()(DeviceList)