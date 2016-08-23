/**
 * Created by huangbin on 6/28/16.
 */

import React, {Component, PropTypes} from 'react';
import {noop} from '../utils';
import './Menu.less';

class Menu extends Component {

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
    // if (!selectedKeys.includes(info.key)) {
    //   selectedKeys.push(info.key);
    // } else {
    //   selectedKeys = selectedKeys.filter(key => key !== info.key);
    // }
    selectedKeys = [info.key];
    this.setState({selectedKeys});
    this.props.onSelect(Object.assign({}, info, {selectedKeys}));
  }

  onOpen(info) {
    let needUpdate = false;
    let openKeys = this.state.openKeys;
    if (!openKeys.includes(info.key)) {
      openKeys.push(info.key);
    } else {
      openKeys = openKeys.filter(key => key !== info.key);
    }
    this.setState({openKeys});
    this.props.onOpen(Object.assign({}, info, {openKeys}));
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
      selected: state.selectedKeys.includes(key),
      open: state.openKeys.includes(key),
      onSelect: this.onSelect,
      onOpen: this.onOpen
    };
    return React.cloneElement(child, extraProps);
  }

  render() {
    const state = this.state;
    const props = this.props;
    return (
      <ul className='menu'>
        {React.Children.map(props.children, (c, i) => {
          return this.renderMenuItem(c, i);
        })}
      </ul>
    )
  }
}

Menu.propTypes = {
  defaultSelectedKeys: PropTypes.array,
  defaultOpenKeys: PropTypes.array,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  onOpen: PropTypes.func
};

Menu.defaultProps = {
  defaultSelectedKeys: [],
  defaultOpenKeys: [],
  onClick: noop,
  onSelect: noop,
  onOpen: noop
};

export default Menu