import React, { useState, useEffect } from "react";
import {Link, useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Grid from "@material-ui/core/Grid";
import Common from "./Prueba/Common";
import item from "./item.js";
import ItemList from "./ItemList";
import Swal from "sweetalert2";
import { colors } from "@material-ui/core";
import { getFirestore, addDoc, collection, getDocs, docs, getDoc, doc, where, query } from "firebase/firestore";



const ItemListContainer = () => {

  let [state , setState]= useState ();   
  const [data, setDatis] = useState([]);
  const [newData, setNewData] = useState()
  const [list, setList] = useState([])
  const { categoryId } = useParams()



 const db = getFirestore() 

 // >>>>>>>>>>> INGRESO EL STOCK DESDE ARCHIVO JSON
  
useEffect (() => {
    
    getData();
  }, []);
  
  async function getData () {
    const api = `../data/productos.json`
    const result = await fetch(api);
    const getResult = await result.json();
    setDatis(getResult);
  }
  console.log(data)
  
  
  const handleSubmit = (e)=>{
      const db = getFirestore()
      e.preventDefault()
      const newItem = {data}   
      
      const datis = collection(db, "productosFS")
      addDoc(datis, newItem).then((res)=>{
            
      console.log(res.id)
      setNewData(res.id)
  })
        
 }

// LISTADO DE STOCK DESDE FIRESTORE
    
 useEffect(() => { 
  const db = getFirestore()

if (categoryId) {
  const q  = query(collection(db, "items"),where("categoryId", "==", categoryId));
  getDocs(q).then((res) => { 
  
  setList (res.docs.map((doc)=>({id: doc.id, ...doc.data()})))              
  console.log(res.docs.map((doc)=>({id: doc.id, ...doc.data()})))
})
} else {

  
  const listado = collection(db, "items")
  getDocs(listado).then((res) => {
    setList(res.docs.map((doc) => ({id:doc.id, ...doc.data()})))

  })
    
}}, [categoryId])
  
        
        
        
  const handleClick = () => {
    setState({stock:state.stock-1});
    }
          
return ( 
            
  <div>     

{/* <Button variant="primary" onClick={handleSubmit}> >>>>>>>>>>> INGRESA EL STOCK DESDE JSON
            INGRESO STOCK INICIAL
</Button>   */}
       
<ItemList list={list} />
         
  </div>
   
);  
}

export default ItemListContainer;


