const getUrl = (pageNumber) => `https://jeval.com.au/collections/hair-care/products.json?page=${pageNumber}`

export const getRecommendedProducts = async (userInput) => {
    let num = 1;
    let hasMoreProducts = true;
    const filteredProducts = [];

    while (hasMoreProducts) {
        const response = await fetch(getUrl(num));

        if (response.ok) {
            const data = await response.json();

            if (data.products.length === 0) {
                hasMoreProducts = false;
            } else {
                filteredProducts.push(...data.products.filter(el =>
                    el.tags.some(tag => userInput.some(word => tag.toLowerCase().includes(word.toLowerCase()))) ||
                    userInput.some(word => el.title.toLowerCase().includes(word.toLowerCase())) ||
                    userInput.some(word => el.body_html.toLowerCase().includes(word.toLowerCase()))
                ));
            }
        }
        num++;
    }

    return filteredProducts;
};