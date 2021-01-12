import React from 'react';


export class Entrar extends React.Component {

    render() {
        return (
            <div className="entrar-container">
                <div className="logar-container">
                    <div className="input-logar">
                        <h2>Entrar</h2>
                        <form className="formulario-logar">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email-logar"/>

                            <label htmlFor="senha">Senha:</label>
                            <input type="text" id="senha-logar"/>
                        </form>
                        <button className="botao-logar">Entrar</button>
                    </div>
                    <div className="info-logar">
                        <p className="ajuda-logar">Lembre-se de mim</p>
                        <p className="ajuda-logar">Precisa de Ajuda?</p>
                    </div>
                    <div>
                        <p>Conectar com o Facebook</p>
                        <p>Novo por aqui? Assine agora</p>
                    </div>
                </div>
            </div>
        );
    }
}