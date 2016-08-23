/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {go} from 'react-router-redux';
import Loading from '../../components/Loading';
import FileInput from '../../components/FileInput';
import {loadAppDetails} from './actions';
import './AppProductsDetails.less';

class AppProductsDetails extends Component {
  constructor(props) {
    super(props);
    this.onReturn = this.onReturn.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onPublish = this.onPublish.bind(this);
    this.state = {
      curProduct: undefined,
      curDetails: undefined
    };
  }

  componentDidMount() {
    let curProduct = this.props.products.entities[this.props.params.appId];
    let curDetails = this.props.details.entities[this.props.params.appId];
    if (!curDetails) {
      this.props.loadAppDetails(this.props.params.appId);
    } else {
      this.setState({curDetails});
    }
    this.setState({curProduct});
  }

  onReturn() {
    this.props.go(-1);
  }

  onSave() {

  }

  onPublish() {

  }

  render() {
    const state = this.state;
    const props = this.props;
    return (props.details.loading || !state.curDetails ? <Loading /> :
      <div className="app-products-details">
          <div className="form-action">
            <button onClick={this.onReturn} className="btn btn-default btn-return">返回</button>
            <button onClick={this.onPublish} className="submit btn btn-default btn-publish">发布应用</button>
            <button onClick={this.onSave} className="btn btn-default btn-save">保存</button>
          </div>
          <div className="form-content container-fluid">
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">名称</div>
                <div className="description">应用名称，将显示在用户应用列表，应用检索的主要关键字。长度不超过32个字符。</div>
              </div>
              <div className="item-value col-lg-8">
                <input ref="name" type="text" defaultValue={state.curDetails.name}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">描述</div>
                <div className="description">应用检索的主要内容。长度不超过255个字符</div>
              </div>
              <div className="item-value col-lg-8">
                <textarea ref="description" defaultValue={state.curDetails.description}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">类别</div>
                <div className="description">应用分类</div>
              </div>
              <div className="item-value col-lg-8">
                <select defaultValue="smartHome">
                  <option value="smartHome">智能家居</option>
                  <option value="smartHealth">智能健康</option>
                </select>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">版本</div>
                <div className="description">应用的版本号</div>
              </div>
              <div className="item-value col-lg-8">
                <input type="number" defaultValue={state.curDetails.version}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">网站</div>
                <div className="description">用户访问应用入口URL</div>
              </div>
              <div className="item-value col-lg-8">
                <input type="text" defaultValue={state.curDetails.home}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">图标</div>
                <div className="description">应用Logo，将显示在用户应用列表</div>
              </div>
              <div className="item-value col-lg-8">
                <FileInput imgSrc={state.curProduct.logo}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">Token</div>
                <div className="description">添加应用时平台颁发的凭证，用于验证应用</div>
              </div>
              <div className="item-value col-lg-8">
                <button className="btn btn-default">下载凭证</button>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">删除</div>
                <div className="description">删除应用，该操作不可恢复</div>
              </div>
              <div className="item-value col-lg-8">
                <button className="btn btn-error">删除应用</button>
              </div>
            </div>
          </div>
          <div className="form-action">
            <button onClick={this.onReturn} className="btn btn-default btn-return">返回</button>
            <button onClick={this.onPublish} className="submit btn btn-default btn-publish">发布应用</button>
            <button onClick={this.onSave} className="btn btn-default btn-save">保存</button>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    details: state.app.details,
    products: state.app.products
  };
}

AppProductsDetails.propTypes = {};

AppProductsDetails.defaultProps = {};

export default connect(mapStateToProps, {
  loadAppDetails,
  go
})(AppProductsDetails)