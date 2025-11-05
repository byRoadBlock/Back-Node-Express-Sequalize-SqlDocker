let infraestructuraubicacionDB = require('../../../data-access/infraestructura-ubicacion')
let infraestructuraubicacion = module.exports = {}

infraestructuraubicacion.getAll = (req, res, next) => {
    infraestructuraubicacionDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

infraestructuraubicacion.findId = (req, res, next) => {
    let id = req.params.id
    infraestructuraubicacionDB.find('IdInfraestructuraUbicacion', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

infraestructuraubicacion.add = (req, res, next) => {
    infraestructuraubicacionDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

infraestructuraubicacion.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    infraestructuraubicacionDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'infraestructuraubicacion not found'})
    })
    .catch(err => next(err))
}

infraestructuraubicacion.delete = (req, res, next) => {
    let id = req.params.id
    infraestructuraubicacionDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'infraestructuraubicacion deleted'})
        return res.status(404).json({message: 'infraestructuraubicacion not found'})
    })
    .catch(err => next(err))
}

// Routes
