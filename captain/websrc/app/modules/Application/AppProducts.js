/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import './AppProducts.less';

class AppProducts extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="app-products">
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

AppProducts.propTypes = {};

AppProducts.defaultProps = {};

export default connect(mapStateToProps)(AppProducts)