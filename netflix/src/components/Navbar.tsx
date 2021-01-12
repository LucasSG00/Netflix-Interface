import React from 'react';


export class Navbar extends React.Component {

    render() {
        return (
            <div className="navbar-container">
                <div className="logo-navbar">
                    <h1 className="logo">NETFLIX</h1>
                </div>
                <div className="menu-navbar">
                    <a href="#">Início</a>
                    <a href="#">Séries</a>
                    <a href="#">Filmes</a>
                    <a href="#">Minha Lista</a>
                </div>
            </div>
        );
    }
}