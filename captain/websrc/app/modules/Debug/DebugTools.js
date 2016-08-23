/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {Tabs, Tab} from '../../components/Tabs';
import DebugPanel from './DebugPanel';
import './DebugTools.less';

class DebugTools extends Component {
  constructor(props) {
    super(props);
    this.onSelectTab = this.onSelectTab.bind(this);
    this.onCloseTab = this.onCloseTab.bind(this);
    this.onInvoke = this.onInvoke.bind(this);
    this.state = {
      tabs: [],
      selectedTabKey: '-1'
    };
  }

  componentWillReceiveProps(nextProps) {
    const props = this.props;
    if (props.device !== nextProps.device) {
      this.setState({
        selectedTabKey: '-1',
        tabs: []
      });
    }
    if (props.selectedFunc !== nextProps.selectedFunc) {
      let selectedTabKey = this.state.selectedTabKey;
      let tabs = this.state.tabs;
      const tabKey = this.getInvocationKey(nextProps.selectedFunc);
      const tab = tabs.find(tab => tab.key === tabKey);
      if (!tab) {
        const invocation = props.invocations.entities[tabKey];
        const tabProps = {
          key: tabKey,
          elemKey: tabKey,
          tabName: nextProps.selectedFunc.name
        };
        const panelProps = {
          disable: nextProps.invocations.loadingKeys.includes(tabKey),
          function: nextProps.selectedFunc,
          invocation: invocation,
          onInvoke: this.onInvoke
        };
        tabs.push(
          this.getTab(tabProps, panelProps)
        );
      }
      if (selectedTabKey !== tabKey) {
        selectedTabKey = tabKey;
      }
      this.setState({selectedTabKey, tabs});
    }
    if (props.invocations.loadingKeys.length !== nextProps.invocations.loadingKeys.length) {
      let tabs = this.state.tabs;
      tabs = tabs.map(tab => {
        if (nextProps.invocations.loadingKeys.includes(tab.key)) {
          let panel = React.Children.only(tab.props.children);
          if (!panel.props.disable) {
            const tabProps = Object.assign({}, tab.props, {
              key: tab.key
            });
            const panelProps = Object.assign({}, panel.props, {
              disable: true
            });
            return this.getTab(tabProps, panelProps);
          } else {
            return tab;
          }
        } else {
          let panel = React.Children.only(tab.props.children);
          if (panel.props.disable) {
            const tabProps = Object.assign({}, tab.props, {
              key: tab.key
            });
            const panelProps = Object.assign({}, panel.props, {
              disable: false,
              invocation: nextProps.invocations.entities[tab.key]
            });
            return this.getTab(tabProps, panelProps);
          } else {
            return tab;
          }
        }
      });
      this.setState({tabs});
    }
  }

  onSelectTab(info) {
    let selectedTabKey = this.state.selectedTabKey;
    if (selectedTabKey !== info.tabKey) {
      selectedTabKey = info.tabKey;
      this.setState({selectedTabKey});
    }
  }

  onCloseTab(info) {
    let selectedTabKey = this.state.selectedTabKey;
    let nextIndex;
    this.state.tabs.forEach((tab, index) => {
      if (tab.key == info.tabKey) {
        nextIndex = index - 1;
      }
    });
    const tabs = this.state.tabs.filter(tab => tab.key != info.tabKey);
    if (selectedTabKey === info.tabKey && tabs.length > 0) {
      if (nextIndex < 0) {
        nextIndex = 0;
      }
      selectedTabKey = tabs[nextIndex].key;
    } else {
      selectedTabKey = '-1';
    }
    this.setState({selectedTabKey, tabs});
  }

  onInvoke(func, input) {
    const device = this.props.device;
    const key = this.getInvocationKey(func);
    return this.props.onInvoke(key, {
      deviceId: device.masterId ? device.masterId : device.deviceId,
      slaveId: device.masterId ? device.deviceId : -1,
      function: {
        functionId: func.functionId,
        groupId: func.groupId
      },
      inputValues: input
    });
  }
  
  getTab(tabProps, panelProps) {
    return (
      <Tab {...tabProps} >
        <DebugPanel {...panelProps}></DebugPanel>
      </Tab>
    )
  }

  getInvocationKey(func) {
    const device = this.props.device;
    const masterId = device.masterId ? device.masterId : device.deviceId;
    const slaveId = device.masterId ? device.deviceId : -1;
    const key = `${masterId}_${slaveId}_${func.functionId}`;
    return key;
  }


  render() {
    const state = this.state;
    const props = this.props;
    return (
      <div className="debug-tools">
        <Tabs selectedKey={state.selectedTabKey} onSelectTab={this.onSelectTab} onCloseTab={this.onCloseTab}>
          {state.tabs}
        </Tabs>
      </div>
    );
  }
}

DebugTools.propTypes = {
  device: PropTypes.object,
  invocations: PropTypes.object,
  selectedFunc: PropTypes.object,
  onInvoke: PropTypes.func
};

DebugTools.defaultProps = {
  device: {},
  invocations: {},
  selectedFunc: {},
  onInvoke: () => {}
};

export default DebugTools;