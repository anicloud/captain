/**
 * Created by huangbin on 6/27/16.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'

import {noop} from '../utils'
import Menu from '../Menu/Menu'
import SubMenu from '../Menu/SubMenu'
import MenuItem from '../Menu/MenuItem'

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdViewList
} from 'react-icons/lib/md'
import './sidebar.less'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onClickSlider = this.onClickSlider.bind(this);
    this.state = {
      selectedKeys: new Set(),
      openKeys: new Set(),
      collapsed: true
    }
  }

  onSelect(info) {
    this.props.onSelect(info);
  }

  onOpen(info) {
    let openKeys = this.state.openKeys;
    if (info.open && !openKeys.has(info.key)) {
      openKeys.add(info.key);
      this.setState({openKeys});
    } else if (!info.open && openKeys.has(info.key)) {
      openKeys.delete(info.key);
      this.setState({openKeys});
    }
    this.props.onOpen(info);
  }

  onClickSlider() {
    let collapsed = this.state.collapsed;
    collapsed = !collapsed;
    this.setState({collapsed});
  }

  getTitle(device) {
    const openKeys = this.state.openKeys;
    return (
      <div>
        <div className="icon icon-left"><MdViewList></MdViewList></div>
        <div className="text">{device.name}</div>
        <div className="icon icon-right">
          { openKeys.has(device.deviceId) ?
            <MdKeyboardArrowDown></MdKeyboardArrowDown>
            :
            <MdKeyboardArrowRight></MdKeyboardArrowRight>
          }
        </div>
      </div>
    );

  }

  render() {
    const state = this.state;
    const props = this.props;
    const classes = {
      'sidebar collapse': 1,
      'in': !state.collapsed
    };
    let subMenus = [];
    for (let key in props.devices) {
      const device = props.devices[key];
      subMenus.push(
        <SubMenu key={key}
                 title={this.getTitle(device)}>
          {device.slaves.map(slave => {
            return (
              <MenuItem key={device.deviceId + '_' + slave.deviceId}>
                <span>{slave.name}</span>
              </MenuItem>
            )
          })}
        </SubMenu>
      )
    }
    return (
      <div className={classNames(classes)}>
        <div className="brand">
          <span>
            For Developer
          </span>
        </div>
        {props.loaded ?
          <Menu onSelect={this.onSelect} onOpen={this.onOpen}>
            {
              subMenus
            }
          </Menu>
          :
          <div className="init">
            <div className="hint">
              {props.loading ?
                <span>正在加载设备...</span>
                :
                <button className="btn btn-default" onClick={props.onLoad}>
                  加载设备
                </button>
              }
            </div>
          </div>
        }
        <div className="slider" onClick={this.onClickSlider}>
          {state.collapsed ?
            <MdKeyboardArrowRight></MdKeyboardArrowRight> :
            <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
          }
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  collapse: PropTypes.bool,
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  devices: PropTypes.object,
  onSelect: PropTypes.func,
  onOpen: PropTypes.func,
  onLoad: PropTypes.func
};

Sidebar.defaultProps = {
  collapse: false,
  loading: false,
  loaded: false,
  devices: {},
  onSelect: noop,
  onOpen: noop,
  onLoad: noop
};

export default connect()(Sidebar)