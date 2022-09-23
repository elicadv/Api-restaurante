import {validaCardapio,validaBebida,validaCliente,criaRestaurante} from "../../src/services/validaRestaurante.js"

describe("Testando cardapio",() => {
 test("Valida Cardapio-falha", () =>{
    try {
         validaCardapio("arroz")
        } catch (error) {
        expect(error.message).toBe("Insira um cardapio válido")
        }
    })

test("Valida Cardapio-sucesso", () =>{
    expect(validaCardapio("feijoada")).toBe("feijoada")
    
   })

})
describe("Testando bebida",() => {
    test("Valida bebida-falha", () =>{
       try {
            validaBebida("limonada")
           } catch (error) {
           expect(error.message).toBe("Insira uma bebida válida")
           }
       })
   
   test("Valida Cardapio-sucesso", () =>{
       expect(validaBebida("suco de laranja")).toBe("suco de laranja")
       
      })
   
   })
describe("Testando cliente",() => {
    test("Valida cliente-falha", () =>{
       try {
            validaCliente((""))
           } catch (error) {
           expect(error.message).toBe("Cliente não foi preenchido")
           }
       })
   
   test("Valida cliente-sucesso", () =>{
       expect(validaCliente("abcdef")).toBe("abcdef")
       
      })
   
   })
   describe("Testando pedido",() => {
    test("Valida pedido-falha", () =>{
       try {
            criaRestaurante({"cardapio":"Panqueca",
                             "bebida": "coca-cola",
                             "cliente" : "Selma"})
           } catch (error) {
           expect(error.message).toBe("Insira um cardapio válido")
           }
       })
   
   test("Valida restaurante sucesso", ()=>{
        expect(()=>criaRestaurante({
                  "cardapio" :"strogonoff",
                  "bebida": "coca-cola",
                  "cliente" :"Selma"
        })).toThrow()
    })
   })