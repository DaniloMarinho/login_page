import React from "react";
import "../../styles.css";

class RegisterBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e){

    }

    render() {
        return (
            <div className = "inner-container">
                <div className = "header">
                    Cadastro
                </div>
                <div className = "box">

                    <div className = "input-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" className = "login-input" placeholder="Email"/>
                    </div>

                    <div className = "input-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" className = "login-input" placeholder="Senha"/>
                    </div>

                    <div className = "input-group">
                        <label htmlFor="password">Confirmar senha</label>
                        <input type="password" name="password" className = "login-input" placeholder="Senha"/>
                    </div>

                    

                    <div className = "tc"> 
                    <input required type="checkbox" className="check-box"/> Li e concordo com os 
                    <a className="forgot-password" href="tc"> termos e condições</a> </div>

                    <button type="button" className="login-btn" onClick={this.submitLogin.bind(this) }>Enviar</button>

                </div>
            </div>
        );
    }

}

export default RegisterBox;