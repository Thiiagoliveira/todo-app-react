import React from 'react'
import { Link } from "react-router-dom";
import './Menu.css'

export default function Menu(props) {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Link className="navbar-brand" to="/todo">
                <i className="far fa-calendar-check"></i>
                <span className="branch-text">Home</span>
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/todo">
                            <span className="item-text">Todo</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            <span className="item-text">Tópicos</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}