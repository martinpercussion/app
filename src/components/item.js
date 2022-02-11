import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Box, Button } from '@material-ui/core'


const Item = ({ item: { id_insucor, nombre, descripcion, precio, Stock, img } }) => (  
  
 
  <Box flexDirection="colum" marginTop="60px">
     <div style={{ display: 'flex' , maxWidth: '60%' }}>
      <h4>{nombre}</h4> 
      </div>    
      <div style={{ paddingBottom: '20px' }}>
           Stock:  {Stock}</div>
           <div style={{ paddingBottom: '20px' }}>
          <div>Precio: ${precio}</div>
         
            

      </div>
      <div>
            <Link to={`/item/${id_insucor}`}>
                <img src={img} alt="img" width="60%" />
            </Link>
        </div>
      <Link
          to={`/item/${id_insucor}`}
          style={{ textDecoration: 'none', color: 'black' }}
          >

            
          <Button variant="contained" style={{ backgroundColor: '#f7d04b' }}>
              Detalles
          </Button>
      </Link>
  </Box>
)

export default Item

