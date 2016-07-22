/**
 * Created by huangbin on 6/28/16.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'

import {noop} from '../utils'

class MenuItem extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    active: PropTypes.bool,
    onClick: PropTypes.func,
    onSelect: PropTypes.func
  };
  static defaultProps = {
    selected: false,
    active: false,
    onClick: noop,
    onSelect: noop
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
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

  render() {
    const props = this.props;
    const classes = {
      'menu-item': 1,
      'active': props.active,
      'selected': props.selected
    };

    const style = {
      ...props.style
    };

    const attrs = {
      ...props.attribute,
      className: classNames(classes)
    };

    const mouseEvent = {
      onClick: this.onClick
    };

    return (
      <li
        style={style}
        {...attrs}
        {...mouseEvent}
      >
        {props.children}
      </li>
    )
  }
}

export default connect()(MenuItem)