import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Products = () => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="products-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png "
        alt="products"
        className="image-products"
      />
    </div>
  )
}

export default Products
