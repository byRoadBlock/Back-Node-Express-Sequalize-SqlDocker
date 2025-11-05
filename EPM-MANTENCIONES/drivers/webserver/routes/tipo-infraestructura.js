let tipoinfraestructuraDB = require('../../../data-access/tipo-infraestructura')
let tipoinfraestructura = module.exports = {}

tipoinfraestructura.getAll = (req, res, next) => {
    tipoinfraestructuraDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

tipoinfraestructura.findId = (req, res, next) => {
    let id = req.params.id
    tipoinfraestructuraDB.find('IdTipoInfraestructura', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

tipoinfraestructura.add = (req, res, next) => {
    tipoinfraestructuraDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

tipoinfraestructura.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    tipoinfraestructuraDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'tipoinfraestructura not found'})
    })
    .catch(err => next(err))
}

tipoinfraestructura.delete = (req, res, next) => {
    let id = req.params.id
    tipoinfraestructuraDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'tipoinfraestructura deleted'})
        return res.status(404).json({message: 'tipoinfraestructura not found'})
    })
    .catch(err => next(err))
}

// Routes
