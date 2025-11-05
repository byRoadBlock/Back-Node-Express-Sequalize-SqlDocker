let tipocargoDB = require('../../../data-access/tipo-cargo')
let tipocargo = module.exports = {}

tipocargo.getAll = (req, res, next) => {
    tipocargoDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

tipocargo.findId = (req, res, next) => {
    let id = req.params.id
    tipocargoDB.find('IdTipoCargo', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

tipocargo.add = (req, res, next) => {
    tipocargoDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

tipocargo.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    tipocargoDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'tipocargo not found'})
    })
    .catch(err => next(err))
}

tipocargo.delete = (req, res, next) => {
    let id = req.params.id
    tipocargoDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'tipocargo deleted'})
        return res.status(404).json({message: 'tipocargo not found'})
    })
    .catch(err => next(err))
}

// Routes
