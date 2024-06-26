import PropTypes from 'prop-types';
import './ProductCard.css'
import { useState } from 'react';
import emptyHeart from "..//../Images/favorite.svg";
import fullHeart from "..//../Images/full-heart.svg";

/**
 * Renders a product card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product object containing information about the product.
 * @returns {JSX.Element} The rendered product card component.
 */
const ProductCard = ({ product }) => {
    const [isInWishlist, setIsInWishlist] = useState(JSON.parse(localStorage.getItem('inWishlist')) ? JSON.parse(localStorage.getItem('inWishlist')).includes(product.id) : false);

    const toggleHeart = () => {
        setIsInWishlist(prev => !prev);

        const wishlist = JSON.parse(localStorage.getItem('inWishlist')) || [];
        const index = wishlist.indexOf(product.id);

        if (index === -1) {
            wishlist.push(product.id);
        } else {
            wishlist.splice(index, 1);
        }

        localStorage.setItem('inWishlist', JSON.stringify(wishlist));
    }

    return (
        <div id='product'>
            <img id='product-img' src={product.images[0].src} alt={product.title} />
            <h3>{product.title}</h3>
            <span>${product.variants[0].price}</span>
            <img id='heart' src={isInWishlist ? fullHeart : emptyHeart} alt="heart" onClick={toggleHeart} />
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object,
}

export default ProductCard;