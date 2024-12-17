import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'
import { BsCart4 } from 'react-icons/bs'


function CartWidget() {
    const { getQuantity } = useContext(cartContext)
    return (
        <Button variant='light'
            as={Link}
            to='/cart'
        >
            <BsCart4 />
            {getQuantity()} </Button>
    );

}

export default CartWidget;