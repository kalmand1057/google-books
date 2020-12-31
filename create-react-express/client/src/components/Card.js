import React from "react";

const styles = {
    card: {
        margin: 15
    },
    img: {
        height: 100,
        borderRadius: 50
    }
}

function Card(props) {
  return (
    <div className="container">
        <div className="card" style={styles.card}>
            <div className="card-body">
                <div class="row">
                    <div class="col">
                        <img alt={props.title} src={props.image} style={styles.img}/>
                    </div>
                    <div class="col">
                        {props.authors}
                    </div>
                    <div class="col">
                        {props.description}
                    </div>
                    <div class="col">
                        {props.link}
                    </div>
                </div>
            </div>
        </div>
        <span onClick={() => props.removeBook(props.id)} className="remove">
        {/* 𝘅 */}
      </span>
    </div>
  );
}

export default Card;