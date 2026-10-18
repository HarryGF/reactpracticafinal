import React, { Component } from 'react'
import logo from './../assets/images/champions_league.webp'
import { Navigate, NavLink } from 'react-router-dom'
import ServiceApuestas from '../services/ServiceApuestas'
export default class MenuComponent extends Component {

    service = new ServiceApuestas()
    state = {
        equipos: []
    }

    loadEquipos = () => {
        this.service.getEquipos().then(result => {
            this.setState({
                equipos: result
            })
        })
    }

    componentDidMount = () => {
        this.loadEquipos()
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}} data-bs-theme="light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                        <img src={logo} style={{width:"60px"}}/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/apuestas">Apuestas</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Equipos
                    </a>
                    <ul className="dropdown-menu">
                        {
                            this.state.equipos.map((equipo, index) => {
                                return(<li key={index}>
                                    <NavLink className="dropdown-item" to={"/equipos/" + equipo.idEquipo}>
                                        {equipo.nombre}
                                    </NavLink>
                                </li>)
                            })
                        }
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>        
        )
    }
}