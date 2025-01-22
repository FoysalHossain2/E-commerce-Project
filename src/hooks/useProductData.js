import { useEffect } from "react"
import { useState } from "react"
import {fetchSearchResults ,sortData} from '../../Utils/helper'

export const useProductData = (category = false, selectCategory = "", direction) => {
    const [Error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [data, setdata] = useState([])


    useEffect(() => {
      
        let ignore = false

        const apiUrl = category
                 ? 'https://dummyjson.com/products/categories'
                 : selectCategory 
                 ? `https://dummyjson.com/products/category${selectCategory}`
                 : 'https://dummyjson.com/products?limit=1000'

        const fetchData = async () => {
            setIsLoading(true)
            try {
                const result = await fetchSearchResults(apiUrl)
                if (!ignore) {
                    setdata(result)
                    setError(null)
                }
            } catch (Error) {
                setError('Fail to Fetch Product');
                console.log('Fetch error', Error.message);
                
            } finally {
                if (!ignore) {
                    setIsLoading(false)
                }
            }
        }
        if ((category && !selectCategory) || !category) {
            fetchData();
        }

        return () => {
            ignore = true
        }

    }, [category, selectCategory])


    const sortedData = sortData(data.products, direction)
    return {data: sortedData , isLoading , Error}
    
}