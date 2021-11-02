import productImage1 from '../assets/image-product-1.jpg'
import productImage1thumb from '../assets/image-product-1-thumbnail.jpg'
import productImage2 from '../assets/image-product-2.jpg'
import productImage2thumb from '../assets/image-product-2-thumbnail.jpg'
import productImage3 from '../assets/image-product-3.jpg'
import productImage3thumb from '../assets/image-product-3-thumbnail.jpg'
export const data: Product[] = [
  {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sold, they'll withstand everything the weather can offer",
    price: 250,
    discount: 0.5,
    product_images: [productImage1, productImage2, productImage3],
    product_thumbnails: [
      productImage1thumb,
      productImage2thumb,
      productImage3thumb,
    ],
  },
  {
    id: 2,
    name: 'Winter Limited Edition Sneakers',
    description:
      "These high-profile sneakers are your perfect party wear companion. Featuring a durable rubber outer sold, they'll withstand everything the weather can offer",
    price: 350,
    discount: 0.25,
    product_images: [],
    product_thumbnails: [],
  },
]
