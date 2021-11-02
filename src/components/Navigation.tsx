import logo from '../assets/logo.svg'
import menu from '../assets/icon-menu.svg'
import cart from '../assets/icon-cart.svg'
import avatar from '../assets/image-avatar.png'
import CartModal from './CartModal'
import { ReactNode } from 'react'
const Navigation = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="fixed top-0 z-10 flex items-start justify-between px-2 py-3 w-full bg-white">
      <div className="flex items-end">
        <button type="button" className="mx-4">
          <img src={menu} width="15" />
        </button>
        <div>
          <img src={logo} width="140" />
        </div>
      </div>
      <div className="flex items-end">
        {children}
        <button type="button">
          <img src={avatar} width="30" />
        </button>
      </div>
    </nav>
  )
}

export default Navigation
