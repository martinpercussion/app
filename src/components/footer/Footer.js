import React from 'react'
import { Box } from '@material-ui/core'

const Footer = () => {
    return (
        <Box
            style={{
                background: 'black',
                height: '60px',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <span>Distribuidora Insucor S.R.L - Todos los derechos reservados</span>
        </Box>
    )
}

export default Footer
