import React from "react";
// Components
import CollectionItem from "../../components/collection-item/collection-item.component";

// Redux
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

// Styles
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2>{title}</h2>
      <h1 className="title">Hola Mundo</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={items.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
