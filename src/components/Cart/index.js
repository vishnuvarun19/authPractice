import './index.css'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="products-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        className="image-products"
      />
    </div>
  )
}

export default Cart
