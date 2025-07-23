import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    componentDidMount() {
        // Проверяем авторизацию
        if (!AuthService.getCurrentUser()) {
            this.setState({ redirect: true });
        }
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to="/login" />;
        }

        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>Домашняя страница</h3>
                </header>
            </div>
        );
    }
}
