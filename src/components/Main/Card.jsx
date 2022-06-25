const Card = (data) => {

    const {id, title, image, desc} = data;
  return (
    <div className="cards">
        <div className="title">
            <h1>{title}</h1>
        </div>
        <img src={image} alt="img" />

        <div className="card-over">
            <p>
                {desc}
            </p>
        </div>
    </div>
  )
}

export default Card;