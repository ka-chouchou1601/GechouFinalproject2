import {useLocation } from "react-router"
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
width: 10%;
border-radius:50%;
  border: none;
  padding: 10px 18px;
  display: flex;
  background-color: teal;
  justify-content: space-between;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color:green;
    cursor: not-allowed;
  }
`;
const Success =( ) => {
  const location = useLocation()

console.log(location);
    return (
      <div>
        Thank you for shopping with us
        <Link to="/">
          <Button>shop again</Button>
        </Link>
      </div>
    )
  
}

export default Success;