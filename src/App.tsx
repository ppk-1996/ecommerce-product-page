import './App.css'
import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'

import CartModal from './components/CartModal'
import { data } from './utils/data'
import Product from './components/Product'
const App = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 0,
      name: '',
      description: '',
      price: 0,
      discount: 0,
      product_images: [],
      product_thumbnails: [],
    },
  ])
  useEffect(() => {
    const getProducts = () => {
      setProducts(data)
    }
    return getProducts()
  })
  const [cartItems, setCartItems] = useState<CartItem[] | []>([])
  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item])
  }

  return (
    <main className="font-kumbh">
      <Navigation>
        <CartModal cartItems={cartItems} />
      </Navigation>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </main>
  )
}

export default App
