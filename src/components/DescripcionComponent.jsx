import React, { Component } from 'react'
import ServiceApuestas from '../services/ServiceApuestas'
import { NavLink } from 'react-router-dom'

export default class DescripcionComponent extends Component {

    service = new ServiceApuestas()
    state = {
        detalles: {}
    }

    loadDetalles = () => {
        this.service.getEquipo(this.props.idEquipo).then(result => {
            console.log(result)
            this.setState({
                detalles: result
            })
        })
    }

    componentDidMount = () => {
        this.loadDetalles()
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idEquipo != this.props.idEquipo) {
            this.loadDetalles()
        }
    }

    render() {
        return (
            <div style={{margin:'auto', width: '80%', textAlign:'center'}}>
                <h2>{this.state.detalles.nombre}</h2>
                <img src={this.state.detalles.imagen} style={{height: '170px' ,width:'150px'}}/>
                <h3>Champions: {this.state.detalles.champions}</h3>
                <p>{this.state.detalles.descripcion}</p>
                <NavLink className='btn btn-info'
                to={"/jugadores/" + this.state.detalles.idEquipo}>
                    Jugadores
                </NavLink>
                <NavLink className='btn btn-info'
                to={'/'}>
                    Volver
                </NavLink>
            </div>
        )
    }
}
