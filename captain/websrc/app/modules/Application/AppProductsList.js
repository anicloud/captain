/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import MdClose from 'react-icons/lib/md/close';
import Modal from 'components/Modal';
import SearchInput from 'components/SearchInput';
import {dateFormat} from 'components/utils';
import {updateProduct} from './actions';

import './AppProductsList.less';

class AppProductsList extends Component {
  constructor(props) {
    super(props);
    this.onAddProduct = this.onAddProduct.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onGotoDetails = this.onGotoDetails.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.state = {
      addingProduct: false,
      filter: '',
      visibleProducts: []
    };
  }

  componentDidMount() {
    this.setState({visibleProducts: Object.values(this.props.products.entities)});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({visibleProducts: Object.values(nextProps.products.entities)});
  }

  onAddProduct() {
    let addingProduct = this.state.addingProduct;
    if (!addingProduct) {
      addingProduct = true;
      this.setState({addingProduct});
    }
  }

  onUpdate() {
    let addingProduct = this.state.addingProduct;
    if (addingProduct) {
      this.props.updateProduct({
        name: this.refs.name.value,
        description: this.refs.description.value
      });
      addingProduct = false;
      this.setState({addingProduct});
    }
  }

  onCancel() {
    let addingProduct = this.state.addingProduct;
    if (addingProduct) {
      addingProduct = false;
      this.setState({addingProduct});
    }
  }

  onGotoDetails(productId) {
    const url = '/application/products/' + productId;
    this.props.push(url);
  }

  onFilter(str) {
    str = str ? str.trim() : '';
    let visibleProducts = [];
    for (let entity of Object.values(this.props.products.entities)) {
      if (str.length === 0 || entity.name.includes(str)) {
        visibleProducts.push(entity);
      }
    }
    this.setState({visibleProducts});
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
            <button className="btn btn-default" onClick={this.onAddProduct}>添加应用</button>
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
            {state.visibleProducts.map(product => {
              return (
                <tr key={product.productId} onClick={(e) => {this.onGotoDetails(product.productId)}}>
                  <td>
                    <div className="name">
                      <span><img src={product.logo}/></span>
                      <span>{product.name || '-'}</span>
                    </div>
                  </td>
                  <td>{product.version || '-'}</td>
                  <td>{product.installed || '-'}</td>
                  <td>{product.stars || '-'}/{product.totalComments || '-'}</td>
                  <td>{dateFormat(product.lastModTime, 'yyyy-MM-dd') || '-'}</td>
                  <td>{product.state}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
        {
          state.addingProduct &&
          <Modal className="add-product-modal">
            <div className="close" onClick={this.onCancel}><MdClose/></div>
            <div className="modal-title">添加产品</div>
            <div className="modal-content">
              <div className="form">
                <input type="text" ref="name" placeholder="产品名称"/>
              </div>
              <div className="form">
                <input type="text" ref="description" placeholder="产品描述"/>
              </div>
              <div className="action">
                <button className="btn btn-default" onClick={this.onUpdate}>保存</button>
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

export default connect(mapStateToProps, {
  push,
  updateProduct
})(AppProductsList)