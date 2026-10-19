import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import DescripcionComponent from './DescripcionComponent'
import JugadoresComponent from './JugadoresComponent'
import JugadorComponent from './JugadorComponent'
import ApuestasComponent from './ApuestasComponent'
import CreateApuesta from './CreateApuesta'
import DeleteApuesta from './DeleteApuesta'

export default class Router extends Component {
    render() {

        function EquipoElement() {
            let { idEquipo } = useParams()
            return (<DescripcionComponent idEquipo={idEquipo}/>)
        }

        function JugadoresElement() {
            let { idEquipo } = useParams()
            return (<JugadoresComponent idEquipo={idEquipo}/>)
        }

        function JugadorElement() {
            let { idJugador } = useParams()
            return(<JugadorComponent idJugador={idJugador}/>)
        }

        function ApuestasElement() {
            let { estado } = useParams()
            return(<ApuestasComponent estado={estado}/>)
        }

        function ApuestaElement() {
            let { idApuesta } = useParams()
            return(<DeleteApuesta idApuesta={idApuesta}/>)
        }

        return (
            <BrowserRouter>
                <MenuComponent/>
                <Routes>
                    <Route path='/' element={<HomeComponent/>}/>
                    <Route path='/equipos/:idEquipo' element={<EquipoElement/>}/>
                    <Route path='/jugadores/:idEquipo' element={<JugadoresElement/>}/>
                    <Route path='/jugador/:idJugador' element={<JugadorElement/>}/>
                    <Route path='/apuestas/:estado' element={<ApuestasElement/>}/>
                    <Route path='/crearapuesta' element={<CreateApuesta/>}/>
                    <Route path='/borrarapuesta/:idApuesta' element={<ApuestaElement/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
