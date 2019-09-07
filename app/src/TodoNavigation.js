import React from 'react';
import { NavLink } from 'react-router-dom';

import './TodoNavigation.css';
const styleSelect = {fontWeight: "bold", color: "red",};

export default () => {
    return (
        <nav className="TodoNavigation">
{/*             <NavLink exact to="/" activeStyle={styleSelect}>Overview</NavLink>
 */}
            <NavLink exact to="/work" activeStyle={styleSelect}>Work</NavLink>

            <NavLink exact to="/private" activeStyle={styleSelect}>Private</NavLink>

            <NavLink exact to="/add" activeStyle={styleSelect}>Add todo</NavLink>
        </nav>
    )
}