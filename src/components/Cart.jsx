import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { useCart } from '../context/useCart'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../firebase/db'
import CheckoutForm from './CheckoutForm'

function Cart() {
    const { cart, getTotal, removeFromCart } = useCart()

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = e.target[0].value
        const nombre = e.target[1].value
        const telefono = e.target[2].value

        const order = {
            buyer: {nombre, email, telefono},
            total : getTotal(),
            item: cart,
            date: serverTimestamp()
        }

        createOrder(order)

        cart.forEach(prod => removeFromCart(prod.id))
    }

    const handleRemove = (prodId) => {
        removeFromCart(prodId)
    }

    const handleClearCart = () => {
        cart.forEach(prod => removeFromCart(prod.id))
    }

    return (
        <div className='d-flex'>
            <ListGroup className='w-50'>
                {cart.map(prod => (
                    <ListGroup.Item key={prod.id}>{prod.title} x {prod.qty}
                    <Button 
                            variant="danger" 
                            size="sm" 
                            className="float-end" 
                            onClick={() => handleRemove(prod.id)}
                        >
                            Eliminar
                        </Button></ListGroup.Item>
                ))}
                <Button variant="danger" className="mt-3" onClick={handleClearCart}>
                Eliminar todo
            </Button>
            </ListGroup>
            
            <CheckoutForm handleSubmit={handleSubmit} />

        </div>
    )
}

export default Cart