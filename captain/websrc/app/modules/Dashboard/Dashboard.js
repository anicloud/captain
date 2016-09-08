/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import './Dashboard.less';

class Dashboard extends Component {
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
      <div className="dashboard">
        <div className="entry">
          <div className="logo">Anicloud Developer Console </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

Dashboard.propTypes = {

};

Dashboard.defaultProps = {
  
};

export default connect(mapStateToProps)(Dashboard)