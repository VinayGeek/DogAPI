import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="wrapper">
        <div className="card">
          <img className="main_image" src={props.image} alt="image" />
          <div className="descriptions">
            <h1>{props.name}</h1>
            <p>
              <i>{props.description}</i>
            </p>
            <p className="amount">
              <b>Amount</b> : ₹ {props.price}
            </p>
            <p className="length">
              <b>Height</b> : {props.height} cm
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
