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
        setCurrentProducts(products.slice(3 * (page - 1), 3 * page));
        setNumberOfPages(Math.ceil(products.length / 3))
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
                {currentProducts?.map(product => <ProductCard key={product.id} product={product} />)}
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