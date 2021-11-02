import React from 'react'
import cartWhite from '../assets/icon-cart-white.svg'
import plus from '../assets/icon-plus.svg'
import minus from '../assets/icon-minus.svg'

const ProductPriceInfo = ({
  product,
  addToCart,
}: {
  product: Product
  addToCart: (item: CartItem) => void
}) => {
  const { price, discount } = product
  return (
    <section className="px-9">
      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <span className="mr-3 text-2xl font-bold">${price * discount}</span>
          <span className="bg-pale-orange text-orange px-2 text-md rounded-md font-bold">
            50%
          </span>
        </div>
        <span className="text-gray-blue font-bold line-through">${price}</span>
      </div>
      <div className="bg-light-gray-blue flex justify-between items-center rounded-md mt-4 h-14">
        <button className="p-4">
          <img src={minus} width="12" />
        </button>

        <span className="font-bold">0</span>

        <button className="p-4">
          <img src={plus} width="12" />
        </button>
      </div>
      <button
        type="button"
        className="bg-orange flex justify-center items-center rounded-md mt-4 text-white w-full"
        onClick={() =>
          addToCart({
            id: product.id,
            name: product.name,
            discounted_price: 100,
            quantity: 3,
            total_price: 300,
          })
        }
      >
        <img src={cartWhite} width="15" alt="Add to cart" />
        <span className="my-3 ml-3 font-bold">Add to cart</span>
      </button>
    </section>
  )
}

export default ProductPriceInfo
