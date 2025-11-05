let areainfraestructuraDB = require('../../../data-access/area-infraestructura')
let areainfraestructura = module.exports = {}

areainfraestructura.getAll = (req, res, next) => {
    areainfraestructuraDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

areainfraestructura.findId = (req, res, next) => {
    let id = req.params.id
    areainfraestructuraDB.find('IdAreaInfraestructura', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

areainfraestructura.add = (req, res, next) => {
    areainfraestructuraDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

areainfraestructura.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    areainfraestructuraDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'areainfraestructura not found'})
    })
    .catch(err => next(err))
}

areainfraestructura.delete = (req, res, next) => {
    let id = req.params.id
    areainfraestructuraDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'areainfraestructura deleted'})
        return res.status(404).json({message: 'areainfraestructura not found'})
    })
    .catch(err => next(err))
}

// Routes
