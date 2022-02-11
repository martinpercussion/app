import React from 'react'
import CartContext from '../context/CartContext'
import { Table, TableBody, TableCell } from '@material-ui/core'
import { TableContainer, TableHead, TableRow } from '@material-ui/core'
import { Paper, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Buttons from '../buttons/Buttons'
import { Card} from 'react-bootstrap';

const useStyles = makeStyles({
    root: {
        width: '80%',
        margin: 'auto',
        marginTop: '20px',
        minHeight: '77vh',
    },
})

const TableCart = ({ setShowForm }) => {
    const { cartItem, deleteProduct, costoTotal } =
        React.useContext(CartContext)

    const deleteItem = (id) => {
        deleteProduct(id)
    }
    const classes = useStyles()
    return (
        <>
            <Paper className={classes.root}>
                <TableContainer>
                    <Table
                        className={classes.table}
                        stickyHeader
                        aria-label="sticky table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ minWidth: 170 }}>
                                    Producto
                                </TableCell>
                                <TableCell style={{ minWidth: 170 }}>
                                    Nombre
                                </TableCell>
                                <TableCell
                                    align="right"
                                    style={{ minWidth: 100 }}
                                >
                                    Cantidad
                                </TableCell>
                                <TableCell
                                    align="right"
                                    style={{ minWidth: 170 }}
                                >
                                    Precio
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartItem.map((item) => {
                                return (
                                    <TableRow key={item.id}>
                                        <TableCell component="th" scope="row">
                                            <img                                           
                                                src={item.img}
                                                alt="img"
                                                variant="top"
                                                style={{ width: '82px' }}
                                            />
                                        </TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell align="right">
                                            {item.count}
                                        </TableCell>
                                        <TableCell align="right">
                                            {(item.price)}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                    <Box display="flex" justifyContent="flex-end" p={1}>
                        TOTAL : {costoTotal()}
                    </Box>
                </TableContainer>

                <Buttons setShowForm={setShowForm} />
            </Paper>
        </>
    )
}

export default TableCart
