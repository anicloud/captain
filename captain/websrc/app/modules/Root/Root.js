/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';
import {actions} from '../Account';
import Loading from 'components/Loading';

import './Root.less'

class Root extends Component {
  constructor(props) {
    super(props);
    this.onGotoAccount = this.onGotoAccount.bind(this);
    this.state = {};
  }

  componentDidMount() {
    this.props.loadAccountInfo();
  }

  onGotoAccount() {
    this.props.push('/account');
  }

  render() {
    const state = this.state;
    const props = this.props;
    if (!props.account.info.loaded || props.account.info.loading) {
      return(
        <Loading />
      );
    } else {
      return (
        <div className="app">
          <div className="sidebar">
            <div className="brand">
              <Link to="/">Developer Console</Link>
            </div>
            <div className="user">
              <div className="avatar">
                <img src={props.account.info.entity.avatarUrl} onClick={this.onGotoAccount}/>
              </div>
              <div className="info">
                <div className="username" onClick={this.onGotoAccount}>{props.account.info.entity.name}</div>
                <div className="email" onclick={this.onGotoAccount}>{props.account.info.entity.email}</div>
              </div>
            </div>
            <div className="navs">
              <ul>
                <IndexLink to="/" activeClassName="active">
                  <li>概览</li>
                </IndexLink>
                <Link to="/application" activeClassName="active">
                  <li>应用产品线</li>
                </Link>
                <Link to="/device" activeClassName="active">
                  <li>设备产品线</li>
                </Link>
                <Link to="/account" activeClassName="active">
                  <li>账号设置</li>
                </Link>
                <Link to="/api" activeClassName="active">
                  <li>API管理</li>
                </Link>
                <Link to="/debug" activeClassName="active">
                  <li>调试</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="app-content">
            {props.children}
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    account: state.account
  };
}

Root.propTypes = {};

Root.defaultProps = {};

export default connect(mapStateToProps, {
  push,
  loadAccountInfo: actions.loadAccountInfo
})(Root)