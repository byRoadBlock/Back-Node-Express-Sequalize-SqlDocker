let tipodivisionDB = require('../../../data-access/tipo-division')
let tipodivision = module.exports = {}

tipodivision.getAll = (req, res, next) => {
    tipodivisionDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

tipodivision.findId = (req, res, next) => {
    let id = req.params.id
    tipodivisionDB.find('IdTipoDivision', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

tipodivision.add = (req, res, next) => {
    tipodivisionDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

tipodivision.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    tipodivisionDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'tipodivision not found'})
    })
    .catch(err => next(err))
}

tipodivision.delete = (req, res, next) => {
    let id = req.params.id
    tipodivisionDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'tipodivision deleted'})
        return res.status(404).json({message: 'tipodivision not found'})
    })
    .catch(err => next(err))
}

// Routes
