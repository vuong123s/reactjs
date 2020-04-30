import React, {Component} from 'react';
import logo from '../img/2.jpg';
import style from '../css/style.css';

class Header extends Component{
    render () {
        return (
            <div className = "header">
                <img src={logo} className="logo"/>
            </div>
        )
    }
}

export default Header