/**
 * Created by huangbin on 7/4/16.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'

import {noop} from '../utils'

class Tab extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    const props = this.props;
    const classes = {
      'tab-content': 1,
      'selected': props.selected
    };
    return (
      <div className={classNames(classes)}>
        {props.children}
      </div>
    )
  }
}

Tab.propTypes = {
  elemKey: PropTypes.string,
  tabName: PropTypes.string,
  closable: PropTypes.bool,
  selected: PropTypes.bool
};

Tab.defaultProps = {
  elemKey: '',
  tabName: '',
  closable: true,
  selected: false
};

export default connect()(Tab)