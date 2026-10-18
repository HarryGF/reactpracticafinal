import React, { Component } from 'react'
import ServiceApuestas from '../services/ServiceApuestas'
import { NavLink } from 'react-router-dom'

export default class JugadorComponent extends Component {
    service = new ServiceApuestas()
    state = {
        detalles: {}
    }

    loadJugador = () => {
        this.service.getDetalles(this.props.idJugador).then(result=> {
            this.setState({
                detalles: result
            })
        })
    }

    componentDidMount = () => {
        this.loadJugador()
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idJugador != this.props.idJugador) {
            this.loadJugador()
        }
    }

    render() {
        return (
            <div style={{margin:'auto', width: '80%', textAlign:'center'}}>
                <h2>{this.state.detalles.nombre}</h2>
                <img src={this.state.detalles.imagen} style={{height: '100px', width:'100px'}}/>
                <h3>{this.state.detalles.posicion}</h3>
                <p>{this.state.detalles.fechaNacimiento}</p>
                <p>{this.state.detalles.pais}</p>
                <NavLink className='btn btn-info'
                to={"/jugadores/" + this.state.detalles.idEquipo}>
                    Jugadores
                </NavLink>
            </div>
        )
    }
}
