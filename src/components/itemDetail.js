import React, {useState, useEffect} from 'react';
import {Link, useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box'
import ItemCount from './ItemCount';
import CartContext from './context/CartContext';
import { Button } from '@material-ui/core';
import { Card} from 'react-bootstrap';

const ItemDetail = ({ item }) => {
    
   
    
    const { productsAdd } = React.useContext(CartContext)
    const [count, setCount] = useState(1)
    const [selectCount, setSelectCount] = useState(false)
    
   
    const handleClickComprar = () => {
        if (count > 0) {
            setSelectCount(true)
            productsAdd({
                id: item.id_insucor,
                name: item.nombre,
                img: item.img, 
                count,
                price: item.precio,
                stock: item.Stock,
            })
        }
    }
    
    
    return (      
      <Box
            display="flex"
            justifyContent="center"
            margin="auto"
            flexWrap="wrap"
        >
            <Box flexDirection="colum" marginTop="60px">
                <h2>{item.nombre}</h2>
                <Card.Img variant="top" src={item.img} />
            </Box>
            <Box paddingTop={10} margin={5}>
                <div style={{ fontWeight: 'bold' }}>{item.descripcion}</div>
                <p>PRECIO: $ {Intl.NumberFormat().format(item.precio)}</p>
                <p>STOCK: {item.Stock}</p>

               {  <ItemCount
                    setCount={setCount}
                    count={count}
                    min={1}
                    stock={item.Stock}
                /> }

                {selectCount ? (
                    <>
                        <div>
                            <Link style={{ textDecoration: 'none' }} to="/cart">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    style={{
                                        marginBottom: '20px',
                                        backgroundColor: '#000',
                                    }}
                                >
                                    FINALIZAR
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ backgroundColor: '#f7d04b' }}
                                >
                                    SEGUIR COMPRANDO
                                </Button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <Button
                        variant="contained"
                        style={{ backgroundColor: '#000', color: '#fff' }}
                        fullWidth
                        onClick={handleClickComprar}
                        disabled={item.Stock === 0}
                    >
                        AGREGAR AL CARRITO
                    </Button>
                )}
            </Box>
        </Box>
    )
          }
          
          export default ItemDetail; 
          
     
    