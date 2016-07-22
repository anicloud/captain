/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'

import {loadDevices, loadFuncs, invokeFunction} from '../actions'

import Sidebar from '../components/Sidebar/Sidebar'
import Debug from '../components/Debug/Debug'
import Status from '../components/Status/Status'

import '../styles/app.less'

class App extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onLoadDevices = this.onLoadDevices.bind(this);
    this.onLoadDebug = this.onLoadDebug.bind(this);
    this.onInvoke = this.onInvoke.bind(this);
    this.state = {
      selectedDeviceKey: ``,
      selectedDevice: {}
    };
  }

  componentDidMount() {
  }

  onSelect(info) {
    const props = this.props;
    let selectedDeviceKey = this.state.selectedDeviceKey;
    let selectedDevice = this.state.selectedDevice;
    const [masterId, slaveId] = info.key.split('_', 2);
    if (info.key !== selectedDeviceKey && props.devices.entities.hasOwnProperty(masterId)) {
      selectedDeviceKey = info.key;
      const masterDevice = props.devices.entities[masterId];
      if (masterDevice && masterDevice.slaves) {
        masterDevice.slaves.forEach(slave => {
          if (slave.deviceId == slaveId) {
            selectedDevice = slave;
          }
        })
      }
      this.setState({selectedDeviceKey, selectedDevice});
      props.loadFuncs(masterId, slaveId);
    }
  }

  onOpen(info) {
    const props = this.props;
    let selectedDeviceKey = this.state.selectedDeviceKey;
    let selectedDevice = this.state.selectedDevice;
    if (info.key !== selectedDeviceKey && props.devices.entities.hasOwnProperty(info.key)) {
      selectedDeviceKey = info.key;
      selectedDevice = props.devices.entities[info.key];
      this.setState({selectedDeviceKey, selectedDevice});
      props.loadFuncs(info.key, -1);
    }
  }

  onLoadDevices() {
    const props = this.props;
    props.loadDevices();
  }

  onLoadDebug() {
    
  }

  onInvoke(key, invocation) {
    this.props.invokeFunction(key, invocation);
  }

  render() {
    const state = this.state;
    const props = this.props;
    const sidebarProps = {
      loading: props.devices.loading,
      loaded: props.devices.loaded,
      devices: props.devices.entities,
      onSelect: this.onSelect,
      onOpen: this.onOpen,
      onLoad: this.onLoadDevices
    };
    const debugProps = {
      loading: props.functions.loading,
      loaded: props.functions.loaded,
      device: state.selectedDevice,
      functions: props.functions.entities && props.functions.entities.hasOwnProperty(state.selectedDeviceKey) ? props.functions.entities[state.selectedDeviceKey] : [],
      invocations: props.invocations,
      onLoadDebug: this.onLoadDebug,
      onInvoke: this.onInvoke
    };
    const statusProps = {
      device: state.selectedDevice ? state.selectedDevice : {}
    };
    return (
      <div className={'app-wrapper'}>
        <Sidebar {...sidebarProps}></Sidebar>
        <Debug {...debugProps}></Debug>
        <Status {...statusProps}></Status>
      </div>
    );
  }
}

function StateToProps(state) {
  return {
    ...state
  };
}

App.propTypes = {
  devices: PropTypes.object,
  functions: PropTypes.object,
  invocations: PropTypes.object
};

App.defaultProps = {
  devices: {
    loading: false,
    loaded: false,
    entities: {}
  },
  functions: {
    loading: false,
    loaded: false,
    entities: {}
  },
  invocations: {
    loadingKeys: [],
    entities: {}
  }
};

export default connect(StateToProps, {
  loadDevices,
  loadFuncs,
  invokeFunction
})(App)