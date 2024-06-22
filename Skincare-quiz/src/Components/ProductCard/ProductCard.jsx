import PropTypes from 'prop-types';
import './ProductCard.css'
import favorite from "..//../Images/favorite.svg";
// import favorite from "..//../Images/full-heart.svg";

const ProductCard = ({ product }) => {

    return (
        <div id='product'>
            <img id='product-img' src={product.images[0].src} alt={product.title} />
            <h3>{product.title}</h3>
            <span>${product.variants[0].price}</span>
            <img id='favorite' src={favorite} alt="favorite" />
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object,
}

export default ProductCard;