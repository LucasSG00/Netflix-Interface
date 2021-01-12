import React from 'react';

export class Footer extends React.Component {
    render() {
        return(
            <div className="footer-container">
                <div className="netflix-content">
                    <h4 className="titulo-footer">Dúvidas? Ligue 0800-761-4631</h4>
                    <div className="menu-footer">
                        <a href="#" className="item-footer">Perguntas Frequentes</a>
                        <a href="#" className="item-footer">Centro de Ajuda</a>
                        <a href="#" className="item-footer">Termos de uso</a>
                        <a href="#" className="item-footer">Privacidade</a>
                        <a href="#" className="item-footer">Preferências de cookies</a>
                        <a href="#" className="item-footer">Informações corporativas</a>
                    </div>
                    
                </div>
                <div className="criador">
                    <p>
                        Copyright © Lucas Santos Gonçalves -
                        <a href="https://github.com/LucasSG00">
                            LucasSG00
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}