import db from "../database/db-sqlite.js"

//Responsavél por acessar dos dados do banco.

const dao = {
/*chama um método*/
    pegaTodosRestaurante: () => {
        /*cria a const e recebe o valor selcionando a tabela no banco*/
        const PEGA_RESTAURANTE = `SELECT * FROM RESTAURANTE`
        return new Promise((resolve, reject) => {
        /*db.all porque vai retornar um array(lista)*/
            db.all(PEGA_RESTAURANTE, (error, row) => {
                if (error)
                    reject(error)/*se não retornar conforme a solicitação (erro)*/
                else
                    resolve(row)/*se retornar conforme a solicitação (ok)*/
            })
        })
    },

    inserirRestaurante: (restaurante) => {
        const INSERE_RESTAURANTE = `INSERT INTO RESTAURANTE (cardapio, bebida, cliente)VALUES (?,?,?)`
        return new Promise((resolve, reject) => {
            db.run(INSERE_RESTAURANTE,
                restaurante.cardapio, restaurante.bebida, restaurante.cliente,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve({msg:"Cardapio inserido com sucesso"})
                }
            )
        })
    },

    pegaRestauranteCliente: (cliente) => {
        const PEGA_RESTAURANTE = `
        SELECT * FROM RESTAURANTE
        WHERE cliente = ?
        `
        return new Promise((resolve, reject) => {
            db.get(PEGA_RESTAURANTE, cliente, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaId: (id) => {
        const PEGA_RESTAURANTE = `
        SELECT * FROM RESTAURANTE
        WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            db.get(PEGA_RESTAURANTE, id, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    deletaRestaurante: (id) => {
        const DELETA_RESTAURANTE = `
        DELETE FROM RESTAURANTE
        WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            db.run(DELETA_RESTAURANTE, id, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve({msg:`pedido de id:${id} deletado com sucesso`
                })
            })
        })
    },

    atualizarCardapio: (id, novoRestaurante) => {
        const ATUALIZA_RESTAURANTE = `
        UPDATE RESTAURANTE
        SET cardapio = ?, bebida = ?, cliente = ?
        WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            db.run(ATUALIZA_RESTAURANTE,
                novoRestaurante.cardapio, novoRestaurante.bebida, novoRestaurante.cliente,
                id,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve(novoRestaurante)
                }
            )
        })
    }
}

export default dao