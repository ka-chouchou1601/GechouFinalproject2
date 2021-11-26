import {useLocation } from "react-router"

const Success =( ) => {
  const location = useLocation()

console.log(location);
    return (
      <div>
        Thank you for shopping with us
      </div>
    )
  
}

export default Success;