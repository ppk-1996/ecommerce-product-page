/// <reference types="vite/client" />
type Product = {
  id: number
  name: string
  description: string
  price: number
  discount: number
  product_images: string[]
  product_thumbnails: string[]
}
type CartItem = {
  id: number
  name: string
  discounted_price: number
  quantity: number
  total_price: number
}
