import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const [detail, setDetail] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)  // Corrected: Template literal with backticks and ${id}
            .then(res => res.json())
            .then(res => setDetail(res));
    }, [id])

return (
    <ItemDetail detail={detail} />
)
}

export default ItemDetailContainer