import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@material-ui/system';
import Item from './item';

const ItemList = ({ list }) => {

  
  return (
      <Box
          display="flex"
          justifyContent="space-around"
          flexWrap="wrap"
          marginBottom="100px"
      >
          {list.map((product) => (

              <Item key={product.id_insucor} item={product} />

          ))}
      </Box>
  )
}

export default ItemList

