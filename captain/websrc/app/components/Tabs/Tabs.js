/**
 * Created by huangbin on 7/4/16.
 */
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import {noop} from '../utils'
import TabNav from './TabNav'

import {MdClose} from 'react-icons/lib/md'

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.onSelectTab = this.onSelectTab.bind(this);
    this.onCloseTab = this.onCloseTab.bind(this);
    this.state = {
      selectedKey: 'selectedKey' in props ? props.selectedKey :
        'defaultSelectedKey' in props ? props.defaultSelectedKey :
          this.getDefaultSelectedKey(props)
    };
  }

  componentWillReceiveProps(nextProps) {
    let selectedKey = this.state.selectedKey;
    if ('selectedKey' in nextProps && selectedKey !== nextProps.selectedKey) {
      const child = nextProps.children.find(child => child.key === nextProps.selectedKey);
      if (child) {
        selectedKey = nextProps.selectedKey;
        this.setState({selectedKey});
      }
    }
  }

  getDefaultSelectedKey(props) {
    let selectedKey;
    React.Children.forEach(props.children, child => {
      if (!selectedKey) {
        selectedKey = child.key;
      }
    });
    return selectedKey;
  }

  onSelectTab(info) {
    let selectedKey = this.state.selectedKey;
    if (info.tabKey !== selectedKey) {
      selectedKey = info.tabKey;
      this.setState({selectedKey});
      this.props.onSelectTab(info);
    }
  }

  onCloseTab(info) {
    this.props.onCloseTab(info);
  }

  getNavsAndTabs() {
    const state = this.state;
    const props = this.props;
    const navs = [];
    const tabs = [];
    React.Children.forEach(props.children, child => {
      const key = child.key;
      const navProps = {
        key: `nav_${key}`,
        elemKey: `nav_${key}`,
        tabKey: key,
        selected: state.selectedKey === key,
        titleNode: <span>{child.props.tabName}</span>,
        closeNode: <span><MdClose></MdClose></span>,
        onClickTab: this.onSelectTab,
        onCloseTab: this.onCloseTab
      };
      navs.push(
        <TabNav {...navProps}></TabNav>
      );

      const tabProps = {
        key: key,
        elemKey: key,
        tabName: child.props.tabName,
        selected: state.selectedKey === key,
        closable: child.closable
      };
      tabs.push(
        React.cloneElement(child, tabProps)
      );
    });
    return {navs, tabs};
  }

  render() {
    const {navs, tabs} = this.getNavsAndTabs();
    return (
      <div className="tabs">
        <div className="tab-navs">
          {navs}
        </div>
        <div className="tab-contents">
          {tabs}
        </div>
      </div>
    )
  }
}

Tabs.propTypes = {
  defaultSelectedKey: PropTypes.string,
  selectedKey: PropTypes.string,
  onSelectTab: PropTypes.func,
  onCloseTab: PropTypes.func
};

Tabs.defaultProps = {
  defaultSelectedKey: '',
  selectedKey: '',
  onSelectTab: noop,
  onCloseTab: noop
};


export default Tabs;