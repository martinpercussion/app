import React from 'react'
import Alert from '../alert/Alert'

const MessageOrden = ({ orderId }) => {
    return (
        <>
           { <Alert text={`Tu numero de orden es : ${orderId}`} />}

            <div style={{ paddingTop: '400px' }}>
              
            </div>
        </>
    )
}

export default MessageOrden
