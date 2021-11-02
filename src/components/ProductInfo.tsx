import React from 'react'

const ProductInfo = ({
  name,
  description,
}: {
  name: Product['name']
  description: Product['description']
}) => {
  return (
    <section className="px-9">
      <h1 className="text-orange font-bold text-sm mt-4">SNEAKER COMPANY</h1>
      <h2 className="font-bold text-3xl mt-4">{name}</h2>
      <p className="text-dark-gray-blue font-normal mt-4">{description}</p>
    </section>
  )
}

export default ProductInfo
