import Button from 'react-bootstrap/Button';
import { useState } from 'react'

function ItemCount() {
    const [count, setCount] = useState (0)
    const handleAdd = () => setCount(count+1)
    const handleSub = () => setCount(count-1)
    return (
        <div className='d-flex flex-column' style={{ width: 300 }}>
            <p className='text-center border'>{count}</p>
            <div className="d-flex justify-content-between">
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
            <Button> Add to Cart </Button>
        </div>
    );
}

export default ItemCount;