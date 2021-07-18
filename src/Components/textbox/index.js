import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Textbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      autofocus,
      className = '',
      defaultValue,
      disabled,
      helpText,
      onChange,
      onKeyPress,
      placeholder,
      readOnly,
      value
    } = this.props;

    return (
      <div className={`textbox flex ${className}`}>
        <input
          autoFocus={autofocus}
          className='full-width'
          type='text'
          value={value || ''}
          defaultValue={defaultValue}
          {...((!disabled && onChange) && { onChange })}
          {...((!disabled && onKeyPress) && { onKeyPress })}
          disabled={disabled}
          placeholder={placeholder}
          readOnly={readOnly} />
        <div className='help-text'>{helpText}</div>
      </div>
    );
  }
}

Textbox.propTypes = {
  autofocus: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  helpText: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  value: PropTypes.string
};

export default Textbox;
