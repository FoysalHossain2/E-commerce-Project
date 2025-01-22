const fetchSearchResults = async (url) => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Fatch to data fail");
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error, "error");
        
    }
}

const sortData = (array, direction) => {
    if (!Array.isArray(array)) {
        console.error("sortData requires an array but got:",);
        return []; 
    }

    return [...array].sort((a, b) => {
        if (direction === "Low to High") {
            return a.price - b.price;
        } else if (direction === "High to Low") {
            return b.price - a.price;
        }
        return 0;
    });
};

const searchData = (array, searchItem = "") => {
    if (!Array.isArray(array)) {
        console.error("Provided data is not an array:", array);
        return [];
    }

    return [...array].filter((d) => 
        typeof d.title === "string" && d.title.toLowerCase().includes(searchItem.toLowerCase())
    );
};



export {fetchSearchResults, sortData, searchData} ; 
