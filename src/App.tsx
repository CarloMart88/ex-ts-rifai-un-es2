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

/**📌 Milestone 2: Aggiungere prodotti al carrello
 * 
Aggiungi uno stato locale addedProducts (inizialmente un array vuoto) per rappresentare i prodotti nel carrello.
Per ogni prodotto della lista, aggiungi un bottone "Aggiungi al carrello":
Al click del bottone, usa una funzione addToCart per:
Aggiungere il prodotto al carrello se non è già presente, con una proprietà quantity = 1.
Se il prodotto è già nel carrello, ignora l’azione.
Sotto alla lista dei prodotti, mostra una lista dei prodotti nel carrello se addedProducts contiene almeno un elemento.
Per ogni prodotto nel carrello, mostra:
Nome
Prezzo
Quantità

Obiettivo: L’utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti.
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
        setAddedProducts(prev => prev.map(p => p.name === newValue.name ? {...p , quantity: p.quantity + 1}: p)) 
    }else{
         setAddedProducts(prev => [...prev , {...newValue , quantity:1}])
    }
    
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
      {addedProducts.length > 0 && addedProducts ?  (addedProducts.map(a => {
        return (
          <div className="col-5 my-5">
            <p>Prodotto: {a.name}</p>
            <p>Prezzo: {a.price}£</p>
            <p>Quantità: {a.quantity}</p>
          </div>
        )
      }) ) : (<h3>il tuo carrello è vuoto</h3>)}
     </div>
  </div>
</div>

  )
}

export default App
