/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';

import './ApiRegister.less';

class ApiRegister extends Component {
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
      <div className="api-register">
        <div className="register-panel">
          <div className="panel-header">
            <div className="navs">
              <ul>
                <IndexLink to="/api/register" activeClassName="active"><li>API</li></IndexLink>
                <Link to="/api/register/group" activeClassName="active"><li>API Group</li></Link>
              </ul>
            </div>
          </div>
          <div className="panel-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

ApiRegister.propTypes = {};

ApiRegister.defaultProps = {};

export default connect(mapStateToProps)(ApiRegister)