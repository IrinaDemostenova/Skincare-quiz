import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { getRecommendedProducts } from "../../services/request-service";
import Slider from "../../Components/Slider/Slider";
import background from "..//../Images/results-page-pic.png";
import './ResultsPage.css'

const ResultsPage = () => {
    const { selectedAnswers, setContext } = useContext(AppContext);
    const [products, setProducts] = useState(null);

    console.log(selectedAnswers);

    useEffect(() => {
        getRecommendedProducts(selectedAnswers).then(setProducts);
    }, [selectedAnswers]);

    return (
        <>
            <div id="header">
                <img src={background} alt="background" />
                <div id="header-text">
                    <h1>Build you everyday self care routine.</h1>
                    <p>Perfect for if you&apos;re looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
                    <NavLink to={'/quiz/1'} onClick={() => setContext({ selectedAnswers: null })}>Retake the quiz</NavLink>
                </div>
            </div>
            {products && <Slider products={products} />}
        </>
    )
}

export default ResultsPage;