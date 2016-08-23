/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import MdClose from 'react-icons/lib/md/close';
import Modal from '../../components/Modal';
import SearchInput from '../../components/SearchInput';

import './DeviceProductsList.less';

class DeviceProductsList extends Component {
  constructor(props) {
    super(props);
    this.onCreateDevice = this.onCreateDevice.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onGotoDetails = this.onGotoDetails.bind(this);
    this.state = {
      addingDevice: false,
      filter: '',
      visibleDevices: []
    };
  }
  
  componentDidMount() {
    let visibleDevices = [];
    for (let entity of Object.values(this.props.products.entities)) {
      visibleDevices.push(entity);
    }
    this.setState({visibleDevices})
  }

  onCreateDevice(e) {
    let addingDevice = this.state.addingDevice;
    if (!addingDevice) {
      addingDevice = true;
      this.setState({addingDevice});
    }
  }

  onCancel(e) {
    let addingDevice = this.state.addingDevice;
    if (addingDevice) {
      addingDevice = false;
      this.setState({addingDevice});
    }
  }

  onGotoDetails(appId, e) {
    const url = '/device/products/' + appId;
    this.props.dispatch(push(url));
  }

  onFilter(str) {
    str = str ? str.trim() : '';
    let visibleDevices = [];
    for (let entity of Object.values(this.props.products.entities)) {
      if (str.length === 0 || entity.name.includes(str)) {
        visibleDevices.push(entity);
      }
    }
    this.setState({visibleDevices});
  }
  
  render() {
    const state = this.state;
    const props = this.props;

    return (
      <div className="device-products-list">
        <div className="tool-bar">
          <div className="filter-tool">
            <SearchInput placeholder="输入过滤条件" onChange={this.onFilter}/>
          </div>
          <div className="add-tool">
            <button className="btn btn-default" onClick={this.onCreateDevice}>添加设备</button>
          </div>
        </div>
        <div className="device-list">
          <table>
            <thead>
            <tr>
              <th>设备名称</th>
              <th>当前版本</th>
              <th>安装数量</th>
              <th>平均评分/评分总数</th>
              <th>最后更新时间</th>
              <th>状态</th>
            </tr>
            </thead>
            <tbody>
            {state.visibleDevices.map(device => {
              return (
                <tr key={device.deviceId} onClick={(e) => {this.onGotoDetails(device.deviceId, e)}}>
                  <td>
                    <div className="name">
                      <span><img src={device.logo}/></span>
                      <span>{device.name || '-'}</span>
                    </div>
                  </td>
                  <td>{device.version || '-'}</td>
                  <td>{device.installedCount || '-'}</td>
                  <td>{device.stars || '-'}/{device.totalComments || '-'}</td>
                  <td>{device.lastModTime || '-'}</td>
                  <td>{device.state}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
        {
          state.addingDevice &&
          <Modal className="device-add-modal">
            <div className="close" onClick={this.onCancel}><MdClose/></div>
            <div className="modal-title">添加设备</div>
            <div className="modal-content">
              <div className="form">
                <input type="text" placeholder="设备名称"/>
              </div>
              <div className="action">
                <button className="btn btn-default">保存</button>
              </div>
            </div>
          </Modal>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.device.products
  };
}

DeviceProductsList.propTypes = {
};

DeviceProductsList.defaultProps = {
};

export default connect(mapStateToProps)(DeviceProductsList)