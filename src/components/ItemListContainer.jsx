import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

function ItemListContainer() {
  const [items, setItems] = useState([])
  const { id } = useParams()
  const allProducts = 'http://dummyjson.com/products'
  const categoryProducts = `https://dummyjson.com/products/category/${id}`


  const getProducts = async () => {
    const res = await fetch('http://dummyjson.com/products')
    const parsed = await res.json()
    setItems(parsed.products)
  }

  useEffect(() => {
    fetch(id ? categoryProducts : allProducts)
      .then(res => res.json())
      .then(res => setItems (res.products));
  }, [id, categoryProducts])

  return (
    <ItemList items={items} />
  )
}

export default ItemListContainer