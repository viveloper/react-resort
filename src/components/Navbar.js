import React, { Component } from 'react'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default class Navbar extends Component{
    state={
        isOpen: false
    }

    handleToggle = () => {
        this.setState((prevState)=>{
            return {
                isOpen: !prevState.isOpen
            }
        });
    }

    render(){
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach Resort"></img>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"></FaAlignRight>
                        </button>
                    </div>
                    <ul className={this.state.isOpen? "nav-links show-nav":"nav-links"}>
                        <Link to="/">Home</Link>
                        <Link to="/rooms">Rooms</Link>
                    </ul>
                </div>
            </nav>
        );
    }
}