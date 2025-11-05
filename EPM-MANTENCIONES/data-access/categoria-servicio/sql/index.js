let repoCategoriaServicio = require('../../../db/sql/models/categoria-servicio') 
let modeloCategoriaServicio = require('../../../models/categoria-servicio/index') 
let categoriaservicioDto = require('./serializer') 

let getAll = async () => {
    return repoCategoriaServicio.findAll({}).then(categoriaservicioDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoCategoriaServicio.findAll({where : { [prop]: val}})
    return categoriaservicioDto(resp[0])
}

let add = async (CategoriaServicioInfo) => {
    let categoriaservicio = modeloCategoriaServicio(CategoriaServicioInfo)

    let newCategoriaServicio = {
        IdCategoria: categoriaservicio.getIdCategoria(),
        Nombre: categoriaservicio.getNombre(),
        Descripcion: categoriaservicio.getDescripcion(),
        Estado: categoriaservicio.getEstado(),
        CreacionFecha: categoriaservicio.getCreacionFecha(),
        CreacionUsuario: categoriaservicio.getCreacionUsuario(),
        EdicionFecha: categoriaservicio.getEdicionFecha(),
        EdicionUsuario: categoriaservicio.getEdicionUsuario(),
    }
    return repoCategoriaServicio.create(newCategoriaServicio).then(categoriaservicioDto)
}

let update = async (id, CategoriaServicioInfo) => {
    let categoriaservicio = modeloCategoriaServicio(CategoriaServicioInfo)

    let updateCategoriaServicio = {
        IdCategoria: categoriaservicio.getIdCategoria(),
        Nombre: categoriaservicio.getNombre(),
        Descripcion: categoriaservicio.getDescripcion(),
        Estado: categoriaservicio.getEstado(),
        CreacionFecha: categoriaservicio.getCreacionFecha(),
        CreacionUsuario: categoriaservicio.getCreacionUsuario(),
        EdicionFecha: categoriaservicio.getEdicionFecha(),
        EdicionUsuario: categoriaservicio.getEdicionUsuario(),
    }
    return repoCategoriaServicio.update(updateCategoriaServicio, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoCategoriaServicio.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
