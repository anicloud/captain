/**
 * Created by huangbin on 6/28/16.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'

import {noop} from '../utils'

class SubMenu extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onClickTitle = this.onClickTitle.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onHover = this.onHover.bind(this);
  }

  onClick(e) {
    this.props.onClick(e);
  }

  onClickTitle(e) {
    const props = this.props;
    const info = {
      event: e,
      key: props.elemKey,
    };
    props.onClickTitle(info);
    this.onOpen(info);
  }

  onSelect(info) {
    this.props.onSelect(info);
  }

  onOpen(info) {
    this.props.onOpen(info);
  }

  onHover() {
    this.props.onHover();
  }
  
  renderMenuItem(child, index) {
    const props = this.props;
    const key = child.key;
    const extraProps = {
      key: key,
      elemKey: key,
      parentMenu: this,
      selectedKeys: props.selectedKeys,
      openKeys: props.openKeys,
      selected: props.selectedKeys.includes(key),
      open: props.openKeys.includes(key),
      onSelect: this.onSelect,
      onOpen: this.onOpen
    };
    return React.cloneElement(child, extraProps);
  }

  render() {
    const props = this.props;
    const menuClasses = {
      'submenu': 1,
      'selected': props.selected,
      'open': props.open
    };

    return (
      <li className={classNames(menuClasses)} onClick={this.onClick}>
        <div className="submenu-title" 
             onClick={this.onClickTitle} 
             onMouseEnter={this.onHover}>
          {props.title}
        </div>
        <ul className="submenu-content">
          {React.Children.map(props.children, (child, index) => {
            return this.renderMenuItem(child, index);
          })}
        </ul>
      </li>
    )
  }
}

SubMenu.propTypes = {
  elemKey: PropTypes.string,
  parentMenu: PropTypes.object,
  title: PropTypes.node,
  open: PropTypes.bool,
  onClick: PropTypes.func,
  onClickTitle: PropTypes.func,
  onSelect: PropTypes.func,
  onOpen: PropTypes.func,
  onHover: PropTypes.func
};

SubMenu.defaultProps = {
  elemKey: '',
  parentMenu: {},
  title: '',
  open: false,
  onClick: noop,
  onClickTitle: noop,
  onSelect: noop,
  onOpen: noop,
  onHover: noop
};

export default SubMenu;