import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import AlertFailForm from './AlertFailForm'

const Formulario = ({ createOrder }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin:'3ch',
                width: '36ch',
            },
        },
    }))

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        adress: '',
        email: '',
        emailConfirmation: '',
        phone: '',
    })
    const [open, setOpen] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
    }

    const handleOnclick = () => {
        const { firstName, lastName, adress, email, phone } = form
        createOrder({ firstName, lastName, adress, email, phone })
    }

    const classes = useStyles()

    const disabled = !(
        form.email.length &&
        form.firstName.length &&
        form.lastName.length &&
        form.adress.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation
    )

    return (
        <>
            <Box display="flex" justifyContent="center" margin="60px 0">
                <form
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                    fullWidth={true}
                >
                    <h2>COMPLETÁ EL FORMULARIO CON TUS DATOS</h2>
                    <Box>
                        <TextField
                            required
                            label=""
                            Value={form.firstName}
                            placeholder= "NOMBRE"
                            multiline
                            name="firstName"
                            variant="outlined"
                            onChange={handleChange}
                            
                        />
                        <TextField
                            required
                            label=""
                            Value={form.lastName}
                            placeholder="APELLIDO"
                            multiline
                            name="lastName"
                            variant="outlined"
                            onChange={handleChange}
                           
                        />
                    </Box>
                    <Box>
                        <TextField
                            required
                            label=""
                            Value={form.adress}
                            placeholder="CALLE"
                            multiline
                            name="adress"
                            variant="outlined"
                            onChange={handleChange}
                            
                        />
                        <TextField
                            required
                            label=""
                            Value={form.email}
                            placeholder="MAIL"
                            multiline
                            name="email"
                            variant="outlined"
                            onChange={handleChange}
                            
                        />
                    </Box>
                    <Box>
                        <TextField
                            required
                            label=""
                            Value={form.emailConfirmation}
                            placeholder="REPETIR MAIL"
                            multiline
                            name="emailConfirmation"
                            variant="outlined"
                            onChange={handleChange}
                           
                        />
                        <TextField
                            required
                            label=""
                            Value={form.phone}
                            placeholder="TELEFONO"
                            multiline
                            name="phone"
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </Box>
                    <Box display="flex" justifyContent=" flex-end" p={1}>
                        {disabled ? (
                            <AlertFailForm open={open} setOpen={setOpen} />
                        ) : (
                            <Button
                                variant="contained"
                                style={{
                                    backgroundColor: '#f7d04b',
                                    color: '#000',
                                }}
                                onClick={handleOnclick}
                            >
                                FINALIZAR COMPRA
                            </Button>
                        )}
                    </Box>
                </form>
            </Box>
        </>
    )
}

export default Formulario
