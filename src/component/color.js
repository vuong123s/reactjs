import React, { Component } from 'react';
import classNames from 'classnames';

import '../css/color.css';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class Color extends Component {
    render() {
        const { currentColor } = this.props;
        return <div className="TrafficLight">
            <div className={classNames('bulb', 'red', {
                active: currentColor === RED
            })} />
            <div className={classNames('bulb', 'orange', {
                active: currentColor === ORANGE
            })} />
            <div className={classNames('bulb', 'green', {
                active: currentColor === GREEN
            })} />
        </div>;
    }
}

export default Color;