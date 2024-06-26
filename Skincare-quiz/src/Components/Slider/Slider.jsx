import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import ProductCard from "../ProductCard/ProductCard";
import './Slider.css';
import next from "..//../Images/next.svg";


const Slider = ({ products }) => {
    const [currentProducts, setCurrentProducts] = useState(null);
    const [page, setPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);

    useEffect(() => {
        if (page === 1) {
            setCurrentProducts(products.slice(0, 2))
        } else {
            setCurrentProducts(products.slice((3 * (page - 1)) - 1, (3 * page) - 1));
        }

        setNumberOfPages(Math.ceil((products.length + 1) / 3))
    }, [page, products])

    const changePage = (direction) => {
        if (direction === 'previous') {
            setPage(prev => prev - 1);
        } else if (direction === 'next') {
            setPage(prev => prev + 1);
        }
    }

    return (
        <>
            <div id="slider">
                <img id="previous-arrow" className={page === 1 ? 'hidden' : ''} src={next} alt="previous" onClick={() => changePage('previous')} />
                <div id="slider-products-container">
                {page === 1 && <div id="daily-routine">
                    <h3>Daily routine</h3>
                    <p>Perfect for if you&apos;re looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
                </div>}
                {currentProducts?.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
                <img id="next-arrow" className={page === numberOfPages ? 'hidden' : ''} src={next} alt="next" onClick={() => changePage('next')} />
            </div>
            <div className="pagination">
                {Array.from({ length: numberOfPages }, (_, index) => (
                    <span
                        key={index}
                        className={`dot ${index + 1 === page ? 'active' : ''}`}
                    >
                        &#9679;
                    </span>
                ))}
            </div>
        </>
    )
}

Slider.propTypes = {
    products: PropTypes.array,
}

export default Slider;