import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes, Link , NavLink, useParams } from 'react-router-dom';
import productos from "../productos.json";



/* console.log(productos) */

function Prueba () {
  
  const [data, setData] = useState([]);
  
  useEffect (() => {
    /* loadData(); */
    getData();
  }, []);

  async function getData () {
    const api = `./data/productos.json`
    const result = await fetch(api);
    const getResult = await result.json();
    setData(getResult);
  }
  
   
 /*  const loadData = async () => {
    const res = await fetch("./data/productos.json")
    return res    
    
  }
  
  loadData()
  .then((response)=>{
   response = response.json()
    setData(response)     
  }) */ 
  
  console.log (data)
  
  /*  const listado = new Promise((resolve, reject)=>{
        
        if (productos.length === 0) {
          reject (new Error ("Nada para mostrar"));
        }
        setTimeout(() => {
          resolve(productos)
        }, 3000);
      })
       */
     
      return (
        <div>

          <p>gdfgdgf</p>

          {data.map (user => (
          <div>{user.nombre}</div>
            ))}
          
         
      </div>
  );
        
        

              }
        
              
            
  



export default Prueba;


 /* const [ video, setVideo ] = useState(null); // 'video', not 'videos' */
/* const { idInsucor } = useParams();

useEffect(() => {
  fetch('./productos.json')
    .then((res) => res.json())
    .then((datas) => datas.filter((data) => {
      return data.id === idInsucor;
    }))
    .then((matched) => setData(matched[0]));
}, []); */