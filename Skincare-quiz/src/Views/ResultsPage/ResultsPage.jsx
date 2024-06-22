import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { getRecommendedProducts } from "../../services/request-service";
import ProductCard from "../../Components/ProductCard/ProductCard";

const ResultsPage = () => {
    const { selectedAnswers, setContext } = useContext(AppContext);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        getRecommendedProducts(selectedAnswers).then(setProducts);
    }, [selectedAnswers]);

    return (
        <>
            {products?.map((product, index) => <ProductCard key={index} product={product} />)}
            <NavLink to={'/quiz/1'} onClick={() => setContext({ selectedAnswers: null })}>Retake The Quiz</NavLink>
        </>
    )
}

export default ResultsPage;