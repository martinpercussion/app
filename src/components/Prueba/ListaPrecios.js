/* import productos from "./productos.json";
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';



function ListaPrecios () {
  const [items, setItems] = useState ([])

    const listita = () => {
      setItems ([...productos, {}])
    }

    return  (
      
   <div style={{ display: 'block' }} >
<button onClick={listita}> boton</button>  
     
      { 
      items.map((item, id_producto) => (

        <div   key={id_producto} >
          
        <Card style={{  width: '15rem' , display: 'flex' }}>

        <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />

       

        <Card.Title><h4>{item.nombre}</h4></Card.Title>
           
        <Card.Text> Código: {item.id_insucor}</Card.Text>

        <Card.Text> $ {item.precio}</Card.Text>

      

        </Card>

        </div>  
          
          
        

        ))}
       

       </div>

     
        )
        }
        
    
export default ListaPrecios;     
 */





/* class ListaPrecios extends React.Component {

  render()  
  {  
    const listado =  (JSON.stringify(productos)) ;  {

      listado.forEach( (prod) => {

        ( (React.createElement('div', null, `NOMBRE ${prod.nombre}`) 
        )

           )
      }
      )}
  }  
  }
ReactDOM.render(
  document.getElementById('root')
);
    export default ListaPrecios;      
    
     */


        
        /*   array.forEach( (producto) => {
          const div = document.createElement('div')
          div.classList.add('producto')
          */
         
         
         
         /*  for (const [index, value] of listado.entries()) {
           listita.push(<li key={index}>{value}</li>) */
  


  
  

 