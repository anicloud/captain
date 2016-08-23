/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import './AppAccount.less'

class AppAccount extends Component {
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
      <div className="app-account">
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

function mapDispatchToProps(dispatch) {
  return {};
}

AppAccount.propTypes = {

};

AppAccount.defaultProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(AppAccount)