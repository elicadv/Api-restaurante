import restauranteModel from "../model/restaurante_model.js" //import da model
import {criaRestaurante} from "../services/validaRestaurante.js"// import da validalação

const hotelRestaurante = (app)=>{
/* - Método GET de leitura 
   -/restaurante é o camimnho da rota)
   - async defini que não terá uma resposta imediata, aguarda um retorno*/
app.get('/restaurante', async (req, res)=>{
//try e cacth são os tratamentos de erros      
try{
    /*a const restaurante é onde vão ficar armazenados todos os dados da solicitação*/
    /*await significa esperar o retorno de uma operação assíncrona*/
    /*restauranteModel.pegaTodosRestaurante: pega todos os cardápios inseridos no sistema conforme a Model*/
    const restaurante = await restauranteModel.pegaTodosRestaurante()
    /*resultado - restaurantes: se for bem sucedida a operação retorna o que foi solicitado*/
    res.json({"restaurantes" : restaurante,
          "erro":false
    }
    )
    /*resultado - erro: se não for bem sucedida a operação retorna um erro*/
}catch(error){
    res.json(
        {"msg":error.message,
        "erro":true}
    )
}
})
//Busca o cardápio pelo nome do cliente, método Get de leitura
app.get('/restaurante/cliente/:cliente', async (req, res)=>{
//req.params: mecanismo de busca especifica
const cliente = req.params.cliente

try{
/*restauranteModel.pegaRestauranteCliente: pega um cardápio especifico pelo nome do 
cliente inseridos no sistema conforme a Model*/
/*Foi necessário chamar a const cliente como parâmetro pra buscar dentro de cleinte especificamente*/
const restaurante = await restauranteModel.pegaRestauranteCliente(cliente)


res.json({"restaurante" : restaurante,
              "erro" : false}
        )
}catch(error) {
    res.json({
        "msg":error.message,
        "erro":true
    })
}
})
// Método POST de criação
app.post('/restaurante',async (req, res)=>{

/*Recebe dados enviados no corpo da solicitação. 
Por padrão, ele é indefinido e preenchido quando você usa um middleware 
chamado body-parsing, como express.urlencoded() ou express.json(). */
const body = req.body
        
try{
/*Primeiro foi inserido criaRestaurante, método da Model para criar o cardápio*/    
/*restauranteModel.inserirRestaurante: Cria um novo cardápio de acordo com os dados 
inseridos no sistema conforme a Model*/
const restaurante = criaRestaurante(body.cardapio, body.bebida, body.cliente)
await restauranteModel.inserirRestaurante(restaurante)
        
res.json(
    {"restaurante":restaurante,
     "erro": false
    }
     )
}catch(error){
    res.json({
        "msg":error.message,
        "erro":true
    })
}
})
// Método Delete de deleção
app.delete('/restaurante/id/:id', async (req,res)=>{
const id = req.params.id

try {
/*restauranteModel.deletaRestaurante: Delete um cardápio segundo o id conforme a Model*/ 
   const restaurante = await restauranteModel.deletaRestaurante(id)

    res.json(
        {"restaurante":restaurante,
        "erro" : false}
    )
    
} catch (error) {
    res.json(
        {"msg" : error.message,
         "erro" : true}
    )
}
})
// Método PUT de atualização
app.put('/restaurante/id/:id',async (req, res)=>{
    const body = req.body
    const id = req.params.id
    try {
    /*restauranteModel.atualizarCardapio: Atualiza um cardápio segundo o id conforme a Model*/
        const restaurante = await restauranteModel.atualizarCardapio(id,body)
        res.json({
    /*restaurante.cardapio: mostra a mensagem com o nome do cardapio atualizado
     "msg" : `Cardapio ${restaurante.cardapio} atualizado com sucesso`,*/
            "msg" : `Cardapio atualizado com sucesso`,
            "erro" : false
        })

    } catch (error) {
        res.json({
            "msg" : error.message,
            "erro" : true
        })
    }
})
}

export default hotelRestaurante