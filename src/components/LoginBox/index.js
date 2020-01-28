import React from "react";
import "../../styles.css";

class LoginBox extends React.Component {

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
                    Login
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

                    <a className="forgot-password" href="retrievepass"> Esqueci minha senha </a>

                    <button type="button" className="login-btn" onClick={this.submitLogin.bind(this) }>Acessar</button>

                </div>
            </div>
        );
    }

}

export default LoginBox;