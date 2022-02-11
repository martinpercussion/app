import React, { useState, useEffect } from "react";
import {Link, useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Grid from "@material-ui/core/Grid";
import Swal from "sweetalert2";
import { colors } from "@material-ui/core";
import { getFirestore, addDoc, collection, getDocs, docs, getDoc, doc, where, query } from "firebase/firestore";
import ItemList from "../ItemList";


    const PruebaFirestore = () => {

        let [state , setState]= useState ({stock: 50}); 
  

        const [data, setDatis] = useState([]);
      
        const [newData, setNewData] = useState()
      
        const [list, setList] = useState([])
        const { categoryId } = useParams()
      
             
       
        useEffect(() => { 
            const db = getFirestore()

        if (categoryId) {

        
        const q  = query(collection(db, "items"),where("categoryId", "==", categoryId));
        getDocs(q).then((res) => {
            
            
            setList (res.docs.map((doc)=>({id: doc.id, ...doc.data()})))
                        
            console.log(res.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        })
    } else {
        let docRef = query(
              
            
            doc(db, "productosFS" , "9lJzz9NEmZNkmbL1N0yy")

        );

        getDoc(docRef).then((snapshot) => {
            if (snapshot.size === 0) {
              console.log('No existen resultados')
            }
            setList (snapshot.data().datum)
            console.log(list)
          })
          
        }}, [categoryId])
            
        
          
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
              
                          
              
              const handleClick = () => {
                setState({stock:state.stock-1});
              }
              

               return ( 
                
                <div>     
      
      <Button variant="primary" onClick={handleSubmit}>
                  ingresar stock
              </Button>  
             
              <ItemList list={list} />
               
            </div>
      
               
         
      );  
      
               }
    export default PruebaFirestore;