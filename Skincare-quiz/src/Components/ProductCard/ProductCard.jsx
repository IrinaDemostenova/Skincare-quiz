import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
    return (
        <h1>{product.title}</h1>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object,
}

export default ProductCard;