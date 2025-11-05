let tipoareaDB = require('../../../data-access/tipo-area')
let tipoarea = module.exports = {}

tipoarea.getAll = (req, res, next) => {
    tipoareaDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

tipoarea.findId = (req, res, next) => {
    let id = req.params.id
    tipoareaDB.find('IdTipoArea', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

tipoarea.add = (req, res, next) => {
    tipoareaDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

tipoarea.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    tipoareaDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'tipoarea not found'})
    })
    .catch(err => next(err))
}

tipoarea.delete = (req, res, next) => {
    let id = req.params.id
    tipoareaDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'tipoarea deleted'})
        return res.status(404).json({message: 'tipoarea not found'})
    })
    .catch(err => next(err))
}

// Routes
