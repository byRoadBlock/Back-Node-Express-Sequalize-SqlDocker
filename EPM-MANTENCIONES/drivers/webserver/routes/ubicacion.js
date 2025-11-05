let ubicacionDB = require('../../../data-access/ubicacion')
let ubicacion = module.exports = {}

ubicacion.getAll = (req, res, next) => {
    ubicacionDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

ubicacion.findId = (req, res, next) => {
    let id = req.params.id
    ubicacionDB.find('IdUbicacion', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

ubicacion.add = (req, res, next) => {
    ubicacionDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

ubicacion.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    ubicacionDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'ubicacion not found'})
    })
    .catch(err => next(err))
}

ubicacion.delete = (req, res, next) => {
    let id = req.params.id
    ubicacionDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'ubicacion deleted'})
        return res.status(404).json({message: 'ubicacion not found'})
    })
    .catch(err => next(err))
}

// Routes
