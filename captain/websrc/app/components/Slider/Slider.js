/**
 * Created by huangbin on 7/14/16.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'

import {noop} from '../utils'

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdViewList
} from 'react-icons/lib/md'
import './slider.less'

class Slider extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {

  }

  render() {
    const props = this.props;
    return (
      <div className='slider'>
        
      </div>
    )
  }
}

Slider.propTypes = {
  collapsed: PropTypes.bool
};

Slider.defaultProps = {
  collapsed: true
};

export default connect()(Slider)