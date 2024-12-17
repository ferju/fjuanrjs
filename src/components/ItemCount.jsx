import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { cartContext} from '../context/cartContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

function ItemCount( { detail }) {
    const [count, setCount] = useState (0)
    const { addToCart } = useContext(cartContext)
    
    const handleAdd = () => setCount(count+1)

    const handleSub = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (count > 0) {
            addToCart({ ...detail, qty: count });
        } else {
            MySwal.fire({
                title: 'Oops!',
                text: 'Cannot add 0 items to the cart.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div className='d-flex flex-column' style={{ width: 300 }}>
            <p className='text-center border'>{count}</p>
            <div>
                <Button variant='danger'
                className='w-50'
                onClick={handleSub}
                >
                    -
                </Button>
                <Button variant='success'
                className='w-50'
                onClick={handleAdd}
                >
                    +
                </Button>
            </div>
            <Button onClick={handleAddToCart}> Add to Cart </Button>
        </div>
    );
}

export default ItemCount;