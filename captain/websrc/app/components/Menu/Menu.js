/**
 * Created by huangbin on 6/28/16.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {noop} from '../utils'

class Menu extends Component {

  static propTypes = {
    defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),
    selectedKeys: PropTypes.arrayOf(PropTypes.string),
    defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),
    openKeys: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    onOpen: PropTypes.func
  };

  static defaultProps = {
    defaultSelectedKeys: [],
    defaultOpenKeys: [],
    onClick: noop,
    onSelect: noop,
    onOpen: noop
  };

  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.state = {
      selectedKeys: props.defaultSelectedKeys,
      openKeys: props.defaultOpenKeys
    };
  }

  onSelect(info) {
    let selectedKeys = this.state.selectedKeys;
    if (!(info.key in selectedKeys)) {
      selectedKeys = [info.key];
      this.setState({selectedKeys});
      this.props.onSelect(Object.assign({}, info, {selectedKeys}))
    }
  }

  onOpen(info) {
    let needUpdate = false;
    let openKeys = this.state.openKeys;
    if (info.open) {
      if (openKeys.indexOf(info.key) === -1) {
        openKeys = openKeys.concat(info.key);
        needUpdate = true;
      }
    } else {
      const index = openKeys.indexOf(info.key);
      if (index !== -1) {
        openKeys.splice(index, 1);
        needUpdate = true;
      }
    }
    if (needUpdate) {
      this.state.openKeys = openKeys;
      this.setState({openKeys});
      this.props.onOpen(info);
    }
  }

  getChildKey(child, index) {
    return child.key || `_${index}`;
  }

  renderMenuItem(child, index) {
    const state = this.state;
    const key = this.getChildKey(child, index);
    const extraProps = {
      key: key,
      elemKey: key,
      parentMenu: this,
      selectedKeys: state.selectedKeys,
      openKeys: state.openKeys,
      selected: state.selectedKeys.indexOf(key) !== -1,
      open: state.openKeys.indexOf(key) !== -1,
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
    return (
      <ul className='menu'>
        {this.renderChildren(props)}
      </ul>
    )
  }
}

export default connect()(Menu)