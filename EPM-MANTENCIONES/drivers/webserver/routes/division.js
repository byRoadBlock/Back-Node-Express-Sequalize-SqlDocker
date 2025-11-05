let divisionDB = require('../../../data-access/division')
let division = module.exports = {}

division.getAll = (req, res, next) => {
    divisionDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

division.findId = (req, res, next) => {
    let id = req.params.id
    divisionDB.find('IdDivision', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

division.add = (req, res, next) => {
    divisionDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

division.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    divisionDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'division not found'})
    })
    .catch(err => next(err))
}

division.delete = (req, res, next) => {
    let id = req.params.id
    divisionDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'division deleted'})
        return res.status(404).json({message: 'division not found'})
    })
    .catch(err => next(err))
}

// Routes
