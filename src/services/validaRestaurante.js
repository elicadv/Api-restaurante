export const validaCardapio = (cardapio) => {
    if (cardapio) {
        if (cardapio != "strogonoff" && cardapio != "feijoada" && cardapio != "lasanha") {
            throw new Error("Insira um cardapio válido")
        }else{
            return cardapio
        }
    } else {
        throw new Error("Cárdapio não foi preenchido")
    }

}

export const validaBebida = (bebida) => {
    if (bebida) {
        if (bebida != "suco de laranja" && bebida != "coca-cola" && bebida != "água") {
            throw new Error("Insira uma bebida válida")
        }else{
            return bebida
        }
    } else {
        throw new Error("Bebida não foi preenchida")
    }

}

export const validaCliente = (cliente) => {
    if (cliente.length == 0) {
        throw new Error("Cliente não foi preenchido")
    } else {
        return cliente
    }

}

export const criaRestaurante = (cardapio, bebida, cliente)=>{
    validaCardapio(cardapio)
    validaBebida(bebida)
    validaCliente(cliente)

    return{
        "cardapio" : cardapio,
        "bebida" : bebida,
        "cliente" : cliente
    }
}