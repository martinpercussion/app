import productos from "../productos.json";
import React from 'react'
/* import React, {useState, useEffect} from 'react'; */
import 'bootstrap/dist/css/bootstrap.min.css';

class ItemClass extends React.Component{

    constructor()
    {
      super();
      this.state={
        name: (JSON.stringify([{productos}]))
      }
      console.log("constructor")
    }
    render()
    {
      console.log("render")
      return (
       <div>
        <p>PRODUCTO{this.state.name}</p>
      </div>)
    }
  }
  export default ItemClass;

