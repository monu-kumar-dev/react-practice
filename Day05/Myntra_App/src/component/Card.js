function Card(props) {
  return (
    <div className="card" style={{ border: "2px solid black", padding: "2px" }}>
      <img
        src={props.img_link}
        alt={props.cloth}
        height="200px"
        width="250px"
      />
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <p>{props.offer}</p>
        <p>₹{props.rate}</p>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default Card;
