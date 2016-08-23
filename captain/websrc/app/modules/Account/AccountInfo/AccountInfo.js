/**
 * Created by huangbin on 7/29/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import FileInput from '../../../components/FileInput';

import './AccountInfo.less'

class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const state = this.state;
    const props = this.props;

    return (
      <div className="account-info">
        <div className="account-form">
          <div className="form-content container-fluid">
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">头像</div>
                <div className="description">个人头像</div>
              </div>
              <div className="item-value col-lg-8">
                <FileInput imgSrc={props.info.entity.avatarUrl}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">名称</div>
                <div className="description">开发者名称，将显示在商店的作者栏。长度不超过32个字符。</div>
              </div>
              <div className="item-value col-lg-8">
                <input type="text" defaultValue={props.info.entity.name}/>
              </div>
            </div>
            <div className="form-item row">
              <div className="item-key col-lg-6 col-lg-offset-3">
                <div className="name">邮箱</div>
                <div className="description">开发者注册邮箱，将显示在商店的作者联系栏。长度不超过32个字符。</div>
              </div>
              <div className="item-value col-lg-8">
                <input type="text" defaultValue={props.info.entity.email}/>
              </div>
            </div>
          </div>
          <div className="form-action">
            <button onClick={this.onSave} className="btn btn-default btn-save">保存</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    info: state.account.info
  };
}

AccountInfo.propTypes = {};

AccountInfo.defaultProps = {};

export default connect(mapStateToProps)(AccountInfo)