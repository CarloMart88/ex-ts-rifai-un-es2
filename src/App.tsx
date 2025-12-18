import { useState } from "react"

type Products = {
  id?: number,
  name: string,
  price: number,


}



type CartProduct = Products & {
  quantity: number
}



function isProduct(data:unknown): data is Products {
  if(
    data && typeof data === "object" &&
    "name" in data && typeof data.name === "string" &&
    "price" in data && typeof data.price === "number" &&
    "quantity" in data && typeof data.quantity === "number"

  ){
    return true
  }else{
    return false
  }
  
}
/**
📌 Milestone 3: Modificare il carrello
Al click successivo del bottone "Aggiungi al carrello", se il prodotto è già presente:

Usa una funzione updateProductQuantity per incrementare la proprietà quantity del prodotto esistente.

Per ogni prodotto nel carrello, aggiungi un bottone "Rimuovi dal carrello":

Al click, usa una funzione removeFromCart per rimuovere il prodotto dal carrello.

Sotto alla lista del carrello, mostra il totale da pagare:

Calcola il totale moltiplicando il prezzo per la quantità di ogni prodotto e somma tutti i risultati.

Obiettivo: Gestire l’aggiunta, la rimozione e il calcolo del totale del carrello in modo dinamico.
 */

function App() {

  const [addedProducts , setAddedProducts] = useState<CartProduct[]>([])

   const products: Products[]  = [
   { name: 'Mela', price: 0.5 },
   { name: 'Pane', price: 1.2 },
   { name: 'Latte', price: 1.0 },
   { name: 'Pasta', price: 0.7 },
   ]

  function addToCart(newValue:Products):void {
    const product = addedProducts.some(a => a.name === newValue.name)
    if(product){
       updateProductQuantity(newValue)
    }else{
         setAddedProducts(prev => [...prev , {...newValue , quantity:1}])
    }
    
  }

  const total = addedProducts.reduce((acc , val)=>{
    return  acc + val.quantity * val.price
    
  },0).toFixed(2)

  

  //Usa una funzione updateProductQuantity per incrementare la proprietà quantity del prodotto esistente.

  function updateProductQuantity(newValue:Products):void {
    const product = addedProducts.some(a => a.name === newValue.name)
    if(product){
        setAddedProducts(prev => prev.map(p => p.name === newValue.name ? {...p , quantity: p.quantity + 1}: p)) 
  }
 }

 function removeFromCart(newValue:Products):void {
  setAddedProducts(addedProducts.filter(a => a.name !== newValue.name))
  
 }


  console.log(addedProducts)

  return (
    <div className="container my-4">
  <div className="row justify-content-center">
    <div className="col-12 col-md-8">
      <ul className="list-group">

        {products.map((p , index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{p.name}</strong>
              <div className="text-muted small">Price: {p.price}£</div>
            </div>

            <span className="">
              £{p.price}
            </span>
            <button className="btn btn-success" onClick={()=> addToCart(p)}>Aggiungi al carrello</button>
          </li>
        ))}

      </ul>
    </div>
  </div>
  <div className="row justify-content-center">
     <div className="col-12 col-md-8 my-5">
      <h3>Il tuo carrello</h3>
      {addedProducts.length > 0 && addedProducts ?  (addedProducts.map((a ) => {
        return (
          <div className="col-5 my-5">
            <p>Prodotto: {a.name}</p>
            <p>Prezzo: {a.price}£</p>
            <p>Quantità: {a.quantity}</p>
            <button className="btn btn-success" onClick={()=> removeFromCart(a)}>Rimuovi dal carrello</button>
          </div>
        )
      }) ) : (<h3>il tuo carrello è vuoto</h3>)}

     </div>
     <p>il tuo totale è {total}</p>
  </div>
</div>

  )
}

export default App
