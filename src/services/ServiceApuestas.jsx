import axios from 'axios'
import Global from '../Global'

export default class ServiceApuestas {
    async getEquipos() {
        let url = Global.urlApiApuestas
        let request = "api/equipos"
        let response = await axios.get(url + request)
        console.log("Cargando equipos")
        return response.data
    }

    async getEquipo(id) {
        let url = Global.urlApiApuestas
        let request = "api/equipos/" + id
        let response = await axios.get(url + request)
        console.log("Cargando informacion del equipo")
        return response.data
    }

    async getJugadores(id) {
        let url = Global.urlApiApuestas
        let request = "api/jugadores/jugadoresequipos/" + id
        let response = await axios.get(url + request)
        console.log("Cargando jugadores")
        return response.data
    }

    async getDetalles(id) {
        let url = Global.urlApiApuestas
        let request = "api/jugadores/" + id
        let response = await axios.get(url + request)
        console.log("Cargando informacion del jugador")
        return response.data
    }

    async getApuestas() {
        let url = Global.urlApiApuestas
        let request = "api/apuestas"
        let response = await axios.get(url + request)
        console.log("Cargando apuestas")
        return response.data
    }

    createApuesta(apuesta) {
        return new Promise(function(resolve, reject) {
            let url = Global.urlApiApuestas
            let request = "api/apuestas"
            axios.post(url + request, apuesta)
                .then(response => {
                    console.log("Insertando apuesta")
                    resolve()
                }).catch(error => {
                    console.log("Error insertando" + error)
                    reject(error)
                })
        })
    }

    async getJugadoresNombre(nombre) {
        let url = Global.urlApiApuestas
        let request = "api/jugadores/findjugadores/" + nombre
        let response = await axios.get(url + request)
        console.log("Cargando jugadores por nombre")
        return response.data
    }
}
