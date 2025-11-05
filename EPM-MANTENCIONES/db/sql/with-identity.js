let sql = require('./connection')

async function insertWithIdentity(tableName, vals) {
    const transaction = await sql.transaction();
    try {
        await sql.query(`SET IDENTITY_INSERT dbo.${tableName} ON;`, { transaction });

            await sql.query(
                `INSERT INTO dbo.${tableName} SELECT ${vals};`,
                { transaction }
            );


        await sql.query(`SET IDENTITY_INSERT dbo.${tableName} OFF;`, { transaction });
        await transaction.commit();
    } catch (err) {
        await transaction.rollback();
        console.log(err);
        throw err;
    }
}

module.exports =  insertWithIdentity