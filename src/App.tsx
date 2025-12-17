/**📌 Milestone 1: Mostrare la lista dei prodotti


1. Parti dall’array products fornito: */
type Products = {
  name: string,
  price: number

}

function isProduct(data:unknown): data is Products {
  if(
    data && typeof data === "object" &&
    "name" in data && typeof data.name === "string" &&
    "price" in data && typeof data.price === "number" 

  ){
    return true
  }else{
    return false
  }
  
}


   const products: Products[]  = [
   { name: 'Mela', price: 0.5 },
   { name: 'Pane', price: 1.2 },
   { name: 'Latte', price: 1.0 },
   { name: 'Pasta', price: 0.7 },
   ]
/*
   Crea un componente che mostra la lista dei prodotti.
   Per ogni prodotto, mostra:
   Nome
   Prezzo

Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo.
*/
function App() {
  

  return (
    <>
      
    </>
  )
}

export default App
