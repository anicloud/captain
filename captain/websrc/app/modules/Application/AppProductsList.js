/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import MdClose from 'react-icons/lib/md/close';
import Modal from '../../components/Modal';
import SearchInput from '../../components/SearchInput';

import './AppProductsList.less';

class AppProductsList extends Component {
  constructor(props) {
    super(props);
    this.onCreateApp = this.onCreateApp.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onGotoDetails = this.onGotoDetails.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.state = {
      addingApp: false,
      filter: '',
      visibleApps: []
    };
  }

  componentDidMount() {
    let visibleApps = [];
    for (let entity of Object.values(this.props.products.entities)) {
      visibleApps.push(entity);
    }
    this.setState({visibleApps})
  }

  onCreateApp(e) {
    let addingApp = this.state.addingApp;
    if (!addingApp) {
      addingApp = true;
      this.setState({addingApp});
    }
  }

  onCancel(e) {
    let addingApp = this.state.addingApp;
    if (addingApp) {
      addingApp = false;
      this.setState({addingApp});
    }
  }

  onGotoDetails(appId, e) {
    const url = '/application/products/' + appId;
    this.props.dispatch(push(url));
  }

  onFilter(str) {
    str = str ? str.trim() : '';
    let visibleApps = [];
    for (let entity of Object.values(this.props.products.entities)) {
      if (str.length === 0 || entity.name.includes(str)) {
        visibleApps.push(entity);
      }
    }
    this.setState({visibleApps});
  }

  render() {
    const state = this.state;
    const props = this.props;

    return (
      <div className="app-products-list">
        <div className="tool-bar">
          <div className="filter-tool">
            <SearchInput placeholder="输入过滤条件" onChange={this.onFilter}/>
          </div>
          <div className="add-tool">
            <button className="btn btn-default" onClick={this.onCreateApp}>添加应用</button>
          </div>
        </div>
        <div className="app-list">
          <table>
            <thead>
            <tr>
              <th>应用名称</th>
              <th>当前版本</th>
              <th>安装数量</th>
              <th>平均评分/评分总数</th>
              <th>最后更新时间</th>
              <th>状态</th>
            </tr>
            </thead>
            <tbody>
            {state.visibleApps.map(app => {
              return (
                <tr key={app.appId} onClick={(e) => {this.onGotoDetails(app.appId, e)}}>
                  <td>
                    <div className="name">
                      <span><img src={app.logo}/></span>
                      <span>{app.name || '-'}</span>
                    </div>
                  </td>
                  <td>{app.version || '-'}</td>
                  <td>{app.installedCount || '-'}</td>
                  <td>{app.stars || '-'}/{app.totalComments || '-'}</td>
                  <td>{app.lastModTime || '-'}</td>
                  <td>{app.state}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
        {
          state.addingApp &&
          <Modal className="app-add-modal">
            <div className="close" onClick={this.onCancel}><MdClose/></div>
            <div className="modal-title">添加应用</div>
            <div className="modal-content">
              <div className="form">
                <input type="text" placeholder="应用名称"/>
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
    products: state.app.products
  };
}

AppProductsList.propTypes = {};

AppProductsList.defaultProps = {};

export default connect(mapStateToProps)(AppProductsList)