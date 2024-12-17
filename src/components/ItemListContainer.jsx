import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { cartContext } from '../context/cartContext'
import ItemList from './ItemList'
import { getProducts, getFilterProducts } from '../firebase/db'
import { RiseLoader } from 'react-spinners'
import styles from '../style/ItemListContainer.module.css'

function ItemListContainer() {
  const [items, setItems] = useState([])
  const { id } = useParams()

  const value = useContext (cartContext)
  console.log (value)

  useEffect(() => {
      getProducts ()
      .then (products => setItems(products))
      getFilterProducts(id)
      id ? getFilterProducts (id, setItems) : getProducts (setItems)
  }, [id])

  if (items.length === 0) {
    return (
      <div className={styles.loader}>
        <RiseLoader color="#36d7b7" size={15} />
      </div>
    )
  }

  return (
    <ItemList items={items} />
  )
}

export default ItemListContainer