let infraestructuraDB = require('../../../data-access/infraestructura')
let infraestructura = module.exports = {}

infraestructura.getAll = (req, res, next) => {
    infraestructuraDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

infraestructura.findId = (req, res, next) => {
    let id = req.params.id
    infraestructuraDB.find('IdInfraestructura', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

infraestructura.add = (req, res, next) => {
    infraestructuraDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

infraestructura.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    infraestructuraDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'infraestructura not found'})
    })
    .catch(err => next(err))
}

infraestructura.delete = (req, res, next) => {
    let id = req.params.id
    infraestructuraDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'infraestructura deleted'})
        return res.status(404).json({message: 'infraestructura not found'})
    })
    .catch(err => next(err))
}

// Routes
