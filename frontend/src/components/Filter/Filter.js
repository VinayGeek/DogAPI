import { useState, useEffect } from "react";
import Card from "../UI/Card";

const Filter = () => {
  const [dog, setDog] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/dogs")
      .then((res) => res.json())
      .then((result) => setDog(result.allData))
      .catch((err) => console.log("wrong"));
  }, []);

  return (
    <>
      <div className="main_div">
        {dog.map((data) => {
          return (
            <Card
              key={Math.random()}
              name={data.name}
              price={data.price}
              description={data.description}
              height={data.height}
              image={data.image}
            />
          );
        })}
      </div>
    </>
  );
};

Card.defaultProps = {
  image: "images/download.jpg",
};
export default Filter;
