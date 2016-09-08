/**
 * Created by huangbin on 8/12/16.
 */

import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';
import {noop} from '../utils';

import './Loading.less';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
    };
  }

  componentDidMount() {
  }

  onClick(e) {
    this.props.onClick(e);
  }


  render() {
    const state = this.state;
    const props = this.props;
    return (
      <div className="loading">
        <div className="hint">{props.children || '正在加载中...'}</div>
      </div>
    );
  }
}

Loading.propTypes = {
  onClick: PropTypes.func
};

Loading.defaultProps = {
  onClick: noop
};

export default Loading;