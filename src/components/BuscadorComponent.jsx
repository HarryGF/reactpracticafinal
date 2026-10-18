import React, { Component } from 'react'

export default class BuscadorJugadoresComponent extends Component {
    cajaNombre = React.createRef()

    buscarJugadores = (e) => {
        e.preventDefault()
        let nombre = this.cajaNombre.current.value
        this.props.metodo(nombre)
    }

    render() {
        return (
            <form onSubmit={this.buscarJugadores} style={{margin: '20px auto', width: '50%'}}>
                <input type='text' ref={this.cajaNombre} className='form-control'/>
                <button className='btn btn-info' style={{marginTop: '10px'}}>
                    Buscar
                </button>
            </form>
        )
    }
}