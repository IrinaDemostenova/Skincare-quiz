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

    const changePage = () => {
        setPage(prev => prev + 1);
    }

    return (
        <>
            <div id="slider">
                {currentProducts?.map(product => <ProductCard key={product.id} product={product} />)}
                <img id="next-arrow" src={next} alt="next" onClick={changePage} />
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