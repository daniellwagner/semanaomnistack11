const express = require ('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);

/*
* Rota / Recurso
*/


/**
 * Metodos HTTP
 * 
 * GET: Buscar uma informacao do back-end
 * POST: Criar uma informacao no back-end
 * PUT: Alterar uma informacao no back-end
 * DELETE: Deletar uma informacao no back-end
 */


 /**
  * Tipos de parametros
  * 
  * Query params: Parametros nomeados enviados na rota após "?" (Filtros, paginacao)
  * Route params: Parametros utilizados para identificar recursos
  * Request body: Corpo da requisicao, utilizado para criar ou alterar recursos
  * 
  */

  /**
   * Tipos de banco de dados
   * SQL: Mysql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NOSQL: MongoDB, CouchDB, 
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table ('users').select(*).where(0)
    * 
    */



app.listen(3333);