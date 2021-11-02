import React, { ReactChildren } from 'react'
import ProductCarousel from '../components/ProductCarousel'
import ProductInfo from '../components/ProductInfo'
import ProductPriceInfo from '../components/ProductPriceInfo'
const Product = ({
  product,
  addToCart,
}: {
  product: Product
  addToCart: (item: CartItem) => void
}) => {
  return (
    <div>
      <ProductCarousel product_images={product.product_images} />
      <ProductInfo name={product.name} description={product.description} />
      <ProductPriceInfo product={product} addToCart={addToCart} />
    </div>
  )
}

export default Product
