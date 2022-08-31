import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Java');

    const getResults = async () => {
        setIsLoading(true);

        const response = await fetch({
            method: 'GET',
            url: 'https://amazon23.p.rapidapi.com/product-search',
            params: {query: `${searchTerm}`, page: '1', country: 'US'},
            headers:  {
                'X-RapidAPI-Key': '8396ef7af7msh4f54ef9caf0feffp1283dfjsn2a7648f727a8',
                'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
            }
        })

        const data = await response.json();
        setResults(data);
        console.log(results);

        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            { children }
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);
