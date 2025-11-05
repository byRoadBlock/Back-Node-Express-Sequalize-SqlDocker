let estadotrabajosDB = require('../../../data-access/estado-trabajos')
let estadotrabajos = module.exports = {}

estadotrabajos.getAll = (req, res, next) => {
    estadotrabajosDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

estadotrabajos.findId = (req, res, next) => {
    let id = req.params.id
    estadotrabajosDB.find('IdEstadoTrabajos', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

estadotrabajos.add = (req, res, next) => {
    estadotrabajosDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

estadotrabajos.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    estadotrabajosDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'estadotrabajos not found'})
    })
    .catch(err => next(err))
}

estadotrabajos.delete = (req, res, next) => {
    let id = req.params.id
    estadotrabajosDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'estadotrabajos deleted'})
        return res.status(404).json({message: 'estadotrabajos not found'})
    })
    .catch(err => next(err))
}

// Routes
