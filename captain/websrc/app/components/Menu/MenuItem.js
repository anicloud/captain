/**
 * Created by huangbin on 6/28/16.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'

import {noop} from '../utils'

class MenuItem extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onHover = this.onHover.bind(this);
  }

  onClick(e) {
    const props = this.props;
    const info = {
      event: e,
      key: props.elemKey,
      keyPath: [props.elemKey]
    };
    this.props.onClick(info);
    props.onSelect(info);
  }
  
  onHover() {
    this.props.onHover();
  }
  
  render() {
    const props = this.props;
    const classes = {
      'menu-item': 1,
      'selected': props.selected
    };

    return (
      <li className={classNames(classes)} 
          onClick={this.onClick} 
          onMouseEnter={this.onHover}>
        {props.children}
      </li>
    )
  }
}

MenuItem.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  onHover: PropTypes.func
};

MenuItem.defaultProps = {
  selected: false,
  onClick: noop,
  onSelect: noop,
  onHover: noop
};

export default MenuItem;