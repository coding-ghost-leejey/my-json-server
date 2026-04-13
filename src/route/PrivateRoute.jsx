 
import ProductDetail from '../page/ProductDetail'
 
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({pass}) => {
  return (
    <>
       {  pass === true ? <ProductDetail /> : <Navigate to="/login" /> }
    </>
  )
}

export default PrivateRoute