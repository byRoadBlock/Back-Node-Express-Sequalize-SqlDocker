let tipoubicacionDB = require('../../../data-access/tipo-ubicacion')
let tipoubicacion = module.exports = {}

tipoubicacion.getAll = (req, res, next) => {
    tipoubicacionDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

tipoubicacion.findId = (req, res, next) => {
    let id = req.params.id
    tipoubicacionDB.find('IdTipoUbicacion', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

tipoubicacion.add = (req, res, next) => {
    tipoubicacionDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

tipoubicacion.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    tipoubicacionDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'tipoubicacion not found'})
    })
    .catch(err => next(err))
}

tipoubicacion.delete = (req, res, next) => {
    let id = req.params.id
    tipoubicacionDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'tipoubicacion deleted'})
        return res.status(404).json({message: 'tipoubicacion not found'})
    })
    .catch(err => next(err))
}

// Routes
