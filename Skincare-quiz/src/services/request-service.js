/**
 * Generates a URL for fetching hair care products from a specific page number.
 *
 * @param {number} pageNumber - The page number to fetch products from.
 * @returns {string} The generated URL.
 */
const getUrl = (pageNumber) => `https://jeval.com.au/collections/hair-care/products.json?page=${pageNumber}`

/**
 * Retrieves recommended products based on user input.
 * @param {string[]} userInput - The user input containing keywords for filtering products.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of filtered products.
 */
export const getRecommendedProducts = async (userInput) => {
    let num = 1;
    let hasMoreProducts = true;
    const filteredProducts = [];

    while (hasMoreProducts) {
        try {
            const response = await fetch(getUrl(num));

            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.statusText}`);
            }

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
        } catch (error) {
            console.error(error);
            break;
        }
        
        num++;
    }

    return filteredProducts;
};