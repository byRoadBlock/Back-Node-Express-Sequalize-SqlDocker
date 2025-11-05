const express = require('express')
const router = express.Router()

const area = require('./area')
const areainfraestructura = require('./area-infraestructura')
const cargo = require('./cargo')
const categoriaservicio = require('./categoria-servicio')
const cliente = require('./cliente')
const clientedetalle = require('./cliente-detalle')
const division = require('./division')
const divisionarea = require('./division-area')
const divisionnegocio = require('./division-negocio')
const estadocliente = require('./estado-cliente')
const estadoorden = require('./estado-orden')
const estadotrabajos = require('./estado-trabajos')
const infraestructura = require('./infraestructura')
const infraestructuradetalle = require('./infraestructura-detalle')
const infraestructuraubicacion = require('./infraestructura-ubicacion')
const negocio = require('./negocio')
const negociodetalle = require('./negocio-detalle')
const negocioorden = require('./negocio-orden')
const negocioservicio = require('./negocio-servicio')
const orden = require('./orden')
const ordendetalle = require('./orden-detalle')
const ordenservicio = require('./orden-servicio')
const servicio = require('./servicio')
const serviciodetalle = require('./servicio-detalle')
const tipoarea = require('./tipo-area')
const tipocargo = require('./tipo-cargo')
const tipocliente = require('./tipo-cliente')
const tipodivision = require('./tipo-division')
const tipoequipamiento = require('./tipo-equipamiento')
const tipoinfraestructura = require('./tipo-infraestructura')
const tiponegocio = require('./tipo-negocio')
const tipoorden = require('./tipo-orden')
const tiposervicio = require('./tipo-servicio')
const tipoubicacion = require('./tipo-ubicacion')
const tipousuario = require('./tipo-usuario')
const ubicacion = require('./ubicacion')
const usuario = require('./usuario')
const usuariologin = require('./usuario-login')

//Detalle Servicios Expuestos DataAccess AREA
router
	.get("/area", area.getAll)
	.get("/area/:id", area.findId)
	.post("/area", area.add)
	.put("/area", area.update)
	.delete("/area", area.delete)



//Detalle Servicios Expuestos DataAccesss AREAINFRAESTRUCTURA
router
	.get("/areainfraestructura", areainfraestructura.getAll)
	.get("/areainfraestructura/:id", areainfraestructura.findId)
	.post("/areainfraestructura", areainfraestructura.add)
	.put("/areainfraestructura", areainfraestructura.update)
	.delete("/areainfraestructura", areainfraestructura.delete)



//Detalle Servicios Expuestos DataAccess CARGO
router
	.get("/cargo", cargo.getAll)
	.get("/cargo/:id", cargo.findId)
	.post("/cargo", cargo.add)
	.put("/cargo", cargo.update)
	.delete("/cargo", cargo.delete)



//Detalle Servicios Expuestos DataAccess CATEGORIASERVICIO
router
	.get("/categoriaservicio", categoriaservicio.getAll)
	.get("/categoriaservicio/:id", categoriaservicio.findId)
	.post("/categoriaservicio", categoriaservicio.add)
	.put("/categoriaservicio", categoriaservicio.update)
	.delete("/categoriaservicio", categoriaservicio.delete)



//Detalle Servicios Expuestos DataAccess CLIENTE
router
	.get("/cliente", cliente.getAll)
	.get("/cliente/:id", cliente.findId)
	.post("/cliente", cliente.add)
	.put("/cliente", cliente.update)
	.delete("/cliente", cliente.delete)



//Detalle Servicios Expuestos DataAccess CLIENTEDETALLE
router
	.get("/clientedetalle", clientedetalle.getAll)
	.get("/clientedetalle/:id", clientedetalle.findId)
	.post("/clientedetalle", clientedetalle.add)
	.put("/clientedetalle", clientedetalle.update)
	.delete("/clientedetalle", clientedetalle.delete)



//Detalle Servicios Expuestos DataAccess DIVISION
router
	.get("/division", division.getAll)
	.get("/division/:id", division.findId)
	.post("/division", division.add)
	.put("/division", division.update)
	.delete("/division", division.delete)



//Detalle Servicios Expuestos DataAccess DIVISIONAREA
router
	.get("/divisionarea", divisionarea.getAll)
	.get("/divisionarea/:id", divisionarea.findId)
	.post("/divisionarea", divisionarea.add)
	.put("/divisionarea", divisionarea.update)
	.delete("/divisionarea", divisionarea.delete)



//Detalle Servicios Expuestos DataAccess DIVISIONNEGOCIO
router
	.get("/divisionnegocio", divisionnegocio.getAll)
	.get("/divisionnegocio/:id", divisionnegocio.findId)
	.post("/divisionnegocio", divisionnegocio.add)
	.put("/divisionnegocio", divisionnegocio.update)
	.delete("/divisionnegocio", divisionnegocio.delete)



//Detalle Servicios Expuestos DataAccess ESTADOCLIENTE
router
	.get("/estadocliente", estadocliente.getAll)
	.get("/estadocliente/:id", estadocliente.findId)
	.post("/estadocliente", estadocliente.add)
	.put("/estadocliente", estadocliente.update)
	.delete("/estadocliente", estadocliente.delete)



//Detalle Servicios Expuestos DataAccess ESTADOORDEN
router
	.get("/estadoorden", estadoorden.getAll)
	.get("/estadoorden/:id", estadoorden.findId)
	.post("/estadoorden", estadoorden.add)
	.put("/estadoorden", estadoorden.update)
	.delete("/estadoorden", estadoorden.delete)



//Detalle Servicios Expuestos DataAccess ESTADOTRABAJOS
router
	.get("/estadotrabajos", estadotrabajos.getAll)
	.get("/estadotrabajos/:id", estadotrabajos.findId)
	.post("/estadotrabajos", estadotrabajos.add)
	.put("/estadotrabajos", estadotrabajos.update)
	.delete("/estadotrabajos", estadotrabajos.delete)



//Detalle Servicios Expuestos DataAccess INFRAESTRUCTURA
router
	.get("/infraestructura", infraestructura.getAll)
	.get("/infraestructura/:id", infraestructura.findId)
	.post("/infraestructura", infraestructura.add)
	.put("/infraestructura", infraestructura.update)
	.delete("/infraestructura", infraestructura.delete)



//Detalle Servicios Expuestos DataAccess INFRAESTRUCTURADETALLE
router
	.get("/infraestructuradetalle", infraestructuradetalle.getAll)
	.get("/infraestructuradetalle/:id", infraestructuradetalle.findId)
	.post("/infraestructuradetalle", infraestructuradetalle.add)
	.put("/infraestructuradetalle", infraestructuradetalle.update)
	.delete("/infraestructuradetalle", infraestructuradetalle.delete)



//Detalle Servicios Expuestos DataAccess INFRAESTRUCTURAUBICACION
router
	.get("/infraestructuraubicacion", infraestructuraubicacion.getAll)
	.get("/infraestructuraubicacion/:id", infraestructuraubicacion.findId)
	.post("/infraestructuraubicacion", infraestructuraubicacion.add)
	.put("/infraestructuraubicacion", infraestructuraubicacion.update)
	.delete("/infraestructuraubicacion", infraestructuraubicacion.delete)



//Detalle Servicios Expuestos DataAccess NEGOCIO
router
	.get("/negocio", negocio.getAll)
	.get("/negocio/:id", negocio.findId)
	.post("/negocio", negocio.add)
	.put("/negocio", negocio.update)
	.delete("/negocio", negocio.delete)



//Detalle Servicios Expuestos DataAccess NEGOCIODETALLE
router
	.get("/negociodetalle", negociodetalle.getAll)
	.get("/negociodetalle/:id", negociodetalle.findId)
	.post("/negociodetalle", negociodetalle.add)
	.put("/negociodetalle", negociodetalle.update)
	.delete("/negociodetalle", negociodetalle.delete)



//Detalle Servicios Expuestos DataAccess NEGOCIOORDEN
router
	.get("/negocioorden", negocioorden.getAll)
	.get("/negocioorden/:id", negocioorden.findId)
	.post("/negocioorden", negocioorden.add)
	.put("/negocioorden", negocioorden.update)
	.delete("/negocioorden", negocioorden.delete)



//Detalle Servicios Expuestos DataAccess NEGOCIOSERVICIO
router
	.get("/negocioservicio", negocioservicio.getAll)
	.get("/negocioservicio/:id", negocioservicio.findId)
	.post("/negocioservicio", negocioservicio.add)
	.put("/negocioservicio", negocioservicio.update)
	.delete("/negocioservicio", negocioservicio.delete)



//Detalle Servicios Expuestos DataAccess ORDEN
router
	.get("/orden", orden.getAll)
	.get("/orden/:id", orden.findId)
	.post("/orden", orden.add)
	.put("/orden", orden.update)
	.delete("/orden", orden.delete)



//Detalle Servicios Expuestos DataAccess ORDENDETALLE
router
	.get("/ordendetalle", ordendetalle.getAll)
	.get("/ordendetalle/:id", ordendetalle.findId)
	.post("/ordendetalle", ordendetalle.add)
	.put("/ordendetalle", ordendetalle.update)
	.delete("/ordendetalle", ordendetalle.delete)



//Detalle Servicios Expuestos DataAccess ORDENSERVICIO
router
	.get("/ordenservicio", ordenservicio.getAll)
	.get("/ordenservicio/:id", ordenservicio.findId)
	.post("/ordenservicio", ordenservicio.add)
	.put("/ordenservicio", ordenservicio.update)
	.delete("/ordenservicio", ordenservicio.delete)



//Detalle Servicios Expuestos DataAccess SERVICIO
router
	.get("/servicio", servicio.getAll)
	.get("/servicio/:id", servicio.findId)
	.post("/servicio", servicio.add)
	.put("/servicio", servicio.update)
	.delete("/servicio", servicio.delete)



//Detalle Servicios Expuestos DataAccess SERVICIODETALLE
router
	.get("/serviciodetalle", serviciodetalle.getAll)
	.get("/serviciodetalle/:id", serviciodetalle.findId)
	.post("/serviciodetalle", serviciodetalle.add)
	.put("/serviciodetalle", serviciodetalle.update)
	.delete("/serviciodetalle", serviciodetalle.delete)



//Detalle Servicios Expuestos DataAccess TIPOAREA
router
	.get("/tipoarea", tipoarea.getAll)
	.get("/tipoarea/:id", tipoarea.findId)
	.post("/tipoarea", tipoarea.add)
	.put("/tipoarea", tipoarea.update)
	.delete("/tipoarea", tipoarea.delete)



//Detalle Servicios Expuestos DataAccess TIPOCARGO
router
	.get("/tipocargo", tipocargo.getAll)
	.get("/tipocargo/:id", tipocargo.findId)
	.post("/tipocargo", tipocargo.add)
	.put("/tipocargo", tipocargo.update)
	.delete("/tipocargo", tipocargo.delete)



//Detalle Servicios Expuestos DataAccess TIPOCLIENTE
router
	.get("/tipocliente", tipocliente.getAll)
	.get("/tipocliente/:id", tipocliente.findId)
	.post("/tipocliente", tipocliente.add)
	.put("/tipocliente", tipocliente.update)
	.delete("/tipocliente", tipocliente.delete)



//Detalle Servicios Expuestos DataAccess TIPODIVISION
router
	.get("/tipodivision", tipodivision.getAll)
	.get("/tipodivision/:id", tipodivision.findId)
	.post("/tipodivision", tipodivision.add)
	.put("/tipodivision", tipodivision.update)
	.delete("/tipodivision", tipodivision.delete)



//Detalle Servicios Expuestos DataAccess TIPOEQUIPAMIENTO
router
	.get("/tipoequipamiento", tipoequipamiento.getAll)
	.get("/tipoequipamiento/:id", tipoequipamiento.findId)
	.post("/tipoequipamiento", tipoequipamiento.add)
	.put("/tipoequipamiento", tipoequipamiento.update)
	.delete("/tipoequipamiento", tipoequipamiento.delete)



//Detalle Servicios Expuestos DataAccess TIPOINFRAESTRUCTURA
router
	.get("/tipoinfraestructura", tipoinfraestructura.getAll)
	.get("/tipoinfraestructura/:id", tipoinfraestructura.findId)
	.post("/tipoinfraestructura", tipoinfraestructura.add)
	.put("/tipoinfraestructura", tipoinfraestructura.update)
	.delete("/tipoinfraestructura", tipoinfraestructura.delete)



//Detalle Servicios Expuestos DataAccess TIPONEGOCIO
router
	.get("/tiponegocio", tiponegocio.getAll)
	.get("/tiponegocio/:id", tiponegocio.findId)
	.post("/tiponegocio", tiponegocio.add)
	.put("/tiponegocio", tiponegocio.update)
	.delete("/tiponegocio", tiponegocio.delete)



//Detalle Servicios Expuestos DataAccess TIPOORDEN
router
	.get("/tipoorden", tipoorden.getAll)
	.get("/tipoorden/:id", tipoorden.findId)
	.post("/tipoorden", tipoorden.add)
	.put("/tipoorden", tipoorden.update)
	.delete("/tipoorden", tipoorden.delete)



//Detalle Servicios Expuestos DataAccess TIPOSERVICIO
router
	.get("/tiposervicio", tiposervicio.getAll)
	.get("/tiposervicio/:id", tiposervicio.findId)
	.post("/tiposervicio", tiposervicio.add)
	.put("/tiposervicio", tiposervicio.update)
	.delete("/tiposervicio", tiposervicio.delete)



//Detalle Servicios Expuestos DataAccess TIPOUBICACION
router
	.get("/tipoubicacion", tipoubicacion.getAll)
	.get("/tipoubicacion/:id", tipoubicacion.findId)
	.post("/tipoubicacion", tipoubicacion.add)
	.put("/tipoubicacion", tipoubicacion.update)
	.delete("/tipoubicacion", tipoubicacion.delete)



//Detalle Servicios Expuestos DataAccess TIPOUSUARIO
router
	.get("/tipousuario", tipousuario.getAll)
	.get("/tipousuario/:id", tipousuario.findId)
	.post("/tipousuario", tipousuario.add)
	.put("/tipousuario", tipousuario.update)
	.delete("/tipousuario", tipousuario.delete)



//Detalle Servicios Expuestos DataAccess UBICACION
router
	.get("/ubicacion", ubicacion.getAll)
	.get("/ubicacion/:id", ubicacion.findId)
	.post("/ubicacion", ubicacion.add)
	.put("/ubicacion", ubicacion.update)
	.delete("/ubicacion", ubicacion.delete)



//Detalle Servicios Expuestos DataAccess USUARIO
router
	.get("/usuario", usuario.getAll)
	.get("/usuario/:id", usuario.findId)
	.post("/usuario", usuario.add)
	.put("/usuario", usuario.update)
	.delete("/usuario", usuario.delete)



//Detalle Servicios Expuestos DataAccess USUARIOLOGIN
router
	.get("/usuariologin", usuariologin.getAll)
	.get("/usuariologin/:id", usuariologin.findId)
	.post("/usuariologin", usuariologin.add)
	.put("/usuariologin", usuariologin.update)
	.delete("/usuariologin", usuariologin.delete)


module.exports = router