const express = require('express')
const app = express()
const routes = require('./routes')
const config = require('../../config')
const cors = require('cors');
const bodyParser = require('body-parser')

const swaggerUIPath = require("swagger-ui-express");
const swaggerjsonFilePath = require("../../docs/swagger.json");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var options = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "Servidor Espacio API",
    customfavIcon: "/assets/fav.png"
};

app.use('/api', routes)
app.use("/api-docs", swaggerUIPath.serve, swaggerUIPath.setup(swaggerjsonFilePath, options));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// 404
app.use(function (req, res) {
    res.status(404).json({
        status: 'Page does not exist'
    });
});

app.listen(config.PORT, () => {
    console.log(`Listening ${config.NODE_ENV} on PORT: ${config.PORT}`);
})
