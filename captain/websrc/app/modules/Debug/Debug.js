/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import DeviceList from './DeviceList';
import FuncInfo from './FuncInfo';
import DeviceStatus from './DeviceStatus';
import DebugTools from './DebugTools';
import Loading from 'components/Loading';
import {loadDebugDevices, invokeFunction} from './actions';
import './Debug.less';

class Debug extends Component {
  constructor(props) {
    super(props);
    this.onSelectMaster = this.onSelectMaster.bind(this);
    this.onSelectSlave = this.onSelectSlave.bind(this);
    this.onSelectFunc = this.onSelectFunc.bind(this);
    this.onHoverDevice = this.onHoverDevice.bind(this);
    this.onInvoke = this.onInvoke.bind(this);
    this.state = {
      curDevice: undefined,
      curMaster: undefined,
      curSlave: undefined,
      curFunc: undefined,
      hoverDevice: undefined
    };
  }

  componentDidMount() {
    if (!this.props.devices.loading) {
      this.props.loadDebugDevices();
    }
  }

  onSelectMaster(deviceId) {
    let curMaster = this.props.devices.entities[deviceId];
    let curDevice = curMaster;
    this.setState({curDevice, curMaster});
  }

  onSelectSlave(deviceId) {
    const [masterId, slaveId] = deviceId.split('_', 2);
    let curMaster = this.props.devices.entities[masterId];
    let curSlave = curMaster.slaves.find(slave => slave.deviceId === slaveId);
    let curDevice = curSlave;
    this.setState({curDevice, curMaster, curSlave});
  }

  onSelectFunc(func) {
    if (func && func !== this.state.curFunc) {
      this.setState({curFunc: func});
    }
  }

  onHoverDevice(device) {
    this.setState({hoverDevice: device});
  }

  onInvoke(key, invocation) {
    this.props.invokeFunction(key, invocation);
  }

  render() {
    const state = this.state;
    const props = this.props;
    if (props.devices.loading) {
      return (
        <Loading />
      )
    } else {
      return (
        <div className="debug">
          <div className="debug-sidebar">
            <DeviceList devices={props.devices}
                        onSelectMaster={this.onSelectMaster}
                        onSelectSlave={this.onSelectSlave}
                        onHover={this.onHoverDevice}/>
            <DeviceStatus device={state.hoverDevice}/>
          </div>
          <div className="debug-content">
            <FuncInfo device={state.curDevice} functions={props.functions} onSelectFunc={this.onSelectFunc}/>
            <DebugTools device={state.curDevice} invocations={props.invocations} selectedFunc={state.curFunc}
                        onInvoke={this.onInvoke}/>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    devices: state.debug.devices,
    functions: state.debug.functions,
    invocations: state.debug.invocations
  };
}

Debug.propTypes = {};

Debug.defaultProps = {};

export default connect(mapStateToProps, {
  loadDebugDevices,
  invokeFunction
})(Debug)