/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {loadGroups, loadApiDetails} from './actions';

import './ApiExplore.less';

class ApiExplore extends Component {
  constructor(props) {
    super(props);
    this.onApiActive = this.onApiActive.bind(this);
    this.onGroupActive = this.onGroupActive.bind(this);
    this.state = {
      curGroup: undefined,
      curApi: undefined,
      groupActive: true
    };
  }

  componentDidMount() {
    this.props.loadGroups();
  }

  onApiActive() {
    if (this.state.groupActive) {
      this.state.groupActive = false;
      this.setState({groupActive: this.state.groupActive});
    }
  }

  onGroupActive() {
    if (!this.state.groupActive) {
      this.state.groupActive = true;
      this.setState({groupActive: this.state.groupActive});
    }
  }

  onSelectGroup(groupId) {
    let curGroup = this.props.groups.entities[groupId];
    let groupActive = true;
    this.setState({curGroup, groupActive});
  }

  onSelectApi(apiId) {
    let curApi = this.props.functions.entities[apiId];
    let groupActive = false;
    this.setState({curApi, groupActive});
  }

  render() {
    const state = this.state;
    const props = this.props;
    const navClasses = {
      groupNavClasses: {
        'active': state.groupActive
      },
      apiNavClasses: {
        'active': !state.groupActive
      }
    };
    const navTabClasses = {
      groupTabClasses: {
        'panel-content group-panel-content': 1,
        'active': state.groupActive
      },
      apiTabClasses: {
        'panel-content api-panel-content': 1,
        'active': !state.groupActive
      }
    };
    return (
      <div className="api-explore">
        <div className="content-left">
          <div className="panel group-panel">
            <div className="panel-header">API Group</div>
            <div className="panel-content">
              <div className="list">
                <ul>
                  {
                    Object.keys(props.groups.entities).map(key => {
                      const group = props.groups.entities[key];
                      const classes = {
                        'active': state.curGroup && state.curGroup.groupId == group.groupId
                      };
                      return (
                        <li key={group.groupId}
                            onClick={e => this.onSelectGroup(group.groupId)}
                            className={classNames(classes)}>
                          {group.name}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="panel function-panel">
            <div className="panel-header">
              {state.curGroup ? state.curGroup.name : 'All API'}
            </div>
            <div className="panel-content">
              <div className="list">
                <ul>
                  {state.curGroup ?
                    state.curGroup.functions.map(func => {
                      const classes = {
                        'active': state.curApi && state.curApi.functionId == func.functionId
                      };
                      return (
                        <li key={func.functionId}
                            onClick={e => this.onSelectApi(func.functionId)}
                            className={classNames(classes)}
                        >
                          {func.name}
                        </li>
                      );
                    })
                    :
                    Object.keys(props.groups.entities).map(key => {
                      const group = props.groups.entities[key];
                      if (group.functions && group.functions.length > 0) {
                        return group.functions.map(func => {
                          return (
                            <li key={func.functionId}
                                onClick={e => this.onSelectApi(func.functionId)}>
                              {func.name}
                            </li>
                          );
                        })
                      }
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="panel details-panel">
            <div className="navs">
              <ul>
                <li className={classNames(navClasses.groupNavClasses)} onClick={this.onGroupActive}>API Group</li>
                <li className={classNames(navClasses.apiNavClasses)} onClick={this.onApiActive}>API</li>
              </ul>
            </div>
            {state.curGroup ?
              <div className={classNames(navTabClasses.groupTabClasses)}>
                <div className="name">{state.curGroup.name}</div>
                <div className="id">ID: {state.curGroup.groupId}</div>
                <div className="description">描述：{state.curGroup.description}</div>
                <div className="caption">API：</div>
                <div className="list">
                  <div className="list-item head">
                    <div className="list-item-name">名称</div>
                    <div className="list-item-description">描述</div>
                  </div>
                  {
                    state.curGroup.functions.map(func => {
                      return (
                        <div className="list-item" key={func.functionId}>
                          <div className="list-item-name">{func.name}</div>
                          <div className="list-item-description">{func.description}</div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
              :
              <div className={classNames(navTabClasses.groupTabClasses)}></div>
            }
            {state.curApi ?
              <div className={classNames(navTabClasses.apiTabClasses)}>
                <div className="name">{state.curApi.name}</div>
                <div className="id">ID: {state.curApi.functionId}</div>
                <div className="description">描述：{state.curApi.description}</div>
                <div className="caption">返回值类型：</div>
                <div className="list">
                  <div className="list-item">
                    <div className="list-item-name">{state.curApi.returnType}</div>
                  </div>
                </div>
                <div className="caption">输入参数：</div>
                <div className="list">
                  <div className="list-item head">
                    <div className="list-item-type">类型</div>
                    <div className="list-item-name">名称</div>
                    <div className="list-item-description">描述</div>
                  </div>
                  {state.curApi.input.map(arg => {
                    return (
                      <div className="list-item" key={arg.name}>
                        <div className="list-item-type">{arg.type}</div>
                        <div className="list-item-name">{arg.name}</div>
                        <div className="list-item-description">{arg.name}</div>
                      </div>
                    );
                  })
                  }
                </div>
                <div className="caption">输出参数：</div>
                <div className="list">
                  <div className="list-item head">
                    <div className="list-item-type">类型</div>
                    <div className="list-item-name">名称</div>
                    <div className="list-item-description">描述</div>
                  </div>
                  {state.curApi.output.map(arg => {
                    return (
                      <div className="list-item" key={arg.name}>
                        <div className="list-item-type">{arg.type}</div>
                        <div className="list-item-name">{arg.name}</div>
                        <div className="list-item-description">{arg.name}</div>
                      </div>
                    );
                  })
                  }
                </div>
              </div>
              :
              <div className={classNames(navTabClasses.apiTabClasses)}></div>
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    groups: state.api.groups,
    functions: state.api.functions
  };
}


ApiExplore.propTypes = {};

ApiExplore.defaultProps = {};

export default connect(mapStateToProps, {
  loadGroups,
  loadApiDetails
})(ApiExplore)


