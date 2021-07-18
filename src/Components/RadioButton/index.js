import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './radio.scss';

class Radiobutton extends Component {
    constructor(props) {
        super(props);
    }

    renderRadioButtons = (config) => {
        return config.map((radio, index) => {
            let { text, value, disabled = false } = radio,
                { selectedValue, onChange } = this.props;

            disabled = this.props.disabled || disabled;

            return (
                <div className='radiobutton' key={index}>
                    <label className={`container ${value === selectedValue ? 'active-container': ''}`}>
                        <input
                            type='radio'
                            value={value}
                            disabled={disabled}
                            checked={value === selectedValue ? true : false}
                            {...((!disabled && onChange) && { onChange })}
                            name='radio' />
                        <span className='checkmark'></span>
                        <div className='radiobutton-text'>{text}</div>
                    </label>
                </div>
            );
        });
    }

    render() {
        let {
            className = '',
            config = []
        } = this.props;

        return (
            <div className={`radio-button-group ${className}`}>
                {this.renderRadioButtons(config)}
            </div>
        );
    }
}

Radiobutton.propTypes = {
    className: PropTypes.string,
    config: PropTypes.array.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.string.isRequired
};

export default Radiobutton;
