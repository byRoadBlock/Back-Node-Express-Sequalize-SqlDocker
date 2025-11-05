let repoCargo = require('../../../db/sql/models/cargo') 
let modeloCargo = require('../../../models/cargo/index') 
let cargoDto = require('./serializer') 

let getAll = async () => {
    return repoCargo.findAll({}).then(cargoDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoCargo.findAll({where : { [prop]: val}})
    return cargoDto(resp[0])
}

let add = async (CargoInfo) => {
    let cargo = modeloCargo(CargoInfo)

    let newCargo = {
        IdCargo: cargo.getIdCargo(),
        IdTipo: cargo.getIdTipo(),
        Nombre: cargo.getNombre(),
        Descripcion: cargo.getDescripcion(),
        Estado: cargo.getEstado(),
        CreacionFecha: cargo.getCreacionFecha(),
        CreacionUsuario: cargo.getCreacionUsuario(),
        EdicionFecha: cargo.getEdicionFecha(),
        EdicionUsuario: cargo.getEdicionUsuario(),
    }
    return repoCargo.create(newCargo).then(cargoDto)
}

let update = async (id, CargoInfo) => {
    let cargo = modeloCargo(CargoInfo)

    let updateCargo = {
        IdCargo: cargo.getIdCargo(),
        IdTipo: cargo.getIdTipo(),
        Nombre: cargo.getNombre(),
        Descripcion: cargo.getDescripcion(),
        Estado: cargo.getEstado(),
        CreacionFecha: cargo.getCreacionFecha(),
        CreacionUsuario: cargo.getCreacionUsuario(),
        EdicionFecha: cargo.getEdicionFecha(),
        EdicionUsuario: cargo.getEdicionUsuario(),
    }
    return repoCargo.update(updateCargo, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoCargo.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
