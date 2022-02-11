import React, { useState, useEffect } from "react";
import ItemDetail from './itemDetail';
import { Box } from '@material-ui/system';
import {useParams } from 'react-router-dom';
import { getFirestore, doc, collection, getDocs, query } from "firebase/firestore";
import PruebaFirestore from "./Prueba/pruebaFirestore";
import { Card } from "@material-ui/core";



  const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { productId } = useParams()
  

    useEffect(() => {     
      
      const db = getFirestore();

        const data= collection(db, "items")
        getDocs(data).then((res) => {
     
        console.log(res.docs.map((doc) => ({ id: doc.id_insucor, ...doc.data() })));
         setItem(res.docs.map((doc) => ({ id: doc.id_insucor, ...doc.data() })));  
        })
        
      }, [])
      
      console.log({item})


  
  return (

       
     <Box minHeight="87vh">

{item.filter(card => card.id_insucor === productId) 
.map ((card) => (
            

           <ItemDetail item={card} />
        
            ))}
        </Box>   
    
 
);
      }
      
export default ItemDetailContainer;

