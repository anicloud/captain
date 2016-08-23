/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Link from 'react-router/lib/Link';
import {loadApp} from './actions';

import './Application.less'

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const products = this.props.products;
    if (!products.loaded && !products.loading) {
      this.props.loadApp();
    }
  }

  render() {
    const state = this.state;
    const props = this.props;

    return (
      <div className="application">
        <div className="navs">
          <ul>
            <Link to="/application/products" activeClassName="active"><li>应用产品线</li></Link>
            <Link to="/application/reports" activeClassName="active"><li>统计信息</li></Link>
          </ul>
        </div>
        {props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.app.products
  };
}

Application.propTypes = {

};

Application.defaultProps = {

};

export default connect(mapStateToProps, {
  loadApp
})(Application)