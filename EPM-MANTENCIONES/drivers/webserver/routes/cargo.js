let cargoDB = require('../../../data-access/cargo')
let cargo = module.exports = {}

cargo.getAll = (req, res, next) => {
    cargoDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

cargo.findId = (req, res, next) => {
    let id = req.params.id
    cargoDB.find('IdCargo', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

cargo.add = (req, res, next) => {
    cargoDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

cargo.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    cargoDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'cargo not found'})
    })
    .catch(err => next(err))
}

cargo.delete = (req, res, next) => {
    let id = req.params.id
    cargoDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'cargo deleted'})
        return res.status(404).json({message: 'cargo not found'})
    })
    .catch(err => next(err))
}

// Routes
