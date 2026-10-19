import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ServiceApuestas from '../services/ServiceApuestas'

export default class ApuestasComponent extends Component {
    service = new ServiceApuestas()
    state = {
        apuestas: []
    }

    loadApuestas = () => {
        this.service.getApuestas().then(result =>{
            this.setState({
                apuestas: result
            })
        })
    }

    componentDidMount = () => {
        if(this.props.estado == 'true') {
            this.loadApuestas()
        }
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.estado != this.props.estado) {
            this.loadApuestas()
        }
    }

    render() {
        return (
            <div style={{margin:'auto', width: '80%', textAlign:'center'}}>
                <NavLink className='btn btn-danger'
                to={'/crearapuesta'}>
                    Realizar apuesta
                </NavLink>
                <h1>Local: Real Madrid, Visitante: Atletico de Madrid</h1>
                <table className='table table-info'>
                    <thead>
                        <tr>
                            <th>USUARIO</th>
                            <th>RESULTADO</th>
                            <th>FECHA</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.apuestas.map((apuesta, index) => {
                                return(<tr key={index}>
                                    <td>{apuesta.usuario}</td>
                                    <td>{apuesta.resultado}</td>
                                    <td>{apuesta.fecha}</td>
                                    <td><NavLink className='btn btn-danger'
                                        to={'/borrarapuesta/' + apuesta.idApuesta}>
                                            Borrar
                                        </NavLink>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
