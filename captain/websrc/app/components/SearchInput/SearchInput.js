/**
 * Created by huangbin on 8/4/16.
 */
import React, {PropTypes, Component} from 'react';
import {MdSearch} from 'react-icons/lib/md';
import classNames from 'classnames';
import {noop} from '../utils';

import './SearchInput.less';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.state = {
      focus: false,
      autoComplete: false,
      visibleData: []
    };
  }

  componentDidMount() {
    const props = this.props;
    if (props.autoComplete && props.dataSource && props.dataSource.length > 0) {
      this.setState({
        visibleData: this.props.dataSource,
        autoComplete: true
      });
    }
  }

  onFocus() {
    let focus = this.state.focus;
    if (!focus) {
      focus = true;
      this.setState({focus});
      this.refs.input.focus();
      this.props.onFocus();
    }
  }

  onBlur() {
    let focus = this.state.focus;
    if (focus) {
      focus = false;
      this.setState({focus});
    }
  }

  onChange() {
    const str = this.refs.input.value.trim();
    const state = this.state;
    const props = this.props;
    if (state.autoComplete) {
      let visibleData = props.dataSource;
      if (str.length > 0) {
        visibleData = visibleData.filter(data => {
          if (props.filter) {
            return props.filter(data);
          } else {
            return data.name.includes(str)
          }
        });
      }
      this.setState({visibleData});
    }
    return props.onChange(this.refs.input.value);
  }

  onSelect(data) {
    this.onBlur();
    this.props.onSelect(data);
  }

  renderChildren(props) {
    const inputProps = {
      ref: 'input',
      onChange: this.onChange,
      placeholder: props.placeholder
    };
    if (props.children) {
      return React.Children.map(props.children, child => {
        if (child.type === input) {
          return React.cloneElement(child, inputProps);
        } else {
          return child;
        }
      });
    } else {
      return [
        <span key="search-icon" className="search-icon"><MdSearch/></span>,
        <span key="search-box" className="search-box"><input {...inputProps}/></span>
      ]
    }

  }

  renderAutocomplete() {
    return (
      <div className="auto-complete">
        {this.state.visibleData.map(data => {
          return (
            <div key={data.key} className="complete-item" onClick={e => this.onSelect(data)}>
              {data.name}
            </div>
          )
        })}
      </div>
    );
  }
  
  render() {
    const state = this.state;
    const props = this.props;
    const classes = {
      'search-input': 1,
      'focus': state.focus
    };
    return (
      <div className={classNames(classes)}
           tabIndex="-1"
           onClick={this.onFocus}
           onFocus={this.onFocus}
           onBlur={this.onBlur}
      >
        {this.renderChildren(props)}
        {state.autoComplete && this.renderAutocomplete()}
      </div>
    );
  }
}

SearchInput.propTypes = {
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  autoComplete: PropTypes.bool,
  dataSource: PropTypes.array,
  filter: PropTypes.func,
  onSelect: PropTypes.func
};

SearchInput.defaultProps = {
  onFocus: noop,
  onBlur: noop,
  onChange: noop,
  autoComplete: false,
  dataSource: [],
  filter: null,
  onSelect: noop
};

export default SearchInput;