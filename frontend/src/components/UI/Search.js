import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Card from "./Card";

const Search = () => {
  const [ParamData, setParamData] = useState([]);
  const { name } = useParams();
  // console.log(name);
  useEffect(() => {
    Axios.get(`http://localhost:8080/dogs/${name}`).then((res) =>
      setParamData(res.data)
    );
  }, []);

  return (
    <>
      {ParamData.map((value) => (
        <Card
          key={value._id}
          name={value.name}
          image={value.image}
          description={value.description}
          height={value.height}
          price={value.price}
        />
      ))}
    </>
  );
};

export default Search;
