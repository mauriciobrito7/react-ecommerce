import React from "react";
import "./collection-item.styles.scss";

// Components
import CustomButton from "../custom-button/custom-button.component";

// Redux
import { connect } from "react-redux";

// actions
import { addCartItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <div className="price">{price}</div>
      </div>
      <CustomButton onClick={() => addCartItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
