import dao from '../DAO/restauranteDAO.js'

//Onde é realizada toda a parte da lógica da API

const restauranteModel = {

    // metodo para insercao um cardapio no banco de dados.
    inserirRestaurante : async (cardapio)=>{
    return await dao.inserirRestaurante(cardapio)
    },
    
    // metodo para consultar todos os cardapio do banco de dados.
    pegaTodosRestaurante : async ()=>{
    return await dao.pegaTodosRestaurante()
    },
    
    // metodo para consultar um cardapio no banco de dados pelo nome do cliente.
    pegaRestauranteCliente : async (cliente)=>{
        const restauranteAtual = await dao.pegaRestauranteCliente(cliente)
        console.log(restauranteAtual)
        if(restauranteAtual){
            const restauranteCliente = {
                "cliente" : restauranteAtual.cliente
            }
            return await dao.pegaRestauranteCliente(cliente,restauranteCliente)
        } else{
            throw new Error("Cliente não encontrado")
        }
        
    },

     // metodo para consultar um cardapio no banco de dados pelo id.
    pegaId:async (id)=>{
    return await dao.pegaId(id)
    },
    
    // metodo para deletar um cardapio no banco de dados pelo id.
    deletaRestaurante: async (id)=>{
        const restauranteAtual = await restauranteModel.pegaId(id)
        console.log(restauranteAtual)
        if(restauranteAtual){
            const restauranteDeletado = {
                "id" : restauranteAtual.id
            }
            return await dao.deletaRestaurante(id, restauranteDeletado)
        } else{
            throw new Error("ID não encontrado")
        }

    },
    
    // metodo para atualizar um cardapio no banco de dado.
    atualizarCardapio : async (id, novosDados)=>{
        const restauranteAtual = await restauranteModel.pegaId(id)
        console.log(restauranteAtual)
        if(restauranteAtual){
            const restauranteAtualizado = {
                "cardapio" : novosDados.cardapio || restauranteAtual.cardapio,
                "bebida" : novosDados.bebida || restauranteAtual.bebida,
                "cliente" : novosDados.cliente || restauranteAtual.cliente
            }
            return await dao.atualizarCardapio(id, restauranteAtualizado)
        } else{
            throw new Error("Cardapio não encontrado")
        }

    },
}

export default restauranteModel