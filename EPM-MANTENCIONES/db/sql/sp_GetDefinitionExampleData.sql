ALTER PROCEDURE sp_GetDefinitionExampleData(
    @IdCliente INT
)
AS
/*
DECLARE @IdCliente int = 14593012
EXEC sp_GetDefinitionExampleData @IdCliente

*/

SELECT C.IdCliente, 
        CD.Nombre, 
        EC.Nombre, 
        CONVERT(VARCHAR(10),C.CreacionFecha, 110) CreacionFecha, 
        C.CreacionUsuario
FROM CLIENTE C 
INNER JOIN CLIENTE_DETALLE CD ON CD.IdCliente = C.IdCliente
INNER JOIN ESTADO_CLIENTE EC ON EC.IdEstado = C.Estado
where c.IdCliente = @IdCliente
AND     C.estado = 1

SELECT 
    d.IdDivision ID, 
    D.Nombre DIVISION ,
    DN.Descripcion DIVISIONNEGOCIO, 
    TD.Nombre TIPODIVISION, 
    N.Nombre NEGOCIO,
    TN.Nombre TIPONEGOCIO,
    DA.Descripcion AREA,
    TA.Nombre TIPOAREA
FROM DIVISION D
INNER JOIN TIPO_DIVISION TD ON TD.IdTipo = D.IdTipo
INNER JOIN CLIENTE C ON C.IdCliente = D.IdCliente
LEFT JOIN DIVISION_NEGOCIO DN ON DN.IdDivision = D.IdDivision
INNER JOIN NEGOCIO N ON N.IdNegocio = DN.IdNegocio
INNER JOIN TIPO_NEGOCIO TN ON TN.IdTipo = N.IdTipo
LEFT JOIN DIVISION_AREA DA ON DA.IdDivision = D.IdDivision
INNER JOIN AREA A ON A.IdArea = DA.IdArea
INNER JOIN TIPO_AREA TA ON TA.IdTipo = A.IdTipo
WHERE C.IdCliente = @IdCliente
