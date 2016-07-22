/**
 * Created by huangbin on 6/28/16.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'

import {noop} from '../utils'

class SubMenu extends Component {

  static propTypes = {
    style: PropTypes.object,
    elemKey: PropTypes.string,
    parentMenu: PropTypes.object,
    title: PropTypes.node,
    active: PropTypes.bool,
    open: PropTypes.bool,
    onClick: PropTypes.func,
    onClickTitle: PropTypes.func,
    onSelect: PropTypes.func,
    onOpen: PropTypes.func
  };

  static defaultProps = {
    style: {},
    parentMenu: {},
    title: '',
    active: false,
    open: false,
    onClick: noop,
    onClickTitle: noop,
    onSelect: noop,
    onOpen: noop
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onClickTitle = this.onClickTitle.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onOpen = this.onOpen.bind(this);
  }

  onClick(e) {
    this.props.onClick(e);
  }

  onClickTitle(e) {
    const props = this.props;
    const info = {
      key: props.elemKey,
      event: e,
      open: !props.open
    };
    props.onClickTitle(info);
    this.onOpen(info);
  }

  onSelect(info) {
    this.props.onSelect(info);
  }

  onOpen(info) {
    const keyPath = (info.keyPath || []).concat(this.props.elemKey);
    this.props.onOpen({...info, keyPath})
  }

  renderMenuItem(child, index) {
    const props = this.props;
    const key = child.key;
    const extraProps = {
      elemKey: key,
      parentMenu: this,
      selectedKeys: props.selectedKeys,
      openKeys: props.openKeys,
      selected: props.selectedKeys.indexOf(key) !== -1,
      open: props.openKeys.indexOf(key) !== -1,
      onSelect: this.onSelect,
      onOpen: this.onOpen
    };
    return React.cloneElement(child, extraProps);
  }

  renderChildren(props) {
    return React.Children.map(props.children, (child, index) => {
      return this.renderMenuItem(child, index);
    });
  }

  render() {
    const props = this.props;
    const style = {
      ...props.style
    };
    const menuClasses = {
      'submenu': 1,
      'active': props.active,
      'selected': props.selected,
      'open': props.open
    };
    const menuTitleClasses = {
      'submenu-title': 1
    };
    const menuContentClasses = {
      'submenu-content': 1,
      'open': props.open
    };
    const menuEvent = {
      onClick: this.onClick
    };
    const menuTitleEvent = {
      onClick: this.onClickTitle
    };

    return (
      <li {...menuEvent} className={classNames(menuClasses)}>
        <div style={style} {...menuTitleEvent} className={classNames(menuTitleClasses)}>
          {props.title}
        </div>
        <ul className={classNames(menuContentClasses)}>
          {this.renderChildren(props)}
        </ul>
      </li>
    )
  }
}

export default connect()(SubMenu)