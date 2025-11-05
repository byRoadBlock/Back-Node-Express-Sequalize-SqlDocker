let tipoequipamientoDB = require('../../../data-access/tipo-equipamiento')
let tipoequipamiento = module.exports = {}

tipoequipamiento.getAll = (req, res, next) => {
    tipoequipamientoDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

tipoequipamiento.findId = (req, res, next) => {
    let id = req.params.id
    tipoequipamientoDB.find('IdTipoEquipamiento', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

tipoequipamiento.add = (req, res, next) => {
    tipoequipamientoDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

tipoequipamiento.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    tipoequipamientoDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'tipoequipamiento not found'})
    })
    .catch(err => next(err))
}

tipoequipamiento.delete = (req, res, next) => {
    let id = req.params.id
    tipoequipamientoDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'tipoequipamiento deleted'})
        return res.status(404).json({message: 'tipoequipamiento not found'})
    })
    .catch(err => next(err))
}

// Routes
