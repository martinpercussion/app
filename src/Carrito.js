/* import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import productos from "./components/productos.json";

export default function Basket (props) {

    const [cartItems, setCartItems] = useState([]) 

    const data = {productos}; 

    const  agregarAlCarrito = (data) => {
        setCartItems( [...cartItems, data ]); 

    };

    const [page, setPage] = useState ()
    const navigateTo = (Nextpage) => {
        setPage(Nextpage);



    }



        const page_cart = 'cart' ;



    const renderCarrito = () => (

        <div>

           { productos.map ( (prod, index)  =>  (

               
             <h2>{prod.nombre}</h2>
             
            ) 

           )
           
        }
    
        </div>

           )

    return (
    
    <aside className='"block col-1'>

        <h2> {page === page_cart && renderCarrito()}  </h2>
        <button onClick={() => navigateTo(page_cart)}></button>
        


    </aside>

    )
    
    } */