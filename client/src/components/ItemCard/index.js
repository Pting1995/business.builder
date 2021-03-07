import React from "react";
import ItemModal from "../itemModal";

function ItemCard(props) {

    return (
        <>
            <div className="card" style={{ width: 300 }}>
                <img src="https://via.placeholder.com/200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.itemName}</h5>
                    <p className="card-text">{props.itemPrice}</p>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#a" + props.id}>View</button>
                </div>
            </div>
            <ItemModal
                id={props.id}
                itemName={props.itemName}
                itemPrice={props.itemPrice}
                itemDesc={props.itemDesc}
                itemCategory={props.itemCategory}
                itemImg={props.itemImg}
            />
        </>
    )
}

export default ItemCard;