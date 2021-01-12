import React from 'react';
import styled from "styled-components";
import { Footer } from './Footer';
import wallpaper from '../img/login-background.jpg';
import { Navbar } from './Navbar';
import { Entrar } from './Entrar';

const Wrapper = styled.section`
    background-image: url(${wallpaper});
    background-size: cover;
`

const Logo = styled.h1`

`

export class Login extends React.Component {

    render() {
        return(
            <Wrapper>
                <div className="logo-navbar">
                    <h1 className="logo">NETFLIX</h1>
                </div>
                <Entrar />
                <Footer />
            </Wrapper>
            
        );
    }
}