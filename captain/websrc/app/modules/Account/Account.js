/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';

import './Account.less'

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    const state = this.state;
    const props = this.props;
    
    return (
      <div className="account">
        <div className="navs">
          <ul>
            <IndexLink to="/account" activeClassName="active"><li>基本信息</li></IndexLink>
            <Link to="/account/app" activeClassName="active"><li>应用账号</li></Link>
            <Link to="/account/device" activeClassName="active"><li>设备账号</li></Link>
          </ul>
        </div>
        {props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

Account.propTypes = {

};

Account.defaultProps = {
  
};

export default connect(mapStateToProps)(Account)