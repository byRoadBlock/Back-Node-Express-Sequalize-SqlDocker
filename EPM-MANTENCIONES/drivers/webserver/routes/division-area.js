let divisionareaDB = require('../../../data-access/division-area')
let divisionarea = module.exports = {}

divisionarea.getAll = (req, res, next) => {
    divisionareaDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

divisionarea.findId = (req, res, next) => {
    let id = req.params.id
    divisionareaDB.find('IdDivisionArea', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

divisionarea.add = (req, res, next) => {
    divisionareaDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

divisionarea.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    divisionareaDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'divisionarea not found'})
    })
    .catch(err => next(err))
}

divisionarea.delete = (req, res, next) => {
    let id = req.params.id
    divisionareaDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'divisionarea deleted'})
        return res.status(404).json({message: 'divisionarea not found'})
    })
    .catch(err => next(err))
}

// Routes
