import React, { Component } from 'react'
import ServiceApuestas from '../services/ServiceApuestas'
import { NavLink } from 'react-router-dom'

export default class JugadoresComponent extends Component {
    
    service = new ServiceApuestas()
    state = {
        jugadores: []
    }

    loadJugadores = () => {
        this.service.getJugadores(this.props.idEquipo).then(result => {
            console.log(result)
            this.setState({
                jugadores: result
            })
        })
    }

    componentDidMount = () => {
        this.loadJugadores()
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idEquipo != this.props.idEquipo) {
            this.loadJugadores()
        }
    }

    render() {
        return (
            <div style={{margin:'auto', width: '80%', textAlign:'center'}}>
                <NavLink className='btn btn-info'
                to={"/equipos/" + this.props.idEquipo}>
                    Volver
                </NavLink>
                <table className='table table-info'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Imagen</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.jugadores.map((jugador, index) => {
                                return(<tr key={index}>
                                    <td>{jugador.nombre}</td>
                                    <td><img src={jugador.imagen}/></td>
                                    <td>
                                        <NavLink className='btn btn-danger'
                                        to={'/jugador/' + jugador.idJugador}>
                                            Detalles
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
