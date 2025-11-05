let ordenDB = require('../../../data-access/orden')
let orden = module.exports = {}

orden.getAll = (req, res, next) => {
    ordenDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

orden.findId = (req, res, next) => {
    let id = req.params.id
    ordenDB.find('IdOrden', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

orden.add = (req, res, next) => {
    ordenDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

orden.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    ordenDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'orden not found'})
    })
    .catch(err => next(err))
}

orden.delete = (req, res, next) => {
    let id = req.params.id
    ordenDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'orden deleted'})
        return res.status(404).json({message: 'orden not found'})
    })
    .catch(err => next(err))
}

// Routes
