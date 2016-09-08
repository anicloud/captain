/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {go, push} from 'react-router-redux';
import Loading from 'components/Loading';
import FileInput from 'components/FileInput';
import {updateProduct, destroyProduct} from './actions';
import './DeviceProductsDetails.less';

class DeviceProductsDetails extends Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    this.onReturn = this.onReturn.bind(this);
    this.onPublish = this.onPublish.bind(this);
    this.onUnpublish = this.onUnpublish.bind(this);
    this.onDestroy = this.onDestroy.bind(this);
    this.state = {
      curProduct: undefined
    };
  }

  componentDidMount() {
    let curProduct = this.props.products.entities[this.props.params.productId];
    this.setState({curProduct});
  }

  componentWillReceiveProps(nextProps) {
    let curProduct = nextProps.products.entities[nextProps.params.productId];
    if (curProduct) {
      this.setState({curProduct});
    } else {
      this.props.push('/device/products');
    }
  }

  onUpdate() {
    const product = Object.assign({}, this.state.curProduct, {
      name: this.refs.name.value,
      description: this.refs.description.value,
      type: this.refs.type.value,
      version: this.refs.version.value,
      home: this.refs.home.value
    });

    this.props.updateProduct(product);
  }

  onReturn() {
    this.props.go(-1);
  }

  onPublish() {
    if (this.state.curProduct.state == 'DRAFT') {
      const product = Object.assign({}, this.state.curProduct, {
        state: 'PUBLISHED'
      });
      this.props.updateProduct(product);
    }
  }

  onUnpublish() {
    if (this.state.curProduct.state == 'PUBLISHED') {
      const product = Object.assign({}, this.state.curProduct, {
        state: 'DRAFT'
      });
      this.props.updateProduct(product);
    }
  }

  onDestroy() {
    this.props.destroyProduct(this.state.curProduct.productId);
  }

  render() {
    const state = this.state;
    const props = this.props;
    return (props.products.loading || !state.curProduct ? <Loading /> :
        <div className="device-products-details">
          <div className="form-action">
            <button onClick={this.onReturn} className="btn btn-default btn-return">返回</button>
            {state.curProduct.state == 'DRAFT' ?
              <button onClick={this.onPublish} className="submit btn btn-default btn-publish">发布产品</button>
              :
              <button onClick={this.onUnpublish} className="submit btn btn-error btn-publish">下线产品</button>
            }
            <button onClick={this.onUpdate} className="btn btn-default btn-save">保存</button>
          </div>
          <div className="form-content container-fluid">
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">名称</div>
                <div className="description">产品名称，将显示在用户产品列表，产品检索的主要关键字。长度不超过32个字符。</div>
              </div>
              <div className="item-value col-lg-8">
                <input ref="name" type="text" defaultValue={state.curProduct.name}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">描述</div>
                <div className="description">产品检索的主要内容。长度不超过255个字符</div>
              </div>
              <div className="item-value col-lg-8">
                <textarea ref="description" defaultValue={state.curProduct.description}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">类别</div>
                <div className="description">产品分类</div>
              </div>
              <div className="item-value col-lg-8">
                <select ref="type" defaultValue="smartHome">
                  <option value="smartHome">智能家居</option>
                  <option value="smartHealth">智能健康</option>
                </select>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">版本</div>
                <div className="description">产品的版本号</div>
              </div>
              <div className="item-value col-lg-8">
                <input type="number" ref="version" defaultValue={state.curProduct.version}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">网站</div>
                <div className="description">用户访问产品入口URL</div>
              </div>
              <div className="item-value col-lg-8">
                <input type="text" ref="home" defaultValue={state.curProduct.home}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">图标</div>
                <div className="description">产品Logo，将显示在用户产品列表</div>
              </div>
              <div className="item-value col-lg-8">
                <FileInput imgSrc={state.curProduct.logo}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">Token</div>
                <div className="description">添加产品时平台颁发的凭证，用于验证产品</div>
              </div>
              <div className="item-value col-lg-8">
                <button className="btn btn-default">下载凭证</button>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">删除</div>
                <div className="description">删除产品，该操作不可恢复</div>
              </div>
              <div className="item-value col-lg-8">
                <button className="btn btn-error" onClick={this.onDestroy}>删除产品</button>
              </div>
            </div>
          </div>
          <div className="form-action">
            <button onClick={this.onReturn} className="btn btn-default btn-return">返回</button>
            {state.curProduct.state == 'DRAFT' ?
              <button onClick={this.onPublish} className="submit btn btn-default btn-publish">发布产品</button>
              :
              <button onClick={this.onUnpublish} className="submit btn btn-error btn-publish">下线产品</button>
            }
            <button onClick={this.onUpdate} className="btn btn-default btn-save">保存</button>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.device.products
  };
}

DeviceProductsDetails.propTypes = {};

DeviceProductsDetails.defaultProps = {};

export default connect(mapStateToProps, {
  go,
  push,
  updateProduct,
  destroyProduct
})(DeviceProductsDetails)