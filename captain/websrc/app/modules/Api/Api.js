/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import SearchInput from 'components/SearchInput';

import './Api.less';

class Api extends Component {
  constructor(props) {
    super(props);
    this.onRegister = this.onRegister.bind(this);
    this.onHome = this.onHome.bind(this);
    this.state = {};
  }

  componentDidMount() {
  }

  onHome() {
    if (this.props.pathname !== '/api') {
      this.props.dispatch(push('/api'));
    }
  }

  onRegister() {
    if (this.props.pathname !== '/api/register') {
      this.props.dispatch(push('/api/register'));
    }
  }

  render() {
    const state = this.state;
    const props = this.props;
    return (
      <div className="api">
        <div className="header">
          <div className="logo" onClick={this.onHome}>Anicloud API Lib</div>
          <div className="search-tool">
            <SearchInput placeholder="搜索API"/>
          </div>
          <div className="action">
            {props.location.pathname.startsWith('/api/register') ||
            <button className="btn btn-default" onClick={this.onRegister}>创建API</button>
            }
          </div>
        </div>
        {props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

Api.propTypes = {};

Api.defaultProps = {};

export default connect(mapStateToProps)(Api)
