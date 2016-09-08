/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {loadAccountApp} from '../actions';
import Loading from 'components/Loading';

import './AccountApp.less'

class AccountApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.loadAccountApp();
  }

  render() {
    const state = this.state;
    const props = this.props;

    if (props.account.loading) {
      return (
        <Loading />
      );
    } else {
      return (
        <div className="app-account">
          {props.children}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    account: state.account.app
  };
}

AccountApp.propTypes = {};

AccountApp.defaultProps = {};

export default connect(mapStateToProps, {
  loadAccountApp
})(AccountApp)