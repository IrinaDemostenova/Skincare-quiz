import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { getRecommendedProducts } from "../../services/request-service";
import Slider from "../../Components/Slider/Slider";
import background from "..//../Images/results-page-pic.png";
import './ResultsPage.css'
import Loading from "../../Components/Loading/Loading";

const ResultsPage = () => {
    const { selectedAnswers, setContext } = useContext(AppContext);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        getRecommendedProducts(selectedAnswers).then(result => {
            const wishlist = JSON.parse(localStorage.getItem('inWishlist')) || [];
            const inWishlist = [];
            const notInWishlist = [];

            result.forEach(product => {
                if (wishlist.includes(product.id)) {
                    inWishlist.push(product);
                } else {
                    notInWishlist.push(product);
                }
            })

            setProducts([...inWishlist, ...notInWishlist]);
        });
    }, [selectedAnswers]);

    return (
        <>
            {products ?
                <>
                    <div id="header">
                        <img src={background} alt="background" />
                        <div id="header-text">
                            <h1>Build your everyday self care routine.</h1>
                            <p>Perfect for if you&apos;re looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
                            <NavLink to={'/quiz/1'} onClick={() => setContext({ selectedAnswers: null })}>Retake the quiz</NavLink>
                        </div>
                    </div>
                    <Slider products={products} />
                </> : <Loading />}
        </>
    )
}

export default ResultsPage;