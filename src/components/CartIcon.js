import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import CartContext from './context/CartContext'
import LocalMallIcon from '@mui/icons-material/LocalMall';

const CartIcon = () => {
    const { cantTotal } = React.useContext(CartContext)

    return (
        <div>
            <IconButton>
                <Badge
                    badgeContent={cantTotal()}
                    style={{ color: '#f7d04b' }}
                    showZero
                    >
                     <LocalMallIcon style={{ color: '#f7d04b' }}/>
                </Badge>
            </IconButton>
        </div>
    )
}

export default CartIcon
