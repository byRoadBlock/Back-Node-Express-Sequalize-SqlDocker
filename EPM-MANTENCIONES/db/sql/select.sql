USE [EPM-MANTENCIONES]

declare @IdCliente INT = 14593012

SELECT C.IdCliente, 
        CD.Nombre, 
        EC.Nombre, 
        CONVERT(VARCHAR(10),C.CreacionFecha, 110) CreacionFecha, 
        C.CreacionUsuario
FROM CLIENTE C 
INNER JOIN CLIENTE_DETALLE CD ON CD.IdCliente = C.IdCliente
INNER JOIN ESTADO_CLIENTE EC ON EC.IdEstado = C.Estado
WHERE c.IdCliente = @IdCliente
AND     C.estado = 1

SELECT 
    d.IdDivision IDDIVISION, 
    D.Nombre DIVISION ,
    TD.IdTipo IDTIPOTIVISION,
    TD.Nombre TIPODIVISION,
    DA.IdDivision IDDIVISIONAREA,
    DA.Descripcion DIVISIONAREA,
    A.IdArea IDAREA,
    A.Nombre AREA,
    TA.IdTipo IDTIPOAREA,
    TA.Nombre TIPOAREA
FROM CLIENTE C
INNER JOIN DIVISION D ON C.IdCliente = D.IdCliente
INNER JOIN TIPO_DIVISION TD ON TD.IdTipo = D.IdTipo
LEFT JOIN DIVISION_AREA DA ON DA.IdDivision = D.IdDivision
INNER JOIN AREA A ON A.IdArea = DA.IdArea
INNER JOIN TIPO_AREA TA ON TA.IdTipo = A.IdTipo
WHERE C.IdCliente = @IdCliente 
AND     C.estado = 1
 
SELECT 
    d.IdDivision IDDIVISION, 
    D.Nombre DIVISION ,
    TD.IdTipo IDTIPOTIVISION,
    TD.Nombre TIPODIVISION, 
    DN.IdDivision IDNEGOCIO,
    DN.Descripcion DIVISIONNEGOCIO, 
    N.IdNegocio IDNEGOCIO,
    N.Nombre NEGOCIO,
    TN.IdTipo IDTIPONEGOCIO,
    TN.Nombre TIPONEGOCIO
FROM DIVISION D
INNER JOIN TIPO_DIVISION TD ON TD.IdTipo = D.IdTipo
INNER JOIN CLIENTE C ON C.IdCliente = D.IdCliente
LEFT JOIN DIVISION_NEGOCIO DN ON DN.IdDivision = D.IdDivision
INNER JOIN NEGOCIO N ON N.IdNegocio = DN.IdNegocio
INNER JOIN TIPO_NEGOCIO TN ON TN.IdTipo = N.IdTipo
WHERE C.IdCliente = @IdCliente
AND   C.estado = 1
