/**
 * Created by huangbin on 6/25/16.
 */
import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';
import {noop} from '../utils';
import MdFileUpload from 'react-icons/lib/md/file-upload';

import './FileInput.less';

class FileInput extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
    };
  }

  componentDidMount() {
  }

  onClick() {
    if (this.refs.file) {
      this.refs.file.click();
    }
  }
  

  render() {
    const state = this.state;
    const props = this.props;
    return (
      <div className="file-input">
        <div className="img">
          <img src={props.imgSrc} />
        </div>
        <div className="button" role="button" tabindex="0">
          <input ref="file" type="file"/>
          <button className="btn btn-default" onClick={this.onClick}>
            <span className="icon"><MdFileUpload/></span>
            <span className="text">{props.children || '上传文件'}</span>
          </button>
        </div>
      </div>
    );
  }
}

FileInput.propTypes = {
  onClick: PropTypes.func,
  imgSrc: PropTypes.string
};

FileInput.defaultProps = {
  onClick: noop,
  imgSrc: ''
};

export default FileInput;