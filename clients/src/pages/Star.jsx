
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
/*
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};
*/
const Button = styled.button`
width: 100%;

  border: none;
  padding: 10px 20px;
  display: flex;
  background-color: chocolate;
  justify-content: space-between;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color:green;
    cursor: not-allowed;
  }
`;

function Star() {

     
  const stars = Array(5).fill(0)

  


  return (
    <div style={styles.container}>
      <h2> Product Ratings </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
            
             
            />
          )
        })}
      </div>
     
   </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
 
  stars: {
    display: "flex",
    flexDirection: "row",
    color: "yellow",
  },
};




export default Star;