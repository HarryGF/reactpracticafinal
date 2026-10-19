import React, { Component } from 'react'
import ServiceApuestas from '../services/ServiceApuestas'
import { Navigate } from 'react-router-dom'

export default class CreateApuesta extends Component {
    
    service = new ServiceApuestas()
    cajaUsuario = React.createRef()
    cajaReal = React.createRef()
    cajaAtletico = React.createRef()
    cajaFecha = React.createRef()
    state = {
        status: false, 
        mensaje: null
    }

    insertApuesta = (event) => {
        event.preventDefault()
        let apuesta = {
            idApuesta: 0,
            usuario: this.cajaUsuario.current.value,
            resultado: this.cajaReal.current.value + ' - ' + this.cajaAtletico.current.value,
            fecha: this.cajaFecha.current.value
        }
        this.service.createApuesta(apuesta)
            .then(response => {
                this.setState({
                    status: true
                })
            }).catch(error =>  {
                this.setState({
                    mensaje: error.message
                })
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.status == true && 
                        <Navigate to={'/apuestas/' + true}/>
                }
                {
                    this.state.mensaje &&
                        (<p style={{color:'red', fontWeight: 'bold'}}>
                            {this.state.mensaje}
                        </p>)
                }
                <form>
                    <label>Usuario: </label>
                    <input type="text" className='form-control'
                        ref={this.cajaUsuario}/>
                    <label>Real Madrid: </label>
                    <input type="number" className='form-control'
                        ref={this.cajaReal}/>
                    <label>Atletico de Madrid: </label>
                    <input type="number" className='form-control'
                        ref={this.cajaAtletico}/>
                    <label>Fecha: </label>
                    <input type="date" className='form-control'
                        ref={this.cajaFecha}/>
                    <button className='btn btn-info' onClick={this.insertApuesta}>
                        Nueva Apuesta
                    </button>        
                </form>
            </div>
        )
    }
}
