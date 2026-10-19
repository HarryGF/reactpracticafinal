import React, { Component } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import ServiceApuestas from '../services/ServiceApuestas'

export default class DeleteApuesta extends Component {
    service = new ServiceApuestas()

    state = {
        borrar: false,
        status: false
    }

    borrarApuesta = (id, borrar) => {
        if(borrar) {
            this.service.deleteApuesta(id).then(result => {
                console.log("Apuesta borrada")
                this.setState({
                    status: true,
                    borrar: true
                })
            })
        } else {
            this.setState({
                status: true
            })
        }
    }

    render() {
        if(this.state.status == true){
            if(this.state.borrar == true) {
                return(<Navigate to={'/apuestas/' + true}/>)
            } else {
                return(<Navigate to={'/apuestas/' + false}/>)
            }
        } else {
            return (
                <div>
                    <h3>¿Estas seguro que quieres borrar esta apuesta?</h3>
                    <button  className='btn btn-info'
                    onClick={() => {
                        this.borrarApuesta(this.props.idApuesta, false)
                    }}>
                        Cancelar
                    </button>
                    <button className='btn btn-danger'
                    onClick={() => {
                        this.borrarApuesta(this.props.idApuesta, true)
                    }}>
                        Borrar
                    </button>
                </div>
            )
        }
    }
}
