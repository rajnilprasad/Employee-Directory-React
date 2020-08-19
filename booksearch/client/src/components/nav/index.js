import React from 'react';


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
            <a className="navbar-brand text-light" href="/">Book Search</a>
            <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-light" href="/">Search <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="/saved">Saved</a>
                    </li>


                </ul>

            </div>
        </nav>
    )
}

export default Nav;