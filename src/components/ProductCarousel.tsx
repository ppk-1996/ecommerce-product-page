import { useState } from 'react'
import next from '../assets/icon-next.svg'
import previous from '../assets/icon-previous.svg'
const ProductCarousel = ({
  product_images,
}: {
  product_images: Product['product_images'] | []
}) => {
  const [currentImage, setCurrentImage] = useState(0)
  const nextImage = (current: number) => {
    current < product_images.length - 1 && setCurrentImage(current + 1)
  }
  const previousImage = (current: number) => {
    current > 0 && setCurrentImage(current - 1)
  }
  return (
    <section className="mt-14">
      <div className="carousel relative">
        {product_images.length > 0 ? (
          product_images.map((productImage) => (
            <div
              key={productImage}
              className="slides"
              style={{
                backgroundImage: `url(${productImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: `${
                  product_images[currentImage] == productImage ? '100%' : '0'
                }`,
              }}
            ></div>
          ))
        ) : (
          <div className="slides w-full bg-pale-orange"></div>
        )}
        {currentImage !== 0 && (
          <button
            onClick={() => previousImage(currentImage)}
            type="button"
            className="bg-white bg-opacity-10 hover:bg-opacity-50 w-10 h-10 grid place-content-center rounded-full absolute top-1/2 left-5"
          >
            <img src={previous} width="10" />
          </button>
        )}
        {product_images.length > 0 &&
          currentImage !== product_images.length - 1 && (
            <button
              onClick={() => nextImage(currentImage)}
              type="button"
              className="bg-white bg-opacity-10 hover:bg-opacity-50 w-10 h-10 grid place-content-center rounded-full absolute top-1/2 right-5"
            >
              <img src={next} width="10" />
            </button>
          )}
      </div>
    </section>
  )
}

export default ProductCarousel
