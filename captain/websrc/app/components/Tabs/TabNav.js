/**
 * Created by huangbin on 7/4/16.
 */
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import {noop} from '../utils'

class TabNav extends Component {
  constructor(props) {
    super(props);
    this.onClickTab = this.onClickTab.bind(this);
    this.onCloseTab = this.onCloseTab.bind(this);
  }

  onClickTab(e) {
    const props = this.props;
    const info = {
      elemKey: props.elemKey,
      tabKey: props.tabKey,
      event: e
    };
    this.props.onClickTab(info);
  }

  onCloseTab(e) {
    const props = this.props;
    const info = {
      elemKey: props.elemKey,
      tabKey: props.tabKey,
      event: e
    };
    props.onCloseTab(info);
  }

  render() {
    const props = this.props;
    const navClasses = {
      'tab-nav': 1,
      'selected': props.selected
    };
    return (
      <div className={classNames(navClasses)}>
        <span className="tab-nav-title" onClick={this.onClickTab}>{props.titleNode}</span>
        <span className="tab-nav-close" onClick={this.onCloseTab}>{props.closeNode}</span>
      </div>
    )
  }
}

TabNav.propTypes = {
  elemKey: PropTypes.string,
  tabKey: PropTypes.string,
  titleNode: PropTypes.node,
  closeNode: PropTypes.node,
  selected: PropTypes.bool,
  onClickTab: PropTypes.func,
  onCloseTab: PropTypes.func
};

TabNav.defaultProps = {
  elemKey: '',
  tabKey: '',
  titleNode: {},
  closeNode: {},
  selected: false,
  onClickTab: noop,
  onCloseTab: noop
};

export default TabNav;