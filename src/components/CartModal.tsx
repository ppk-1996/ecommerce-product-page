import React from 'react'
import Modal from 'react-modal'
import cart from '../assets/icon-cart.svg'
import deleteIcon from '../assets/icon-delete.svg'
import previous from '../assets/icon-previous.svg'
import product1 from '../assets/image-product-1.jpg'
import product1thumb from '../assets/image-product-1-thumbnail.jpg'
import product2 from '../assets/image-product-2.jpg'
import product2thumb from '../assets/image-product-2-thumbnail.jpg'
import product3 from '../assets/image-product-3.jpg'
import product3thumb from '../assets/image-product-3-thumbnail.jpg'
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  content: {
    top: '80px',
    width: '96%',
    height: 'auto',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, 0)',
    margin: 0,
    padding: 0,
    border: 'none',
    boxShadow: '1px 1px 10px gray',
    borderRadius: '10px',
  },
}

Modal.setAppElement('#root')

export default function CartModal({
  cartItems,
}: {
  cartItems: CartItem[] | []
}) {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <button
        onClick={modalIsOpen ? closeModal : openModal}
        type="button"
        className="mr-4 relative"
      >
        <img src={cart} width="25" />
        {cartItems.length > 0 && (
          <span
            className="absolute -top-1 left-3 bg-orange rounded-full px-2  grid place-content-center font-bold text-white"
            style={{ fontSize: '10px' }}
          >
            {cartItems.length}
          </span>
        )}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="font-kumbh">
          <h1 className="font-bold border-b border-dark-gray-blue p-5 w-full">
            Cart
          </h1>
          <ul className="p-5 grid grid-cols-8 place-items-stretch">
            <li className="h-16 col-span-2">
              <img
                src={product1thumb}
                className="rounded-lg"
                style={{ height: '100%' }}
              />
            </li>
            <li className="h-16 col-span-5 text-dark-gray-blue pr-4 ">
              <p
                className="whitespace-nowrap overflow-hidden w-full"
                style={{ textOverflow: 'ellipsis' }}
              >
                Autumn Limited Edition Sneakers
              </p>
              <p>
                $125.00 x 3{' '}
                <span className="font-bold text-black">$375.00</span>
              </p>
            </li>
            <li className="h-16 col-span-1 flex justify-center items-center pb-4">
              <button>
                <img src={deleteIcon} alt="delete from cart" />
              </button>
            </li>
          </ul>
          <div className="p-5 pt-0">
            <button className="bg-orange w-full h-14 rounded-lg text-white font-bold">
              Checkout
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
