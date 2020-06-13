import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-danger">
            <Link to='/' className="navbar-brand mb-0 h1">To Do List</Link>
            <Link to="/create-task" type="button" className="btn btn-success">Crear</Link>
        </nav>
    )
}

export default Navbar;
